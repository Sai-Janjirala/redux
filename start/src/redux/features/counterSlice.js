
import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 20
    },
    reducers: {
      increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incbyamount : (state,actions) =>{
        state.value += actions.payload
      }
    }
})

export const {increment,decrement,incbyamount} = counterSlice.actions
export default counterSlice.reducer