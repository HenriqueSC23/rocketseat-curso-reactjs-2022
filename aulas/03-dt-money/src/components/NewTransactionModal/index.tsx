import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay } from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
          <form action="">
            <input type="text" placeholder='Descrição' />
            <input type="number" placeholder='Preço' />
            <input type="text" placeholder='Categoria' />

            <button type="submit">Cadastrar</button>
          </form>
        <Dialog.Close />
      </Content>
    </Dialog.Portal>
  )
}