import { useForm } from 'react-hook-form'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'

import {
  CoffeeCard,
  ConfirmBtn,
  Divider,
  Form,
  FormContainer,
  GridContainer,
  InfoContainer,
  LocalBox,
  LocalHeader,
  PaymentBox,
  PaymentButtons,
  PaymentHeader,
  Prices,
  SubTotal,
  Total,
} from './styles'

import { TextInput } from '../../components/Form/Input/index'
import { useCart } from '../../hooks/useCart'
import { PaymentButton } from '../../components/Form/PaymentButton'
import { CoffeeCardCheckout } from '../../components/CoffeeCard'

const DELIVERY_PRICE = 3.5

export function Checkout() {
  const { cartItems, cartItemsTotal, cartQuantity } = useCart()
  const { register, watch } = useForm()

  const selectedPaymentMethod = watch('paymentMethod')
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

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
              <div>
                <PaymentButton
                  isSelected={selectedPaymentMethod === 'credit'}
                  {...register('paymentMethod')}
                  value="credit"
                >
                  <CreditCard size={16} />
                  <span>cartão de crédito</span>
                </PaymentButton>
                <PaymentButton
                  isSelected={selectedPaymentMethod === 'debit'}
                  {...register('paymentMethod')}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>cartão de débito</span>
                </PaymentButton>
                <PaymentButton
                  isSelected={selectedPaymentMethod === 'money'}
                  {...register('paymentMethod')}
                  value="money"
                >
                  <Money size={16} />
                  <span>dinheiro</span>
                </PaymentButton>
              </div>
            </PaymentButtons>
          </PaymentBox>
        </FormContainer>
      </InfoContainer>

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

          <ConfirmBtn disabled={cartQuantity <= 0}>confirmar pedido</ConfirmBtn>
        </CoffeeCard>
      </InfoContainer>
    </GridContainer>
  )
}
