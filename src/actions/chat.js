import api from '../api';

export const FETCH_MESSAGES_START = 'FETCH_MESSAGES_START';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_ERROR = 'FETCH_MESSAGES_ERROR';
export const FETCH_MESSAGES_END = 'FETCH_MESSAGES_END';

export const fetchMessages = roomId => (
  async (dispatch) => {
    dispatch({
      type: FETCH_MESSAGES_START,
    });

    try {
      const messages = await api.getMessages({ roomId, limit: 500 });

      dispatch({
        type: FETCH_MESSAGES_SUCCESS,
        messages,
      });
    } catch (error) {
      dispatch({
        type: FETCH_MESSAGES_ERROR,
        errorMessage: error.message,
      });
    } finally {
      dispatch({
        type: FETCH_MESSAGES_END,
      });
    }
  }
);

export const FETCH_ROOM_START = 'FETCH_ROOM_START';
export const FETCH_ROOM_SUCCESS = 'FETCH_ROOM_SUCCESS';
export const FETCH_ROOM_ERROR = 'FETCH_ROOM_ERROR';
export const FETCH_ROOM_END = 'FETCH_ROOM_END';

export const fetchRoom = roomId => (
  async (dispatch) => {
    dispatch({
      type: FETCH_ROOM_START,
    });

    try {
      const room = await api.getRoom(roomId);

      dispatch({
        type: FETCH_ROOM_SUCCESS,
        room,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ROOM_ERROR,
        errorMessage: error.message,
      });
    } finally {
      dispatch({
        type: FETCH_ROOM_END,
      });
    }
  }
);

export const ADD_MESSAGE = 'ADD_MESSAGE';

export const sendMessage = (roomId, message) => (
  async (dispatch) => {
    const newMessage = await api.sendMessage({ roomId, text: message });
    return dispatch({
      type: ADD_MESSAGE,
      newMessage,
    });
  }
);

export const receiveMessage = message => ({
  type: ADD_MESSAGE,
  newMessage: message,
});

export const CLEAR_STATE = 'CLEAR_STATE';

export const clearState = () => ({
  type: CLEAR_STATE,
});
