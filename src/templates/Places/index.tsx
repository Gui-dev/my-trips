import { Container } from './style'

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
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

export const PlaceTemplate = ({ place }: PlaceTemplateProps) => {
  return (
    <Container>
      <h1>{place.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: place.description.html }}/>

      { place.gallery.map(image => {
        return (
          <img
            key={place.id}
            src={image.url}
            alt={place.name}
            title={place.name}
          />
        )
      }) }
    </Container>
  )
}
