import { useFormContext } from 'react-hook-form'
import { TextInput } from './Input'
import { Form } from './styles'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function LocalForm() {
  const { register, formState } = useFormContext()
  const { errors } = formState as unknown as ErrorsType

  return (
    <Form>
      <TextInput
        type="text"
        placeholder="CEP"
        containerProps={{ style: { gridArea: 'cep' } }}
        {...register('cep')}
        error={errors.cep?.message}
      />
      <TextInput
        type="text"
        placeholder="Rua"
        containerProps={{ style: { gridArea: 'rua' } }}
        {...register('street')}
        error={errors.street?.message}
      />
      <TextInput
        type="number"
        placeholder="Número"
        containerProps={{ style: { gridArea: 'numero' } }}
        {...register('number')}
        error={errors.number?.message}
      />
      <TextInput
        type="text"
        placeholder="Complemeneto"
        containerProps={{ style: { gridArea: 'complemento' } }}
        optional={true}
        {...register('complement')}
        error={errors.complement?.message}
      />
      <TextInput
        type="text"
        placeholder="Bairro"
        containerProps={{ style: { gridArea: 'bairro' } }}
        {...register('district')}
        error={errors.district?.message}
      />
      <TextInput
        type="text"
        placeholder="Cidade"
        containerProps={{ style: { gridArea: 'cidade' } }}
        {...register('city')}
        error={errors.city?.message}
      />
      <TextInput
        type="text"
        placeholder="UF"
        containerProps={{ style: { gridArea: 'uf' } }}
        {...register('uf')}
        error={errors.uf?.message}
      />
    </Form>
  )
}
