import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const GridContainer = styled.div`
  display: flex;
  gap: 32px;
  justify-content: space-between;
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

export const Divider = styled.div`
  height: 1px;
  width: 328px;
  background-color: ${defaultTheme.colors['base-button']};
  margin: 0 auto;
`

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px;
  width: 25.5rem;
  background-color: ${defaultTheme.colors['base-card']};
  border-radius: 6px 44px 6px 44px;
`

export const ConfirmBtn = styled.button`
  width: full;
  padding: 12px;
  background-color: ${defaultTheme.colors.yellow};
  color: ${defaultTheme.colors.white};
  border: none;
  border-radius: 6px;
  transition: all 0.2s;
  text-transform: uppercase;
  ${defaultTheme.fonts.buttonG}

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${defaultTheme.colors['yellow-dark']};
  }
`

export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const PriceBase = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SubTotal = styled(PriceBase)`
  color: ${defaultTheme.colors['base-text']};
  ${defaultTheme.fonts.textM}
`

export const Total = styled(PriceBase)`
  color: ${defaultTheme.colors['base-subtitle']};
  ${defaultTheme.fonts.textL}
  font-weight: bold;
`

export const FormContainer = styled.form`
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
  flex-direction: column;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
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
