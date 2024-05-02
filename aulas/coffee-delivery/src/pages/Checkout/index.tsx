import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  Actions,
  Coffee,
  CoffeeCard,
  Details,
  Form,
  FormContainer,
  GridContainer,
  Info,
  InfoContainer,
  LocalBox,
  LocalHeader,
  PaymentBox,
  PaymentButtons,
  PaymentHeader,
} from './style'
import { TextInput } from '../../components/Input/Index'
import { PaymentButton } from '../../components/PaymentButton'
import americano from '../../assets/coffees/Americano.png'
import { QuantityInput } from '../../components/Form/QuantityInput'

export function Checkout() {
  return (
    <GridContainer>
      <InfoContainer>
        <h2>Complete seu pedido</h2>
        <FormContainer>
          <LocalBox>
            <LocalHeader>
              <MapPinLine size={22} />
              <div>
                <h3>Endereço de entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </LocalHeader>

            <Form>
              <TextInput
                type="number"
                placeholder="CEP"
                containerProps={{ style: { gridArea: 'cep' } }}
              />
              <TextInput
                type="text"
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'rua' } }}
              />
              <TextInput
                type="number"
                placeholder="Número"
                containerProps={{ style: { gridArea: 'numero' } }}
              />
              <TextInput
                type="text"
                placeholder="Complemeneto"
                containerProps={{ style: { gridArea: 'complemento' } }}
                optional={true}
              />
              <TextInput
                type="text"
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'bairro' } }}
              />
              <TextInput
                type="text"
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'cidade' } }}
              />
              <TextInput
                type="text"
                placeholder="UF"
                containerProps={{ style: { gridArea: 'uf' } }}
              />
            </Form>
          </LocalBox>
          <PaymentBox>
            <PaymentHeader>
              <CurrencyDollar size={22} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeader>

            <PaymentButtons>
              <PaymentButton>
                <CreditCard size={16} />
                <span>cartão de crédito</span>
              </PaymentButton>
              <PaymentButton>
                <Bank size={16} />
                <span>cartão de débito</span>
              </PaymentButton>
              <PaymentButton>
                <Money size={16} />
                <span>dinheiro</span>
              </PaymentButton>
            </PaymentButtons>
          </PaymentBox>
        </FormContainer>
      </InfoContainer>

      <InfoContainer>
        <h2>Cafés selecionados</h2>
        <CoffeeCard>
          <Info>
            <Coffee src={americano} />

            <Details>
              <span>Expresso Tradicional</span>
              <Actions>
                <QuantityInput />
              </Actions>
            </Details>
          </Info>
        </CoffeeCard>
      </InfoContainer>
    </GridContainer>
  )
}
