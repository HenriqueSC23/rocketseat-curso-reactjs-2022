import styled from 'styled-components'
import { defaultTheme } from '../../../styles/themes/default'

export const Container = styled.label`
  border: solid 1px transparent;
  background-color: ${defaultTheme.colors['base-button']};
  color: ${defaultTheme.colors['base-text']};
  padding: 1rem;
  width: 180px;
  height: 50px;
  border-radius: 6px;
  ${defaultTheme.fonts.buttonM}
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 12px;
  transition: all 0.2s;

  &:hover {
    background-color: ${defaultTheme.colors['base-hover']};
    color: ${defaultTheme.colors['base-subtitle']};
  }

  &[data-state='true'] {
    background-color: ${defaultTheme.colors['purple-light']};
    border: 1px solid ${defaultTheme.colors.purple};
  }

  input {
    display: none;
  }

  svg {
    color: ${defaultTheme.colors.purple};
  }
`
