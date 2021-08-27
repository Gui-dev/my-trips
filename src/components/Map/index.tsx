import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

// import { Container, Description, Illustration, Logo, Title } from './style'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

const Map = ({ places }: MapProps) => {
  return (
    <MapContainer center={[0, 0]} zoom={3} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { places?.map(place => {
        return (
          <Marker
            key={String(place.id)}
            position={[place.location.latitude, place.location.longitude]}
            title={place.name}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )
      }) }
    </MapContainer>
  )
}

export default Map
