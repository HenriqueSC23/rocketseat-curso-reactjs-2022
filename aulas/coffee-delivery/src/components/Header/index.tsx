import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import {
  ActionContainer,
  CartButton,
  HeaderContainer,
  LocationButton,
} from './style'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeDeliveryLogo} alt="Coffe Delivery Logotipo" />
      <ActionContainer>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          Porto Seguro, BA
        </LocationButton>
        <CartButton>
          <ShoppingCart size={22} weight="fill" />
          <span>1</span>
        </CartButton>
      </ActionContainer>
    </HeaderContainer>
  )
}
