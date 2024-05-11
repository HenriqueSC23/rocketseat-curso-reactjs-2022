import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${defaultTheme.colors['base-button']};
  background-color: ${defaultTheme.colors['base-input']};

  &[data-state='fucused'] {
    border-color: ${defaultTheme.colors['yellow-dark']};
  }

  span {
    color: ${defaultTheme.colors['base-label']};
    font-style: italic;
    font-size: 0.75rem;
  }

  input {
    width: 100%;
    border: none;
    background: transparent;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::placeholder {
      color: ${defaultTheme.colors['base-label']};
    }
  }
`
