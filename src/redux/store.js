import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../src/features/counter/counterSlice'
import authReducer from '../src/features/user/authSlice'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    auth:authReducer
  },
})