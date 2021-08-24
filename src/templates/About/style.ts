import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: auto;
  height: 100vh;
  max-width: var(--container);
`

export const Title = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
`

export const Content = styled.div`

  p {
    font-size: var(--small);
    line-height: var(--medium);
    margin-bottom: var(--large);
  }
`
