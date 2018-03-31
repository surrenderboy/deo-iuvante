import api from '../api';

export const handleResponse = response => ({
  type: 'HANDLE_SENT_MESSAGE_RESPONSE',
  response,
});

export const sendMessage = ({ _id, message }) => dispatch => (
  api.sendMessage({ _id, message }).then(response => dispatch(handleResponse(response)))
);
