import {createSlice} from '@reduxjs/toolkit';
import { nanoid }  from '@reduxjs/toolkit'

export const todosSlice = createSlice ({
    name: 'todos',
    initialState: {
        items: [],
        activeFilter: 'all',
    },
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.items.push(action.payload)
             },
             prepare:({ title }) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        completed: false
                    }
                }
             } 
        },
        toggle: (state, action) => {
            const { id } = action.payload
            const item = state.items.find(item => item.id === id)
            item.completed = !item.completed
        },
        destroy: (state, action) => {
        const id = action.payload
        const filtered = state.items.filter((item) => item.id !== id)
        state.items = filtered
        },
        changeActiveFilter: (state,action) => {
            state.activeFilter = action.payload
        },
        clearCompleted: (state) => {
            const filtered = state.items.filter(item => item.completed === false)
            state.items = filtered
        }
    }
})

export const selectTodos = (state) => state.todos.items
export const selectFilteredTodos = (state) => {
    if(state.todos.activeFilter === 'all'){
        return state.todos.items
    }
    return state.todos.items.filter((todo) => 
    state.todos.activeFilter === 'active'
    ? todo.completed === false
    : todo.completed === true)
}
export default todosSlice.reducer
export const {addTodo, toggle, destroy,changeActiveFilter, clearCompleted} = todosSlice.actions