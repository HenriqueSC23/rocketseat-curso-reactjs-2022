import { CompleteOrderForm } from '../../components/CompleteOrderForm'
import { SelectedCoffees } from '../../components/SelectedCoffees'
import { GridContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

enum PaymentMethods {
  credit = 'Crédito',
  debit = 'Débito',
  money = 'Dinheiro',
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número da rua'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe o estado'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type confirmOrderFormData = OrderData

export function Checkout() {
  const confirmOrderForm = useForm<confirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })
  const navigate = useNavigate()
  const { handleSubmit } = confirmOrderForm

  const { cleanCart } = useCart()

  function handleConfirmOrder(data: confirmOrderFormData) {
    cleanCart()
    navigate('/success', {
      state: data,
    })
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <GridContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedCoffees />
      </GridContainer>
    </FormProvider>
  )
}
