import { combineReducers } from 'redux'
import currentLocationReducer from './currentLocationReducer'

const rootReducer = (state, action) => {
  if(action.type === 'CHANGE_LOCATION') {
    state = undefined;
  }
  return appReducer(state, action)
}

const appReducer = combineReducers({
  currentLocationReducer
})

export default rootReducer