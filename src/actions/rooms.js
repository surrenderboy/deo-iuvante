import * as ActionTypes from './types';
import api from '../apiV2';

export const fetchRooms = () => (
  async (dispatch) => {
    dispatch({
      type: ActionTypes.FETCH_ROOMS_START,
    });

    try {
      const payload = await api.fetchRooms();

      dispatch({
        type: ActionTypes.FETCH_ROOMS_SUCCESS,
        payload,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.FETCH_ROOMS_FAILURE,
        payload: e,
      });
    } finally {
      dispatch({
        type: ActionTypes.FETCH_ROOMS_END,
      });
    }
  }
);

export const fetchRoomsIfNeeded = () => (
  (dispatch, getState) => {
    const { cursor } = getState().rooms;

    if (typeof cursor === 'undefined') {
      dispatch(fetchRooms());
    }
  }
);

export const fetchRoom = roomId => (
  async (dispatch) => {
    dispatch({
      type: ActionTypes.FETCH_ROOM_START,
    });

    try {
      const payload = await api.getRoom(roomId);

      dispatch({
        type: ActionTypes.FETCH_ROOM_SUCCESS,
        payload,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.FETCH_ROOM_ERROR,
        payload: e.message,
      });
    } finally {
      dispatch({
        type: ActionTypes.FETCH_ROOM_END,
      });
    }
  }
);

export const fetchRoomIfNeeded = roomId => (
  (dispatch, getState) => {
    const { rooms, isFetching } = getState();

    if (isFetching.room || rooms.byId[roomId]) return;

    dispatch(fetchRoom(roomId));
  }
);

export const markAllUnreadMessages = roomId => (
  async () => {
    await api.markAllUnreadMessages(roomId);
  }
);

export const openRoom = roomId => (
  (dispatch, getState) => {
    const { rooms } = getState();
    const room = rooms.byId[roomId];

    if (!room) { dispatch(fetchRoom(roomId)); }
    dispatch(markAllUnreadMessages(roomId));
  }
);
