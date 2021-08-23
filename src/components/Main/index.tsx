import { Container, Description, Illustration, Logo, Title } from './style'

export const Main = () => {
  return (
    <Container>
      <Logo src="/images/logo.svg" alt="Imagem de um átomo e React (NextJS) - Boilerplate escrito ao lado"/>
      <Title>React - Boilerplate</Title>
      <Description>Typescript, ReactJS, NextJS e Styled Components</Description>
      <Illustration src="/images/hero-illustration.svg" alt="Desenvolvedor de frente para uma tela com código"/>
    </Container>
  )
}
