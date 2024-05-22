import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  FormContainer,
  InfoContainer,
  LocalBox,
  LocalHeader,
  PaymentBox,
  PaymentButtons,
  PaymentErrorMessage,
  PaymentHeader,
} from './styles'
import { PaymentButton } from '../Form/PaymentButton'
import { useFormContext } from 'react-hook-form'
import { LocalForm } from '../Form'

export function CompleteOrderForm() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  const selectedPaymentMethod = watch('paymentMethod')

  return (
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
          <LocalForm />
        </LocalBox>
        <PaymentBox>
          <PaymentHeader>
            <CurrencyDollar size={22} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentHeader>

          <PaymentButtons>
            <div>
              <PaymentButton
                isSelected={selectedPaymentMethod === 'Crédito'}
                {...register('paymentMethod')}
                value="Crédito"
              >
                <CreditCard size={16} />
                <span>cartão de crédito</span>
              </PaymentButton>
              <PaymentButton
                isSelected={selectedPaymentMethod === 'Débito'}
                {...register('paymentMethod')}
                value="Débito"
              >
                <Bank size={16} />
                <span>cartão de débito</span>
              </PaymentButton>
              <PaymentButton
                isSelected={selectedPaymentMethod === 'Dinheiro'}
                {...register('paymentMethod')}
                value="Dinheiro"
              >
                <Money size={16} />
                <span>dinheiro</span>
              </PaymentButton>
            </div>
            {paymentMethodError && (
              <PaymentErrorMessage>{paymentMethodError}</PaymentErrorMessage>
            )}
          </PaymentButtons>
        </PaymentBox>
      </FormContainer>
    </InfoContainer>
  )
}
