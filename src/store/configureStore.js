import { combineReducers } from "redux";
import { createStore, compose } from 'redux';
/**
 * Put your reducers here
 */
//import todos from './reducers';
const rootReducer = combineReducers({
  // put your reducers here
  //todos
})
export default function configureStore(initialState){
  const store = createStore(
    (
      rootReducer,
      undefined,
      compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    )
  )
  return store;
}