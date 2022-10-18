import { createAsyncThunk, createSlice }  from  '@reduxjs/toolkit'
import axios  from  'axios'


const char_limit = 12
export const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    async (page) =>{
        const response = await axios(`https://www.breakingbadapi.com/api/characters?limit=${char_limit}&offset=${page * char_limit}`)
        return response.data
    }
)


export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        items:[],
        status: 'idle',
        error: false,
        page: 0,
        hasNextPage: true,
    },
    reducers: {},
    extraReducers: {
        [fetchCharacters.pending]: (state, action) => {
            state.status = "loading"
        },
        [fetchCharacters.fulfilled]: (state, action) => {
         state.items = [...state.items,...action.payload]
         state.page += 1 
         state.status = "succeeded"
            if(action.payload.length < char_limit){
                state.hasNextPage = false
            }
        },
    }

})

export default charactersSlice.reducer