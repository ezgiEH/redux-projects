import {createSlice} from '@reduxjs/toolkit';
import {getTodosAsync, addTodoAsync, toggleTodoAsync, removeTodoAsync} from './services';

export const todosSlice = createSlice ({
    name: 'todos',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        addNewTodo: {
            isLoading: false,
            error: null
        },
        toggleTodo: {
            isLoading: false,
            error: null
        },
        removeTodo: {
            isLoading: false,
            error: null
        },

        activeFilter: localStorage.getItem('activeFilter') || 'all',
    },
    reducers: {
        changeActiveFilter: (state,action) => {
            state.activeFilter = action.payload
        },
        clearCompleted: (state) => {
            const filtered = state.items.filter(item => item.completed === false)
            state.items = filtered
        }
    },

    extraReducers: {
        //get todos
        [getTodosAsync.pending]: (state, action) => {
            state.isloading = true
        },
        [getTodosAsync.fulfilled]: (state, action) => {
           state.items = action.payload
           state.isloading = false 
        },
        [getTodosAsync.rejected]: (state, action) =>{
            state.isLoading = false
            state.error = action.error.message
        },

        //add todo
        [addTodoAsync.pending]: (state, action) => {
            state.addNewTodo.isLoading = true
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload)
            state.addNewTodo.isLoading = false
        },
        [addTodoAsync.rejected]: (state, action) => {
            state.addNewTodo.isLoading = false
            state.addNewTodo.error = action.error.message
        },

        // toggle todo
        [toggleTodoAsync.pending]: (state, action) => {
            state.toggleTodo.isLoading = true
        },  
        [toggleTodoAsync.fulfilled]: (state, action) => {
            const { id } = action.payload
            const item = state.items.find(item => item.id === id)
            item.completed = !item.completed
            state.toggleTodo.isLoading = false
        },
        [toggleTodoAsync.rejected]: (state, action) => {
            state.toggleTodo.isLoading = false
            state.toggleTodo.error = action.error.message
        },

        // remove todo
        [removeTodoAsync.pending]: (state, action) => {
            state.removeTodo.isLoading = true
        },
        [removeTodoAsync.fulfilled]: (state, action) => {
            const id = action.payload
            const filtered = state.items.filter(item => item.id !== id)
            state.items = filtered 
            state.removeTodo.isLoading = false
        },
        [removeTodoAsync.rejected]: (state, action) => {
            state.removeTodo.isLoading = false
            state.removeTodo.error = action.error.message
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
export const {changeActiveFilter, clearCompleted} = todosSlice.actions