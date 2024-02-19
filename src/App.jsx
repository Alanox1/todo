import { useState } from 'react'
import Form from './components/pages/form/Form'
import TaskList from './components/pages/taskList/TaskList'

const initialState = [
  {id : 1, title : "Ir a comprar", description : "Mantecol y Coca Cola"},
  {id : 2, title : "Leer", description : "Stephen king y Mariana Enriquez"}
]

function App() {
  const [ todos, setTodos ] = useState(initialState)
  
  return (
    <div className="container mx-auto px-14 py-12 bg-green-900">
      <h1 className="text-5xl text-center">todo</h1>
      <Form todos={todos} setTodos={setTodos} />
      <TaskList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
