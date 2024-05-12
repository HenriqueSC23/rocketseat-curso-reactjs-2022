import { useForm } from 'react-hook-form'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'
import {
  Actions,
  Coffee,
  CoffeeCard,
  CoffeeCardItem,
  ConfirmBtn,
  Details,
  Divider,
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
  Prices,
  RemoveButton,
  SubTotal,
  Total,
} from './style'
import { TextInput } from '../../components/Input/Index'
import { PaymentButton } from '../../components/PaymentButton'
import americano from '../../assets/coffees/Americano.png'
import { QuantityInput } from '../../components/Form/QuantityInput'

export function Checkout() {
  const { register, watch } = useForm()
  const selectedPaymentMethod = watch('paymentMethod')

  return (
    <GridContainer>
      <InfoContainer>
        <h2>Complete seu pedido</h2>
        <FormContainer>
          <form action="">
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
          </form>
        </FormContainer>
      </InfoContainer>

      <InfoContainer>
        <h2>Cafés selecionados</h2>
        <CoffeeCard>
          <CoffeeCardItem>
            <Info>
              <Coffee src={americano} />

              <Details>
                <span>Expresso Tradicional</span>
                <Actions>
                  <QuantityInput />
                  <RemoveButton>
                    <Trash size={16} />
                    REMOVER
                  </RemoveButton>
                </Actions>
              </Details>
            </Info>
            <strong>9.90</strong>
          </CoffeeCardItem>

          <Divider />

          <CoffeeCardItem>
            <Info>
              <Coffee src={americano} />

              <Details>
                <span>Expresso Tradicional</span>
                <Actions>
                  <QuantityInput />
                  <RemoveButton>
                    <Trash size={16} />
                    REMOVER
                  </RemoveButton>
                </Actions>
              </Details>
            </Info>
            <strong>9.90</strong>
          </CoffeeCardItem>

          <Divider />

          <Prices>
            <SubTotal>
              <p>Total de itens</p>
              <span>R$19,80</span>
            </SubTotal>
            <SubTotal>
              <p>Entrega</p>
              <span>R$5,00</span>
            </SubTotal>
            <Total>
              <p>Total</p>
              <span>R$24,80</span>
            </Total>
          </Prices>

          <ConfirmBtn>confirmar pedido</ConfirmBtn>
        </CoffeeCard>
      </InfoContainer>
    </GridContainer>
  )
}
