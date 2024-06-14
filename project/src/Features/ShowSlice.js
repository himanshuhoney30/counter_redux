import { createSlice } from '@reduxjs/toolkit'

const initialState = {value:0}
export const counterSlice = createSlice({
  name: 'showdata',
  initialState,
  reducers: {
    showdata: (state)=>{
        state.value = 0
    },
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  }
})
export const { increment,decrement, showdata } = counterSlice.actions

export default counterSlice.reducer