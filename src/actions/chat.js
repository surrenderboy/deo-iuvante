import api from '../api';

export const addMessage = describer => ({
  type: 'ADD_MESSAGE',
  id: describer.id,
  userId: describer.userId,
  message: describer.message,
  createdAt: describer.createdAt,
});

export const sendMessage = describer => (dispatch) => {
  dispatch(addMessage(describer));
  return api.sendMessage(describer.id, describer.message);
};
