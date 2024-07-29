import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const newTransactionSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionSchema>;

export function NewTransactionModal() {
  const { 
    control,
    register, 
    handleSubmit,
    formState: {isSubmitting}
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionSchema),
    defaultValues: {
      type: 'income'
    }
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await new Promise (resolve => setTimeout(resolve, 2000));

    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton><X size={24}/></CloseButton>

        <Dialog.Title>Nova Transação</Dialog.Title>
          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input 
            type="text" 
            placeholder='Descrição'
            {...register('description')}
            />
            <input 
            type="number" 
            placeholder='Preço'
            {...register('price', { valueAsNumber: true })}
            />
            <input 
            type="text" 
            placeholder='Categoria'
            {...register('category')}
            />
            
            <Controller 
            control={control}
            name='type'
            render={({ field }) => {
              return (
                <TransactionType 
                onValueChange={field.onChange}
                value={field.value}
                >
                  <TransactionTypeButton variant='income' value='income'>
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant='outcome' value='outcome'>
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
            />

            <button type="submit" disabled={isSubmitting}>Cadastrar</button>
          </form>
      </Content>
    </Dialog.Portal>
  )
}