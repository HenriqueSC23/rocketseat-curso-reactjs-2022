import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import { BuyButton, Container, ContainerQuantity } from './style'

export function QuantityInput() {
  return (
    <Container>
      <ContainerQuantity>
        <button>
          <Minus weight="bold" />
        </button>
        <span>1</span>
        <button>
          <Plus weight="bold" />
        </button>
      </ContainerQuantity>
      <BuyButton>
        <ShoppingCartSimple weight="fill" size={20} />
      </BuyButton>
    </Container>
  )
}
