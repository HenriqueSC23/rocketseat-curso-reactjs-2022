import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    ${defaultTheme.fonts.titleXS}
    color: ${defaultTheme.colors['base-subtitle']};
  }
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

export const PaymentBox = styled.div`
  height: 13rem;
  background-color: ${defaultTheme.colors['base-card']};
  padding: 40px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

export const PaymentErrorMessage = styled.p`
  ${defaultTheme.fonts.textXS}
  color: red;
  font-weight: 400;
`
