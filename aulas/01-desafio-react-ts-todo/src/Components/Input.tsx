export function Input({ ...rest }: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    return(
        <input type="text" placeholder='Adicione uma nova tarefa'
        className='bg-gray-800 text-gray-100 border-solid border-gray-950 border-[1px] rounded-lg h-[3.375rem] p-4 w-full leading-[140%] focus:border-purple-950 outline-none'
        {...rest}
        />
    )
}