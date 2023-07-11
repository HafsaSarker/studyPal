import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

//get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    token: user && user.token,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// register user
export const register = createAsyncThunk('auth/register', async(user, thunkAPI) => {
    try {
        //payload 
        return await authService.register(user)
    } catch (error) {
        const message = (error.response &&error.response.data && error.response.data.message) || 
        error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

//logout user
export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})


//login user 
export const logInUser = createAsyncThunk('auth/login', async(user, thunkAPI) => {
    try {
        return await authService.logInUser(user) 
    } catch (error) {
        const message = (error.response &&error.response.data && error.response.data.message) || 
        error.message || error.toString()
        
        return thunkAPI.rejectWithValue(message)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            isError: false
            isSuccess: false
            isLoading: false
            message: ''
        }
    },
    extraReducers: (builder) => {
        builder
            //if register is pending
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })

            //if registration is fullfilled, we will get back user token so we need the action
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                //payload that's coming from the register func from authService 
                state.user = action.payload
                
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })


            //case for logout
            .addCase(logout.fulfilled, (state) => {
                state.user = null
                state.token = null
            })


            //cases for login
            .addCase(logInUser.pending, (state) => {
                state.isLoading = true
            })

            .addCase(logInUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
                state.token = action.payload.token
            })

            .addCase(logInUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
                state.token = null
            })
    },
})

export const { reset } = authSlice.actions
export default authSlice.reducer