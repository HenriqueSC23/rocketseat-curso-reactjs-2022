import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'
import { Container } from './style'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean
}

export const PaymentButton = forwardRef(function PaymentButton(
  { children, isSelected, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <Container data-state={isSelected}>
      <input type="radio" ref={ref} {...rest} />
      {children}
    </Container>
  )
})
