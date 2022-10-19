import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchQuotes = createAsyncThunk(
    "quotes/fetchQuotes",
    async () => {
        const response = await axios("https://www.breakingbadapi.com/api/quotes");
        return response.data;
    }
)


export const quotesSlice = createSlice({
    name: "quotes",
    initialState: {
        items: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: {
        [fetchQuotes.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchQuotes.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = "succeeded";
        },
        [fetchQuotes.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
})

export const quotesSelector = state => state.quotes.items;
export const quotesStatusSelector = state => state.quotes.status;
export const quotesErrorSelector = state => state.quotes.error;
export default quotesSlice.reducer