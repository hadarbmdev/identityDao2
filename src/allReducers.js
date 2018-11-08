
import { combineReducers } from 'redux'
import welcomeReducer from  './components/Welcome/reducers/reducer'
const allReducers = combineReducers({
    welcome:welcomeReducer,
  
})

export default allReducers


