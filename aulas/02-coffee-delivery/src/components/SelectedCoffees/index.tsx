import { useCart } from '../../hooks/useCart'
import { CoffeeCardCheckout } from '../CoffeeCard'
import { InfoContainer } from '../CompleteOrderForm/styles'
import {
  CoffeeCard,
  ConfirmBtn,
  Divider,
  Prices,
  SubTotal,
  Total,
} from './styles'

const DELIVERY_PRICE = 3.5

export function SelectedCoffees() {
  const { cartItems, cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  return (
    <InfoContainer>
      <h2>Cafés selecionados</h2>
      <CoffeeCard>
        {cartItems.map((item) => (
          <CoffeeCardCheckout key={item.id} coffee={item} />
        ))}

        <Divider />

        <Prices>
          <SubTotal>
            <p>Total de itens</p>
            <span>R${cartItemsTotal.toFixed(2)}</span>
          </SubTotal>
          <SubTotal>
            <p>Entrega</p>
            <span>R${DELIVERY_PRICE.toFixed(2)}</span>
          </SubTotal>
          <Total>
            <p>Total</p>
            <span>R${cartTotal.toFixed(2)}</span>
          </Total>
        </Prices>

        <ConfirmBtn disabled={cartQuantity <= 0} type="submit">
          confirmar pedido
        </ConfirmBtn>
      </CoffeeCard>
    </InfoContainer>
  )
}
