import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchInput:''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        //name all actions
        searchReducer: (state, action) => {
            state.searchInput = action.payload
        },
    }
})

//export actions
export const { searchReducer } = searchSlice.actions

//export full reducers
export default searchSlice.reducer