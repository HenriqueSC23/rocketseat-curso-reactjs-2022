import {
  BuyContainer,
  CoffeTag,
  CoffeTitle,
  CoffeeCard,
  CoffeeDescription,
  CoffeeImg,
  Container,
  Price,
  BuyButton,
  Tags,
} from './styles'
import { QuantityInput } from '../Form/QuantityInput'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { useCart } from '../../hooks/useCart'
import { useState } from 'react'

export interface Coffee {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

type Props = {
  coffee: Coffee
}

export function CoffeeComponent({ coffee }: Props) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCard } = useCart()

  function handleIncrease() {
    setQuantity(quantity + 1)
  }

  function handleDecrease() {
    setQuantity(quantity - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCard(coffeeToAdd)
  }

  return (
    <CoffeeCard>
      <CoffeeImg src={coffee.image} alt="Café Americano" />
      <Tags>
        {coffee.tags.map((tag) => (
          <CoffeTag key={tag}>
            <span>{tag}</span>
          </CoffeTag>
        ))}
      </Tags>
      <CoffeTitle>{coffee.title}</CoffeTitle>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <BuyContainer>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>
        <Container>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <BuyButton onClick={handleAddToCart}>
            <ShoppingCartSimple weight="fill" size={20} />
          </BuyButton>
        </Container>
      </BuyContainer>
    </CoffeeCard>
  )
}
