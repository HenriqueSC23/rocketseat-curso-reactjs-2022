import { HTMLAttributes, LegacyRef, forwardRef } from 'react'
import { Container } from './style'

type Props = HTMLAttributes<HTMLInputElement> & {
  isSelected?: boolean
}

export const PaymentButton = forwardRef(function Radio(
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
