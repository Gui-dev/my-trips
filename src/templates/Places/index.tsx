import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import { NextSeo } from 'next-seo'

import { LinkWrapper } from 'components/LinkWrapper'
import { Container, Content, Title, Body, Gallery } from './style'

export type ImageProps = {
  url: string
  height: string
  width: string
}

export type PlaceTemplateProps = {
  place: {
    id: string
    name: string
    slug: string
    location: {
      latitude: number
      longitude: number
    }
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

export const PlaceTemplate = ({ place }: PlaceTemplateProps) => {
  const router = useRouter()

  if (router.isFallback) return null

  const myLoader = ({ src, width, quality }) => {
    return `https://media.graphcms.com/${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <Container>
      <NextSeo
        title={`My trips - ${place.name}`}
        description={place.description?.text}
        canonical="https://meusite.com.br"
        openGraph={{
          url: 'https://meusite.com.br',
          title: `My trips - ${place.name}`,
          description: place.description?.text,
          images: [
            {
              url: place.gallery[0].url,
              width: Number(place.gallery[0].width),
              height: Number(place.gallery[0].height),
              alt: `${place.name}`
            }
          ],
          site_name: 'My trips'
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} area-label="Go back to map"/>
      </LinkWrapper>

      <Content>
        <Title>{place.name}</Title>
        <Body dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}/>

        <Gallery>
          { place.gallery.map(image => {
            return (
              <Image
                key={`place-${image.url}`}
                loader={ myLoader }
                src={image.url}
                alt={place.name}
                title={place.name}
                height={600}
                width={1000}
                quality={75}
              />
            )
          }) }
        </Gallery>

      </Content>
    </Container>
  )
}
