import { combineReducers } from 'redux';

import * as ActionTypes from '../actions/types';

const room = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ROOM_START: return true;
    case ActionTypes.FETCH_ROOM_END: return false;
    default: return state;
  }
};

const messages = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MESSAGES_START: return true;
    case ActionTypes.FETCH_MESSAGES_END: return false;
    default: return state;
  }
};

export default combineReducers({
  room,
  messages,
});
