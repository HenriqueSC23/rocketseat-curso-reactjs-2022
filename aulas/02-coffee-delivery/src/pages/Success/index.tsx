import { GridContainer, Order, OrderBox, OrderInfo } from './styles'
import Biker from '../../assets/Illustration.png'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

export function Success() {
  const theme = useTheme()

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
                <strong>Rua João Daniel Martinelli, 102 Farrapos</strong>- Porto
                Alegre, RS
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
                Previsão de entrega <strong>20 min - 30 min</strong>
              </span>
            </div>
            <div>
              <CurrencyDollar
                size={32}
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors['yellow-dark'] }}
              />
              <span>
                Pagamento na entrega <strong>Cartão de Crédito</strong>
              </span>
            </div>
          </OrderInfo>
        </OrderBox>
      </Order>
      <img src={Biker} alt="Motoqueiro delivery" />
    </GridContainer>
  )
}
