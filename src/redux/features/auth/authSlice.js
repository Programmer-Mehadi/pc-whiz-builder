import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false
  },
  reducers: {
   
  }
})

// Action creators are generated for each case reducer function
export const {  } = authSlice.actions

export default authSlice.reducer