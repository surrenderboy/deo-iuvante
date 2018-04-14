import * as ActionTypes from './types';
import api from '../api';

export const fetchMessages = roomId => (
  async (dispatch, getState) => {
    dispatch({
      type: ActionTypes.FETCH_MESSAGES_START,
    });

    try {
      const state = getState();
      const offset = state.rooms.byId[roomId].messages.length;

      const payload = await api.getMessages({ roomId, offset });

      dispatch({
        type: ActionTypes.FETCH_MESSAGES_SUCCESS,
        payload: {
          roomId,
          messages: payload,
        },
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.FETCH_MESSAGES_FAILURE,
      });
    } finally {
      dispatch({
        type: ActionTypes.FETCH_MESSAGES_END,
      });
    }
  }
);

export const addMessage = message => ({
  type: ActionTypes.ADD_MESSAGE,
  payload: message,
});
