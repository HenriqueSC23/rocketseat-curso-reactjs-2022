import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const GridContainer = styled.div`
  display: flex;
  padding: 80px 160px;
  gap: 102px;
`

export const LeftColumn = styled.div`
  h1 {
    ${defaultTheme.fonts.titleL}
    color: ${defaultTheme.colors['yellow-dark']};
    margin-bottom: 4px;
  }

  p {
    ${defaultTheme.fonts.textL}
    color: ${defaultTheme.colors['base-subtitle']};
    margin-bottom: 40px;
  }
`