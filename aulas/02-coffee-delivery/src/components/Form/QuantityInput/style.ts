import styled from 'styled-components'
import { defaultTheme } from '../../../styles/themes/default'

export const ContainerQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5px;
  padding: 8px;
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
