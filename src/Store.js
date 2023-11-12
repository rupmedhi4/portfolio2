import { configureStore } from '@reduxjs/toolkit'
import PortalSlice from './Components/Slices/PortalSlice'

export const store = configureStore({
  reducer: {
    PortalSlice
  },
})