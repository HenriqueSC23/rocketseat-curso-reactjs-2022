import { GridContainer, Order, OrderBox, OrderInfo } from './styles'
import Biker from '../../assets/Illustration.png'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../Checkout'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function Success() {
  const theme = useTheme()
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  if (!state) return <></>

  return (
    <GridContainer>
      <Order>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <OrderBox>
          <OrderInfo>
            <div>
              <MapPin
                weight="fill"
                size={32}
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.purple }}
              />
              <span>
                Entrega em{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </span>
            </div>
            <div>
              <Timer
                weight="fill"
                size={32}
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.yellow }}
              />
              <span>
                Previsão de entrega <br />
                <strong>20 min - 30 min</strong>
              </span>
            </div>
            <div>
              <CurrencyDollar
                size={32}
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors['yellow-dark'] }}
              />
              <span>
                Pagamento na entrega <br />
                <strong>{state.paymentMethod}</strong>
              </span>
            </div>
          </OrderInfo>
        </OrderBox>
      </Order>
      <img src={Biker} alt="Motoqueiro delivery" />
    </GridContainer>
  )
}
