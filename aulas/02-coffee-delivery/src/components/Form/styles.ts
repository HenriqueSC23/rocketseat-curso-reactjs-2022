import styled from 'styled-components'

export const Form = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'rua rua rua'
    'numero complemento complemento'
    'bairro cidade uf';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`
