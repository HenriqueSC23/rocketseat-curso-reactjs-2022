import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const GridContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 80px 160px;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;

  img {
    margin-bottom: -13px;
  }
`

export const Order = styled.div`
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

export const OrderBox = styled.div`
  width: 100%;
  border: 1px solid;
  border-radius: 6px 36px;
  border-color: transparent;
  background-origin: border-box;
  background-image: linear-gradient(
    to bottom right,
    ${defaultTheme.colors.yellow},
    ${defaultTheme.colors.purple}
  );
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  background-color: ${defaultTheme.colors.white};
  border-radius: 6px 36px;

  div {
    display: flex;
    gap: 12px;
    align-items: center;

    svg {
      padding: 8px;
      border-radius: 50%;
    }
  }
`
