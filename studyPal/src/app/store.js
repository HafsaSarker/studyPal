import { configureStore } from '@reduxjs/toolkit'
import notifReducer from '../features/notification/notifSlice'
import searchReducer from '../features/search/searchSlice'

export const store = configureStore({
    reducer: {
        notif: notifReducer,
        search: searchReducer
    },
})