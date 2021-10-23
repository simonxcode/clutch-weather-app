import { createSlice } from '@reduxjs/toolkit'

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    value: "Atlanta"
  },
  reducers: {
    changeLocation: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { changeLocation } = locationSlice.actions
export const selectLocation = state => state.location.value

export default locationSlice.reducer