import { ReactNode } from 'react'
import Link from 'next/link'

import { Container } from './style'

type LinkWrapperProps = {
  children: ReactNode
  href: string
}

export const LinkWrapper = ({ children, href }: LinkWrapperProps) => {
  return (
    <Container>
      <Link href={ href }>
        { children }
      </Link>
    </Container>
  )
}
