import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import pcBuilderSlice from './features/pcBuilder/pcBuilderSlice'

export default configureStore({
  reducer: {
    auth: authSlice,
    pcBuilder: pcBuilderSlice
  }
})