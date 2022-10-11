import {createSlice} from '@reduxjs/toolkit';

export const todosSlice = createSlice ({
    name: 'todos',
    initialState: {
        items: [
           
        ],
    },
    reducers: {
        addTodo: (state, action) => {
           state.items.push(action.payload)
        },
        toggle: (state, action) => {
            const { id } = action.payload
            const item = state.items.find(item => item.id === id)

            item.completed = !item.completed
        }
    }
})

export default todosSlice.reducer
export const {addTodo, toggle} = todosSlice.actions