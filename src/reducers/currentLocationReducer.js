const currentLocationDefaultState = {
  currentLocation: ''
}

function currentLocationReducer (state = currentLocationDefaultState, action) {
  switch(action.type) {
    case 'CHANGE_LOCATION':
      return {
        ...state, ...action 
      }
    default:
      return state
  }
}

export default currentLocationReducer