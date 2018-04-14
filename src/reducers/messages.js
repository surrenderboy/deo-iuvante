import { combineReducers } from 'redux';

import * as ActionTypes from '../actions/types';

const flattenMessages = rooms => (
  rooms
    .map(room => room.messages)
    .reduce((acc, val) => acc.concat(val), [])
);

const normalizeMessages = (messages) => {
  messages.reduce(
    (byId, message) => ({
      ...byId,
      [message.id]: message,
    }),
    {},
  );
};

const addMessagesFromRooms = (state, action) => ({
  ...state,
  ...normalizeMessages(flattenMessages(action.payload)),
});

const addMessage = (state, action) => ({
  ...state,
  [action.payload.id]: action.payload,
});

const addMessages = (state, action) => ({
  ...state,
  ...normalizeMessages(action.payload.messages),
});

const messagesById = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ROOMS_SUCCESS: return addMessagesFromRooms(state, action);
    case ActionTypes.ADD_MESSAGE: return addMessage(state, action);
    case ActionTypes.FETCH_MESSAGES_SUCCESS: return addMessages(state, action);
    default: return state;
  }
};

export default combineReducers({
  byId: messagesById,
});
