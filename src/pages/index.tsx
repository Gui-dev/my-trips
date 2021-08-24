import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import { LinkWrapper } from 'components/LinkWrapper'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home () {
  const place = {
    id: '1',
    name: 'São Paulo',
    slug: 'sao paulo',
    location: {
      latitude: 0,
      longitude: 0
    }
  }

  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} area-label="About"/>
      </LinkWrapper>
      <Map places={[place]}/>
    </>
  )
}
