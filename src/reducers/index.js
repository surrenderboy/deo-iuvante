import { combineReducers } from 'redux';
import currentUser from './currentUser';
import rooms from './rooms';
import messages from './messages';
import users from './users';
import isFetching from './isFetching';
import loginForm from './loginForm';

export default combineReducers({
  currentUser,
  messages,
  rooms,
  users,
  isFetching,
  loginForm,
});
