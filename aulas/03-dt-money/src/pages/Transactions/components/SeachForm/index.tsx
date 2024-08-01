import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

/* Por que que um componente renderiza?
 * 1- Hooks changed (mudou estado, contexto, reducer);
 * 2- Props changed (mudou propriedades);
 * 3- Parent rerendered (Componente pai foi renderizado);
 *
 * Qual o fluxo de renderização?
 * 1- O react recria o HTML da interface daquele componente;
 * 2- Compara a versão do HTML com a anterior;
 * 3- SE alguma coisa mudou, ele recria o HTML em tela;
 *
 * Memo:
 * 0- Hooks changed, props changed (deep comparison | comparação profunda);
 * 0.1- Comparar com a versão anterior de hooks e props;
 * 0.2- SE mudou algo, ele permite a renderização;
 *
 * Sintaxe do memo: mude o nome do componente e crie um novo da seguinte forma:
 * export const SearchForm = memo(SerchFormComponent);
 *
 * Isso se aplica para funções no caso de variáveis se usa o useMemo()
 */

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
