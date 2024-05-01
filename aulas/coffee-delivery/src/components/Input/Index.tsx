import {
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
} from 'react'
import { Container } from './Style'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  containerProps?: HTMLAttributes<HTMLDivElement>
  optional?: boolean
}

export const TextInput = forwardRef(function TextInput(
  { optional, containerProps, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <Container {...containerProps}>
      <input ref={ref} {...rest} />
      {optional ? <span>Opicional</span> : null}
    </Container>
  )
})
