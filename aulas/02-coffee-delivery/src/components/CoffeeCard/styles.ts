import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const CoffeeCardItem = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    ${defaultTheme.fonts.textM}
    color: ${defaultTheme.colors['base-subtitle']};
  }

  strong {
    color: ${defaultTheme.colors['base-text']};
    ${defaultTheme.fonts.textM}
    font-weight: bold;
  }
`

export const Info = styled.div`
  display: flex;
  gap: 20px;
`

export const Coffee = styled.img`
  height: 64px;
  width: 64px;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 8px;
`

export const Actions = styled.div`
  display: flex;
  gap: 8px;

  span {
    text-align: center;
  }
`
export const RemoveButton = styled.button`
  width: 90px;
  height: 36px;
  padding: 8px;
  border: none;
  border-radius: 6px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${defaultTheme.colors['base-button']};
  color: ${defaultTheme.colors['base-text']};
  ${defaultTheme.fonts.buttonM};
  transition: all 0.2s;

  svg {
    color: ${defaultTheme.colors.purple};
  }

  &:hover {
    background-color: ${defaultTheme.colors['base-hover']};
    color: ${defaultTheme.colors['base-subtitle']};

    svg {
      color: ${defaultTheme.colors['purple-dark']};
    }
  }
`
