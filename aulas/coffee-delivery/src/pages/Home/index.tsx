import {
  CoffeeListContainer,
  CoffeeListSession,
  ContentContainer,
  IntroSession,
  ItensContainer,
  TitleContainer,
} from './style'
import coffeImage from '../../assets/coffee-image.png'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { CoffeeComponent } from '../../components/Coffee'
import { coffees } from '../../../data.json'

export function Home() {
  const theme = useTheme()

  return (
    <div>
      <IntroSession>
        <ContentContainer>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleContainer>
          <ItensContainer>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors['yellow-dark'] }}
              />
              <p>Compra simples e segura</p>
            </div>
            <div>
              <Package
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors['base-text'] }}
              />
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <Timer
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors.yellow }}
              />
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <Coffee
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors.purple }}
              />
              <p>O café chega fresquinho até você</p>
            </div>
          </ItensContainer>
        </ContentContainer>
        <img src={coffeImage} alt="Copo de café" />
      </IntroSession>

      <CoffeeListSession>
        <h1>Nossos cafés</h1>

        <CoffeeListContainer>
          {coffees.map((coffee) => (
            <CoffeeComponent key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeListContainer>
      </CoffeeListSession>
    </div>
  )
}
