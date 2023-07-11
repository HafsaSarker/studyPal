import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDeleted: false,
    isCreated: false,
    isEdited: false
}

export const notifSlice = createSlice({
    name: 'notif',
    initialState,
    reducers: {
        //name all actions
        setIsDeleted: (state) => {
            state.isDeleted = true
        },
        setIsCreated: (state) => {
            state.isCreated = true
        },
        setIsEdited: (state) => {
            state.isEdited = true
        },
        resetNotif: (state) => {
            state.isDeleted = false
            state.isCreated = false
            state.isEdited = false
        }
    }
})

//export actions
export const { setIsCreated, setIsDeleted, setIsEdited, resetNotif } = notifSlice.actions

//export full reducers
export default notifSlice.reducer