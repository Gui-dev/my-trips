import { useRouter } from 'next/dist/client/router'
import { MapConsumer, MapContainer, Marker, TileLayer } from 'react-leaflet'

import { Container } from './style'

type Place = {
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
}

export type MapProps = {
  places?: Place[]
}

const Map = ({ places }: MapProps) => {
  const router = useRouter()
  const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
  const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
  const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID
  const url = `https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`

  const handleNavigationToPlace = (slug: string) => {
    router.push(`/place/${slug}`)
  }

  const CustomTileLayer = () => {
    return MAPBOX_API_KEY
      ? (
        <TileLayer
          attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url={url}
        />
        )
      : (
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        )
  }

  return (
    <Container>
      <MapContainer
        center={[0, 0]}
        zoom={3}
        minZoom={3}
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
        style={{ height: '100%', width: '100%' }}
      >
        <MapConsumer>
          { (map) => {
            const width = window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth

            if (width < 768) {
              map.setMinZoom(2)
            }

            return null
          } }
        </MapConsumer>
        <CustomTileLayer />
        { places?.map(place => {
          return (
            <Marker
              key={`place-${String(place.slug)}`}
              position={[place.location.latitude, place.location.longitude]}
              title={place.name}
              eventHandlers={{
                click: () => handleNavigationToPlace(place.slug)
              }}
            />
          )
        }) }
      </MapContainer>
    </Container>
  )
}

export default Map
