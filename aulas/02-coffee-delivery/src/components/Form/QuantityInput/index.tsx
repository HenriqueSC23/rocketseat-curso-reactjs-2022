import { Minus, Plus } from '@phosphor-icons/react'
import { ContainerQuantity } from './styles'

type Props = {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function QuantityInput({
  quantity,
  decrementQuantity,
  incrementQuantity,
}: Props) {
  return (
    <ContainerQuantity>
      <button onClick={decrementQuantity}>
        <Minus weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus weight="bold" />
      </button>
    </ContainerQuantity>
  )
}
