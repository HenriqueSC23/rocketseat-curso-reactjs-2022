import {
  FocusEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
} from 'react'
import { Container } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  containerProps?: HTMLAttributes<HTMLDivElement>
  optional?: boolean
}

export const TextInput = forwardRef(function TextInput(
  { optional, containerProps, onFocus, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>,
) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    onFocus?.(event)
  }

  return (
    <Container
      {...containerProps}
      data-state={isFocused ? 'fucused' : 'blurred'}
    >
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={ref}
        {...rest}
      />
      {optional ? <span>Opicional</span> : null}
    </Container>
  )
})
