import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #FFF;
  padding: 3rem;
  height: 100%;
  width: 100%;
  background-color: #06092B;
`

export const Logo = styled.img`
  margin-bottom: 2rem;
  width: 25rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

export const Description = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
