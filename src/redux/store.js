import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../feature/user/authSlice'

export const store = configureStore({
  reducer: {
    

    auth:authReducer
  },
})