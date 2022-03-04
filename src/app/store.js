import { configureStore } from '@reduxjs/toolkit'
import locationReducer from '../features/Form/locationSlice'

export default configureStore({
  reducer: {
    location: locationReducer,
  },
})
