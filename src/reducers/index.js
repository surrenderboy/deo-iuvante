import { combineReducers } from 'redux';
import currentUser from './currentUser';
import rooms from './rooms';
import messages from './messages';

export default combineReducers({
  currentUser,
  messages,
  rooms,
});
