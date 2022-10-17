import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoAsync } from '../redux/todos/todosSlice'
import Loading from './Loading'
import Error from './Error'

function Form() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const isLoading = useSelector(state => state.todos.addNewTodo.isLoading)
    const error = useSelector(state => state.todos.addNewTodo.error)

    const handleSubmit = async (e) => {
      e.preventDefault()

      if(!title) return

      await dispatch(addTodoAsync({title}))
      setTitle('')
    }

  return (
    <form style={{display: "flex", alignItems: "center"}} onSubmit={handleSubmit}>
		  <input 
        disabled={isLoading}
        className="new-todo" 
        placeholder="What needs to be done?" 
        autoFocus
        value={title} 
        onChange={(e) => setTitle(e.target.value)}/>
	    { isLoading && <Loading />}
      { error && <Error message={error} />}
    </form>
  )
}

export default Form