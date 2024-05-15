import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import {
  ActionContainer,
  CartButton,
  HeaderContainer,
  LocationButton,
} from './styles'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={coffeeDeliveryLogo} alt="Coffe Delivery Logotipo" />
      </Link>
      <ActionContainer>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          <p>Porto Seguro, BA</p>
        </LocationButton>
        <CartButton>
          <Link to="checkout">
            <ShoppingCart size={22} weight="fill" />
            <span>1</span>
          </Link>
        </CartButton>
      </ActionContainer>
    </HeaderContainer>
  )
}
