import logo from '../assets/todo-logo.svg';

export function Header() {
    return(
        <header className="bg-gray-950">
            <img className='m-auto pt-[4.5rem] pb-20' src={logo} alt="ToDo Logotipo" />
        </header>
    )
}