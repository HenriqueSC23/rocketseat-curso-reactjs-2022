import { Trash } from '@phosphor-icons/react'
import { QuantityInput } from '../Form/QuantityInput'
import {
  Actions,
  Coffee,
  CoffeeCardItem,
  Details,
  Info,
  RemoveButton,
} from './styles'
import { CartItem } from '../../contexts/CartContext'
import { useCart } from '../../hooks/useCart'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCardCheckout({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  const totalPrice = coffee.price * coffee.quantity

  return (
    <CoffeeCardItem>
      <Info>
        <Coffee src={coffee.image} />
        <Details>
          <span>{coffee.title}</span>
          <Actions>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </Actions>
        </Details>
      </Info>
      <strong>R${totalPrice.toFixed(2)}</strong>
    </CoffeeCardItem>
  )
}
