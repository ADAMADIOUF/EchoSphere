import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { name, email, image, bio, location, ...rest } = action.payload
      state.userInfo = { name, email, image, bio, location }
      // Persist all required fields in localStorage
      localStorage.setItem(
        'userInfo',
        JSON.stringify({ name, email, image, bio, location, ...rest })
      )
    },
    logout: (state, action) => {
      state.userInfo = null
      localStorage.removeItem('userInfo')
    },
  },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
