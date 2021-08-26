import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import { LinkWrapper } from 'components/LinkWrapper'

import { Container, Title, Content } from './style'

type PagesTemplateProps = {
  title: string
  content: string
}

export const PagesTemplate = ({ title, content }: PagesTemplateProps) => {
  return (
    <Container>
      <LinkWrapper href="/">
        <CloseOutline size={32} area-label="Home"/>
      </LinkWrapper>

      <Title>{ title }</Title>

      <Content>
        <div dangerouslySetInnerHTML={{ __html: content }}/>
      </Content>
    </Container>
  )
}
