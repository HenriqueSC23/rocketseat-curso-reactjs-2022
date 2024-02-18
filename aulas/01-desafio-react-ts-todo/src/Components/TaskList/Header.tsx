interface Props {
    tasksCounter: number,
    checkedTasksCounter: number
}

export function Header({ tasksCounter, checkedTasksCounter}: Props) {
    return(
        <header className="flex flex-1 items-center justify-between">
            <aside className="flex items-center gap-2 font-bold text-sm">
                <p className="text-blue-300">Tarefas</p>
                <span className="text-gray-100 py-[1px] px-2 rounded-2xl bg-gray-700">{tasksCounter}</span>
            </aside>

            <aside className="flex items-center gap-2 font-bold text-sm">
                <p className="text-purple-400">Concluídas</p>
                <span className="text-gray-100 py-[1px] px-2 rounded-2xl bg-gray-700">{checkedTasksCounter} de {tasksCounter}</span>
            </aside>
        </header>
    )
}