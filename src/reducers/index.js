import { combineReducers } from 'redux';
import currentUser from './currentUser';
import chatReducer from './chat';
import rooms from './rooms';

export default combineReducers({
  currentUser,
  chatReducer,
  rooms,
});
