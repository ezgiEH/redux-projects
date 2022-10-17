import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"


export const getTodosAsync = createAsyncThunk(
    'todos/getTodosAsync',
    async () => {
        const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}`)
        return res.data
    }
)

export const addTodoAsync = createAsyncThunk(
    'todos/addTodoAsync',
    async (data) => {
        const res = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}`, data)
        return res.data
    }
)

export const toggleTodoAsync = createAsyncThunk(
    'todos/toggleTodoAsync',
    async({id, data}) => {
        const res = await axios.patch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/${id}`, data)
        return res.data
    }
 )

 export const removeTodoAsync = createAsyncThunk(
    'todos/removeTodoAsync',
    async(id) => {
        await axios.delete(`${process.env.REACT_APP_API_BASE_ENDPOINT}/${id}`)
        return id
    }
)