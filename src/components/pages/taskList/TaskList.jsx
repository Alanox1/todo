import { useMemo } from 'react'
import TaskItem from '../taskItem/TaskItem'


const TaskList = ({todos,setTodos}) => {

  const visibleTodos = useMemo( () => todos,[todos])

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  
  return (
    <ul className="divide-y divide-gray-200">
        {visibleTodos.map(todo => <TaskItem key={todo.id} todo={ todo } handleDelete={handleDelete} />)}
    </ul>
  )
}

export default TaskList