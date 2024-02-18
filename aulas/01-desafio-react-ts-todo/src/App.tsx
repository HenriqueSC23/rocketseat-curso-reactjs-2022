import { Task } from './Components/TaskList/Task';
import { Header } from './Components/Header';
import { Header as ListHeader} from './Components/TaskList/Header';
import { Input } from './Components/Input'
import { Button } from './Components/Button';
import { useEffect, useState } from 'react';
import { TaskEmpty } from './Components/TaskList/TaskEmpty';

export interface ITask {
  id: number,
  text: string,
  isComplete: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')
  const tasksCompleted = tasks.filter((task) => task.isComplete)
  
  useEffect(() => {
    const listener = (event: { code: string; preventDefault: () => void; }) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        handleNewTask()
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handleNewTask]);

  function handleNewTask() {

    if (inputValue == ''){
      return
    }
    
    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isComplete: false
    }
    
    setTasks([...tasks, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((tasks) => tasks.id !== id)

    if(!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleIsComplete({id, value}: {id: number; value: boolean}) {
    const uptadedTasks = tasks.map((task) => {
      if(task.id === id) {
        return {...task, isComplete: value}
      }

      return {...task}
    })
    
    setTasks(uptadedTasks)
  }

  return (
    <div>
      <Header />
      <div className='max-w-[46rem] px-4 m-auto flex flex-1 justify-between gap-[0.5rem] -translate-y-1/2 mb-[2.3125rem]'>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <Button onClick={handleNewTask} />
      </div>

      <div className='max-w-[46rem] px-4 m-auto flex flex-col gap-6'>
        <ListHeader tasksCounter={tasks.length} checkedTasksCounter={tasksCompleted.length}/>

        {tasks.length > 0 ? (
          <div>
          {tasks.map(task => (
            <Task
            key={task.id}
            data={task}
            removeTask={handleRemoveTask}
            toggleIsComplete={handleToggleIsComplete}
            />
          ))}
        </div>
        ) : (
          <TaskEmpty />
        )}

        
      </div>
      
    </div>
    )
}


