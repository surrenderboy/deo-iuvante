import * as ActionTypes from './types';
import api from '../apiV2';

export const fetchMessages = roomId => (
  async (dispatch) => {
    dispatch({
      type: ActionTypes.FETCH_MESSAGES_START,
    });

    try {
      const { messages } = await api.fetchMessages(roomId);

      dispatch({
        type: ActionTypes.FETCH_MESSAGES_SUCCESS,
        payload: {
          roomId,
          messages,
        },
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.FETCH_MESSAGES_FAILURE,
        payload: e,
      });
    } finally {
      dispatch({
        type: ActionTypes.FETCH_MESSAGES_END,
      });
    }
  }
);

export const addMessage = payload => ({
  type: ActionTypes.ADD_MESSAGE,
  payload,
});

export const sendMessage = (roomId, message) => (
  async (dispatch) => {
    const payload = await api.sendMessage({ roomId, text: message });

    dispatch(addMessage(payload));
  }
);

export const readMessages = roomId => (
  (dispatch, getState) => {
    const { rooms } = getState();
    const room = rooms.byId[roomId];

    dispatch({
      type: ActionTypes.READ_MESSAGES,
      payload: room.messages,
    });
  }
);
