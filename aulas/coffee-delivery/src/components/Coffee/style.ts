import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const CoffeeCard = styled.div`
  background-color: ${(props) => props.theme.colors['base-card']};
  padding: 0 20px 20px 20px;
  border-radius: 6px 36px;
  width: 256px;

  display: flex;
  flex-direction: column;

  text-align: center;
`

export const Tags = styled.div`
  display: flex;
  align-self: center;
  gap: 4px;
`

export const CoffeeImg = styled.img`
  margin-top: -20px;
  width: 120px;
  height: 120px;
  align-self: center;
`

export const CoffeTag = styled.div`
  background-color: ${defaultTheme.colors['yellow-light']};
  border-radius: 100px;
  padding: 4px 8px;
  margin-top: 12px;

  display: flex;
  gap: 4px;
  align-items: center;
  align-self: center;

  span {
    color: ${defaultTheme.colors['yellow-dark']};
    ${defaultTheme.fonts.tag};
    text-transform: uppercase;
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

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;
  color: ${defaultTheme.colors['base-text']};

  span:first-child {
    ${defaultTheme.fonts.textS}
  }
  span:last-child {
    ${defaultTheme.fonts.titleM}
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const BuyButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${defaultTheme.colors.purple};
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  svg {
    color: ${defaultTheme.colors.white};
  }

  &:hover {
    background-color: ${defaultTheme.colors['purple-dark']};
  }
`
