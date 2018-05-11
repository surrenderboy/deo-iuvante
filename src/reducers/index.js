import { combineReducers } from 'redux';
import currentUser from './currentUser';
import rooms from './rooms';
import messages from './messages';
import users from './users';
import isFetching from './isFetching';

export default combineReducers({
  currentUser,
  messages,
  rooms,
  users,
  isFetching,
});
