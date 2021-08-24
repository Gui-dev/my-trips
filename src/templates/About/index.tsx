import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import { LinkWrapper } from 'components/LinkWrapper'

import { Container, Title, Content } from './style'

export const AboutTemplate = () => {
  return (
    <Container>
      <LinkWrapper href="/">
        <CloseOutline size={32} area-label="Home"/>
      </LinkWrapper>

      <Title>About - My Trips</Title>

      <Content>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Esse dolorum, tenetur delectus enim minima alias sunt numquam.
          Atque sapiente facere officiis voluptates molestias,
          obcaecati modi illum similique, ut hic natus?
        </p>
      </Content>
    </Container>
  )
}
