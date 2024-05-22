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
