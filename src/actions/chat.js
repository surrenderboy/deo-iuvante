import api from '../api';

export const addMessage = describer => ({
  type: 'ADD_MESSAGE',
  id: describer.id,
  userId: describer.userId,
  message: describer.message,
  createdAt: describer.createdAt,
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

export const sendMessage = describer => (dispatch) => {
  dispatch(addMessage(describer));
  return api.sendMessage(describer.id, describer.message);
};

export function getRoomMessages(roomId) {
  return (dispatch) => {
    dispatch(requestMessages());
    api.getRoomMessages(roomId)
      .then(messages => dispatch(receiveMessages(messages)));
  };
}

export function getCurrentUserId() {
  return (dispatch) => {
    dispatch(requestCurrentUserId());
    api.getCurrentUser()
      .then(currentUser => dispatch(requestCurrentUserId(currentUser._id)));
  };
}
