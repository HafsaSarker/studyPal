import { configureStore } from '@reduxjs/toolkit'
import notifReducer from '../features/notification/notifSlice'

export const store = configureStore({
    reducer: {
        notif: notifReducer
    },
})