import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import notifReducer from '../features/notification/notifSlice'
import searchReducer from '../features/search/searchSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        notif: notifReducer,
        search: searchReducer
    },
})