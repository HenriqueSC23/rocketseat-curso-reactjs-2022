import { PlusCircle } from '@phosphor-icons/react'

type Props = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement    
>

export function Button({ children, ...rest }: Props ) {
    return(
        <button
        className='flex items-center justify-center h-[3.25rem] p-4 bg-blue-600 duration-500 hover:bg-blue-500 text-gray-100 border-0 rounded-lg font-bold gap-[0.5rem] text-sm'
        {...rest}
        >
            {children}
            Criar
            <PlusCircle size={20} className='text-gray-100' weight='bold'/>
        </button>
    )
}