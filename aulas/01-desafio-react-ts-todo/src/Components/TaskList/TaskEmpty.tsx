import { ClipboardText } from '@phosphor-icons/react';

export function TaskEmpty() {
    return(
        <div className="max-w-[46rem] m-auto text-base text-gray-600 text-center leading-5">
            <ClipboardText className='m-auto size-20 text-gray-700 mt-16 mb-4' weight='thin' />
            <p className='font-bold'>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}