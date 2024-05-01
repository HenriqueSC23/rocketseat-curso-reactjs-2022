import {
  BuyContainer,
  CoffeTag,
  CoffeTitle,
  CoffeeCard,
  CoffeeDescription,
  CoffeeImg,
  Price,
} from './style'
import { QuantityInput } from '../Form/QuantityInput'

type Props = {
  coffee: {
    id: number
    title: string
    description: string
    tag: []
    price: string
    image: string
  }
}

export function CoffeeComponent({ coffee }: Props) {
  return (
    <CoffeeCard>
      <CoffeeImg src={coffee.image} alt="Café Americano" />
      <CoffeTag>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CoffeTag>
      <CoffeTitle>{coffee.title}</CoffeTitle>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <BuyContainer>
        <Price>
          <span>R$</span>
          <span>{coffee.price}</span>
        </Price>
        <QuantityInput />
      </BuyContainer>
    </CoffeeCard>
  )
}
