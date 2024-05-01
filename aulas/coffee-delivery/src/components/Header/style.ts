import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem 10rem;
  justify-content: space-between;
`

export const ActionContainer = styled.div`
  display: flex;
  gap: 12px;
`

const BaseButton = styled.button`
  border: none;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`

export const LocationButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors.purple};

  p {
    color: ${(props) => props.theme.colors['purple-dark']};
  }

  ${defaultTheme.fonts.textS}
`

export const CartButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors['yellow-light']};
  position: relative;

  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
    &.active {
      color: ${(props) => props.theme.colors['yellow-dark']};
    }
  }

  span {
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(50%, -50%);

    background-color: ${(props) => props.theme.colors['yellow-dark']};
    height: 20px;
    width: 20px;
    border-radius: 50%;
    color: ${(props) => props.theme.colors.white};
    font-size: 0.75rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
