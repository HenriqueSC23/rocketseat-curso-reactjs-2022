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
} from './style'
import { QuantityInput } from '../Form/QuantityInput'
import { ShoppingCartSimple } from '@phosphor-icons/react'

type Props = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function CoffeeComponent({ coffee }: Props) {
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
          <QuantityInput />
          <BuyButton>
            <ShoppingCartSimple weight="fill" size={20} />
          </BuyButton>
        </Container>
      </BuyContainer>
    </CoffeeCard>
  )
}
