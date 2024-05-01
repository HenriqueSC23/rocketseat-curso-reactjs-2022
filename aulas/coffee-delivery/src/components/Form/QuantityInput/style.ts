import styled from 'styled-components'
import { defaultTheme } from '../../../styles/themes/default'

export const Container = styled.div`
  display: flex;
  gap: 8px;
`

export const ContainerQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5px;
  width: 4.5rem;
  height: 2rem;
  border-radius: 6px;
  background-color: ${defaultTheme.colors['base-button']};

  button {
    border: none;
    color: ${defaultTheme.colors.purple};
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    cursor: pointer;

    &:hover {
      color: ${defaultTheme.colors['purple-dark']};
    }
  }

  span {
    height: 20px;
    width: 20px;
  }
`

export const BuyButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${defaultTheme.colors.purple};
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;

  svg {
    color: ${defaultTheme.colors.white};
  }

  &:hover {
    background-color: ${defaultTheme.colors['purple-dark']};
  }
`
