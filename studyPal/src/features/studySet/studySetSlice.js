import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import studySetService from './studySetService'

const initialState = {
    studySets: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const studySetSlice = createSlice ({
    name: 'studySets',
    initialState,
    reducers : {
        reset: (state) => initialState
    },

})

export const {reset} = studySetSlice.actions
export default studySetSlice.reducer