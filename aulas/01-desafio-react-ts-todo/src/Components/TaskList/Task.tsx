import { Trash, Check } from '@phosphor-icons/react';
import { ITask } from '../../App';

interface Props {
  data: ITask
  removeTask: (id: number) => void
  toggleIsComplete: ({id, value}: {id: number; value: boolean}) => void
}

export function Task({data, removeTask, toggleIsComplete}: Props) {

  function handleRemove() {
    removeTask(data.id)
  }

  function handleToggle() {
    toggleIsComplete({id: data.id, value: !data.isComplete})
  }

  return (
      <div className='max-w-[46rem] m-auto mt-3 flex flex-1 items-start justify-between gap-3 text-gray-100 bg-gray-800 border-solid border-[1px] border-gray-700 rounded-lg'>
        
        <div className='py-4 pl-4 flex gap-3 items-start'>
          <button onClick={handleToggle}>
            <div className='size-6 border-[3px] border-solid border-blue-600 rounded-2xl font-bold'>
              {data.isComplete ? <Check className='w-full h-full p-[2px] bg-blue-600 rounded-xl' /> : <div />}
            </div>
          </button>
          <span className={data.isComplete ? 'leading-5 line-through text-gray-500' : 'leading-5'}>{data.text}</span>
        </div>

        <button 
        onClick={handleRemove}
        className='py-4 pr-4 pl-2'>
          <Trash size={24} className='text-gray-400'/>
        </button>
        
      </div>
  )
}
