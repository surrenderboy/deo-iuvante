import * as ActionTypes from './types';
import api from '../apiV2';

export const fetchMessages = roomId => (
  async (dispatch) => {
    dispatch({
      type: ActionTypes.FETCH_MESSAGES_START,
    });

    try {
      const { messages, cursor } = await api.fetchMessages(roomId);

      dispatch({
        type: ActionTypes.FETCH_MESSAGES_SUCCESS,
        payload: {
          roomId,
          messages,
          cursor,
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

export const fetchMessagesIfNeeded = roomId => (
  async (dispatch, getState) => {
    const { rooms, isFetching } = getState();
    const { messages } = rooms.byId[roomId];
    const cursor = messages && messages.cursor;

    if (typeof cursor !== 'undefined' || isFetching.messages) return;

    dispatch(fetchMessages(roomId));
  }
);

export const addMessage = payload => ({
  type: ActionTypes.ADD_MESSAGE,
  payload,
});

export const readMessages = messageIds => ({
  type: ActionTypes.READ_MESSAGES,
  payload: messageIds,
});
