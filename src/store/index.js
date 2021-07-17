import { configureStore } from "@reduxjs/toolkit"
//1. Declare a name for slice reducer
import locationReducer from "../reducers/locationSlice"

export default configureStore({
  reducer: {
    //2. reference slice name and assign to slice reducer function
    location: locationReducer,
  },
})
