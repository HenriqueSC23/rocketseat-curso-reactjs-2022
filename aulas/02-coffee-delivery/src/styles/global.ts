import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased
  }

  body, input, textarea, button {
    font-family: 'Roboto', 'sans-serif';
    ${(props) => props.theme.fonts.textM}

    h1 {
      font-family: 'Baloo 2', 'sans-serif';
      color: ${(props) => props.theme['base-title']};
      ${(props) => props.theme.fonts.titleM}
    }
  }
  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors['base-button']}
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors.purple}
  }
`
