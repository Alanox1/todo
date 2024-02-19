import { useCallback } from 'react'

const TaskItem = ({ todo, handleDelete }) => {
    
  const onDelete = useCallback(() => {
        handleDelete(todo.id)
  }, [todo,handleDelete] )


  return (
    <li className='flex items-center justify-between py-4'>
      <div className='flex flex-col flex-grow'>
        <h3 className='flex-grow text-2xl'>{todo.title}</h3>
        <p className='mr-8'>{todo.description}</p>
      </div>
        
        <button onClick={onDelete} className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'>Delete</button>
    </li>
  )
}

export default TaskItem

