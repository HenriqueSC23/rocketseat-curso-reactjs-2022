import styled from 'styled-components'

export const IntroSession = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
  gap: 3.5rem;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const TitleContainer = styled.div`
  width: 588px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.25rem;
  }
`

export const ItensContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  svg {
    padding: 8px;
    border-radius: 50%;
  }

  div {
    display: flex;
    gap: 12px;
    align-items: center;
  }
`
