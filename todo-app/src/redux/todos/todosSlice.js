import {createSlice} from '@reduxjs/toolkit';

export const todosSlice = createSlice ({
    name: 'todos',
    initialState: {
        items: [
            {
            id: '1',
            title: 'Learn JavaScript',
            },
            {
            id: '2',
            title: 'Learn React',
            },
        ],
    },
    reducers: {}
})

export default todosSlice.reducer