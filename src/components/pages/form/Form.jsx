import { useState } from 'react'

const Form = ({todos,setTodos}) => {
  const [ text, setText ] = useState("")
  const [ description, setDescription ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id : Math.floor(Math.random() * 10000),
      title : text,
      description : description
    }
    setTodos([...todos, newTodo])
    setText("")
    setDescription("")
  }
  
  return (
    <form onSubmit={handleSubmit} className='mt-4 flex'>
        <input value={text} onChange={(e) => setText(e.target.value)}
               className="form-input flex-grow mr-2 text-black"
               placeholder='Ir a comprar'
        />
        <input value={description} onChange={(e) => setDescription(e.target.value)}
               className="form-input flex-grow mr-2 text-black"
               placeholder='Mantecol y Harina...'
        />
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Add</button>
    </form>
  )
}

export default Form