import { createSlice } from '@reduxjs/toolkit'
import {toast } from 'react-toastify'


const collectionSlice = createSlice({
  name: 'collection',
  initialState: {
    items: [],
    toastMessage: '',
  },
  reducers: {
    addCollection(state, action) {
      const exists = state.items.some((item) => item.id === action.payload.id)
      if (!exists) {
        state.items.push(action.payload)
      }
    },
    removeCollection(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    addedToast(state) {
      state.toastMessage = 'Saved to collection'
    },
    clearToast(state) {
      state.toastMessage = ''
    },
  },
})

export const { addCollection, removeCollection, addedToast, clearToast } =
  collectionSlice.actions

export default collectionSlice.reducer
