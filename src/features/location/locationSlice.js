//1. import createSlice API
import { createSlice } from '@reduxjs/toolkit'
//3. declare slice container
export const locationSlice = createSlice({
  //4. declare slice name
  name: 'location',
  //2. declare initial state 
  initialState: {
    value: "Atlanta"
  },
  //5. declare reducer function
  reducers: {
    //6. declare action creator
    changeLocation: (state, action) => {
      state.value = action.payload
    },
  },
})

//7. export action creator
export const { changeLocation } = locationSlice.actions

//9. export selector
export const selectLocation = state => state.location.value

//8. export reducer function
export default locationSlice.reducer