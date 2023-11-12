import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isMenuOpen: false,
  }

  
export const PortalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
      openModal: (state) => {
        state.isMenuOpen = !state.isMenuOpen
      }
    },
  })

export const { openModal } = PortalSlice.actions

export default PortalSlice.reducer