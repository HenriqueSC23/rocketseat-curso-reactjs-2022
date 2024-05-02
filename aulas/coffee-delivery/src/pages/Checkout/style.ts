import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const GridContainer = styled.div`
  display: flex;
  gap: 32px;
  margin: 40px 160px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    ${defaultTheme.fonts.titleXS}
    color: ${defaultTheme.colors['base-subtitle']};
  }
`

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 25.5rem;
  height: 28.625rem;
  background-color: ${defaultTheme.colors['base-card']};
  border-radius: 6px 44px 6px 44px;
`

export const Info = styled.div`
  display: flex;
  gap: 20px;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`

export const Coffee = styled.img`
  height: 64px;
  width: 64px;
`

export const FormContainer = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const LocalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 23.25rem;
  padding: 40px;
  border-radius: 6px;
  background-color: ${defaultTheme.colors['base-card']};
`

export const FormHeaderBase = styled.div`
  display: flex;
  gap: 8px;

  svg {
    align-self: baseline;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;

    h3 {
      ${defaultTheme.fonts.textM}
      color: ${defaultTheme.colors['base-subtitle']};
    }
    p {
      ${defaultTheme.fonts.textS}
      color: ${defaultTheme.colors['base-text']};
    }
  }
`

export const LocalHeader = styled(FormHeaderBase)`
  svg {
    color: ${defaultTheme.colors['yellow-dark']};
  }
`
export const Form = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'rua rua rua'
    'numero complemento complemento'
    'bairro cidade uf';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`

export const PaymentHeader = styled(FormHeaderBase)`
  svg {
    color: ${defaultTheme.colors.purple};
  }
`
export const PaymentButtons = styled.div`
  display: flex;
  gap: 12px;
`

export const PaymentBox = styled.div`
  height: 13rem;
  background-color: ${defaultTheme.colors['base-card']};
  padding: 40px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
