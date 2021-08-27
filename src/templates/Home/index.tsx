import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import { LinkWrapper } from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export const HomeTemplate = ({ places }: MapProps) => {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} area-label="About"/>
      </LinkWrapper>
      <Map places={places}/>
    </>
  )
}
