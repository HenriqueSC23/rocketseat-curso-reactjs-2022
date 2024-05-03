import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const IntroSession = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.75rem 10rem;
  gap: 3.5rem;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const TitleContainer = styled.section`
  width: 588px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    ${defaultTheme.fonts.titleXL}
    color: ${defaultTheme.colors['base-title']}
  }

  p {
    ${defaultTheme.fonts.textL}
    color: ${defaultTheme.colors['base-subtitle']}
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

    p {
      ${defaultTheme.fonts.textM}
      color: ${defaultTheme.colors['base-text']}
    }
  }
`

export const CoffeeListSession = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 10rem;

  h1 {
    ${defaultTheme.fonts.titleL}
    color: ${defaultTheme.colors['base-subtitle']}
  }
`

export const CoffeeListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 40px;
  grid-column-gap: 32px;
  padding: 3rem 0;
`
