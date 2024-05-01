import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const CoffeeCard = styled.div`
  width: 16rem;
  height: 19.375rem;
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CoffeeImg = styled.img`
  margin-top: -20px;
  width: 120px;
  height: 120px;
`

export const CoffeTag = styled.div`
  background-color: ${defaultTheme.colors['yellow-light']};
  border-radius: 100px;
  padding: 4px 8px;
  margin-top: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${defaultTheme.colors['yellow-dark']};
    ${defaultTheme.fonts.tag};
  }
`

export const CoffeTitle = styled.h3`
  color: ${defaultTheme.colors['base-subtitle']};
  ${defaultTheme.fonts.titleS}
  margin-top: 16px;
`

export const CoffeeDescription = styled.p`
  color: ${defaultTheme.colors['base-label']};
  ${defaultTheme.fonts.textS}
  width: 13.5rem;
  margin-top: 8px;
`

export const Price = styled.div`
  color: ${defaultTheme.colors['base-text']};

  span:first-child {
    ${defaultTheme.fonts.textS}
  }
  span:last-child {
    ${defaultTheme.fonts.titleM}
  }
`

export const BuyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: 36px;
`
