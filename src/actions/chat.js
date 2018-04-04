import api from '../api';

export const addMessage = describer => ({
  type: 'ADD_MESSAGE',
  roomId: describer.roomId,
  message: describer.message,
});

export const REQUEST_MESSAGES = 'REQUEST_MESSAGES';
export function requestMessages() {
  return {
    type: REQUEST_MESSAGES,
  };
}

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export function receiveMessages(messages) {
  return {
    type: RECEIVE_MESSAGES,
    messages,
  };
}

export const REQUEST_CURRENT_USER_ID = 'REQUEST_CURRENT_USER_ID';

export function requestCurrentUserId() {
  return {
    type: REQUEST_CURRENT_USER_ID,
  };
}

export const RECEIVE_CURRENT_USER_ID = 'RECEIVE_CURRENT_USER_ID';
export function receiveCurrentUserId(currentUserId) {
  return {
    type: RECEIVE_CURRENT_USER_ID,
    currentUserId,
  };
}

export function getRoomMessages(roomId) {
  return (dispatch) => {
    dispatch(requestMessages());
    api.getRoomMessages(roomId)
      .then(messages => dispatch(receiveMessages(messages)));
  };
}

export const sendMessage = (roomId, message) => (dispatch) => {
  api.sendMessage(roomId, message);
  return dispatch(getRoomMessages(roomId));
};

export function getCurrentUserId() {
  return (dispatch) => {
    dispatch(requestCurrentUserId());
    api.getCurrentUser()
      .then(currentUser => dispatch(receiveCurrentUserId(currentUser._id)));
  };
}
