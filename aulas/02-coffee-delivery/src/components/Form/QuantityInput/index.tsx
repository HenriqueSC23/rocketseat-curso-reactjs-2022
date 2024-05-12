import { Minus, Plus } from '@phosphor-icons/react'
import { ContainerQuantity } from './style'

export function QuantityInput() {
  return (
    <ContainerQuantity>
      <button>
        <Minus weight="bold" />
      </button>
      <span>1</span>
      <button>
        <Plus weight="bold" />
      </button>
    </ContainerQuantity>
  )
}
