import { combineReducers } from 'redux';
import currentUser from './currentUser';
import chatReducer from './chat';

export default combineReducers({
  currentUser,
  chatReducer,
});
