import { Minus, Plus } from '@phosphor-icons/react'
import { ContainerQuantity } from './styles'

interface QuantityInputProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantityInput({
  onDecrease,
  onIncrease,
  quantity,
}: QuantityInputProps) {
  return (
    <ContainerQuantity>
      <button onClick={onDecrease} disabled={quantity <= 1}>
        <Minus weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>
        <Plus weight="bold" />
      </button>
    </ContainerQuantity>
  )
}
