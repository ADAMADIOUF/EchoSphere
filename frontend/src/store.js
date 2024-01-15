import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import authSliceReducer from './slices/authSlice'
import themeReducer from './slices/themeSlice'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    theme:themeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

export default store
