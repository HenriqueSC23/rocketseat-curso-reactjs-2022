import {
  FocusEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
} from 'react'
import { Container, ErrorMessage, InputWrapper } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  containerProps?: HTMLAttributes<HTMLDivElement>
  optional?: boolean
  error?: string
}

export const TextInput = forwardRef(function TextInput(
  { error, optional, containerProps, onFocus, ...rest }: Props,
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
    <InputWrapper {...containerProps} onFocus={handleFocus} onBlur={handleBlur}>
      <Container data-state={isFocused ? 'fucused' : 'blurred'}>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...rest}
        />
        {optional ? <span>Opicional</span> : null}
      </Container>

      {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
    </InputWrapper>
  )
})
