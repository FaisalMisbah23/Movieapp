import { combineReducers } from 'redux';
import homeSlice from './homeSlice';


const rootReducer = combineReducers({
  home: homeSlice,
  // Add other reducers here if you have more slices of state
});

export default rootReducer;
