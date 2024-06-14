import { configureStore } from '@reduxjs/toolkit'

import  showdata  from '../Features/ShowSlice'
export const store = configureStore({
  reducer: {show : showdata }
})