// const currentLocationDefaultState = {
//   currentLocation: ''
// }

// function currentLocationReducer (state = currentLocationDefaultState, action) {
//   switch(action.type) {
//     case 'CHANGE_LOCATION':
//       return {
//         ...state, ...action 
//       }
//     default:
//       return state
//   }
// }

// export default currentLocationReducer

/* Redux Toolkit */

//1. import createSlice API
import { createSlice } from 'reduxjs/toolkit'

//2. declare initial state 
const initialState = {
  value: '',
}

//3. declare slice container
export const locationSlice = createSlice({
  name: 'location',
  initialState,
  //4. declare reducer function
  reducers: {
    //5. declare action creator
    changeLocation: (state, action ) => {
      state.value = action.payload
    },
  },
})

//7. export action creator
export const { changeLocation } = locationSlice.actions

//8. export reducer function
export default locationSlice.reducer