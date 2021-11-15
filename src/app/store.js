import { configureStore } from "@reduxjs/toolkit"
import locationReducer from "../features/form/locationSlice"

export default configureStore({
  reducer: {
    location: locationReducer,
  },
})
