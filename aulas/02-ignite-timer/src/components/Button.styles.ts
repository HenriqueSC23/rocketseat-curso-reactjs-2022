import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secundary: 'orange',
  danger: 'red',
  success: 'grenn',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  /* ${(props) => {
    return css`
      background: ${buttonVariants[props.variant]};
    `
  }} */
`
