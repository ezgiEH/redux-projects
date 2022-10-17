import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredTodos, getTodosAsync, toggleTodoAsync, removeTodoAsync } from '../redux/todos/todosSlice'
import Loading from './Loading';
import Error from './Error';

function TodoList() {
    const dispatch = useDispatch()
    const filteredTodos = useSelector(selectFilteredTodos)
    const isLoading = useSelector((state) => state.todos.isLoading)
    const error = useSelector((state) => state.todos.error)

    const handleDestroy = async (id) => {
       if(window.confirm("Are you sure?")){
           await dispatch(removeTodoAsync(id))
       }
    }

    const handleToggle = async (id) => {
       await dispatch(toggleTodoAsync({id}))
    }

    useEffect(() =>{
        dispatch(getTodosAsync())
    }, [dispatch])

    if(isLoading){
        return <Loading />
    }

    if(error){
        return <Error message={error}/>
    }
    
    return (
        <div>
            <ul className="todo-list">
                {filteredTodos.map(item => (
                    <li key={item.id} className={item.completed ? 'completed': ''}>
                        <div className="view">
                            <input className="toggle" type="checkbox" onChange={() => handleToggle(item.id)}/>
                            <label>{item.title}</label>
                            <button className="destroy" onClick={() => handleDestroy(item.id)}></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList