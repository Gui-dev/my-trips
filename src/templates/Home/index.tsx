import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { NextSeo } from 'next-seo'

import { LinkWrapper } from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export const HomeTemplate = ({ places }: MapProps) => {
  return (
    <>
      <NextSeo
        title="My trips"
        description="A simple project to show in a map the places that I went and show more
        informations and photos when clicked"
        canonical="https://meusite.com.br"
        openGraph={{
          url: 'https://meusite.com.br',
          title: 'My trips',
          description: 'A simple project to show in a map the places that I went and show more informations and photos when clicked',
          images: [
            {
              url: 'https://meusite.com',
              width: 1280,
              height: 720,
              alt: 'My trips'
            }
          ],
          site_name: 'My trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} area-label="About"/>
      </LinkWrapper>
      <Map places={places}/>
    </>
  )
}
