import styled from 'styled-components'

export const Container = styled.div`
  padding: var(--large) var(--medium);
`

export const Content = styled.div`
  max-width: var(--container);
  margin: auto;
`

export const Title = styled.h1`
  font-size: var(--large);
  text-align: center;
  margin-bottom: var(--medium);
`

export const Body = styled.div`
  margin-bottom: var(--large);

  p {
  margin-bottom: var(--medium);
  }
`

export const Gallery = styled.div`
  display: grid;
  grid-gap: var(--medium);

  img {
    margin: auto;
    max-width: 100%;
    background-color: #F6F7F8;
    background-image: linear-gradient(
      to right,
      #F6F7F8 0%,
      #EDEEF1 20%,
      #F6F7F8 40%,
      #F6F7F8 100%,
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`
