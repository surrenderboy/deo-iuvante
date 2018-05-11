import * as types from '../actions/types';

export const mapRoom = room => ({
  ...room,
  messages: {
    allIds: [],
  },
});

const rooms = (
  state = {
    byId: {},
    allIds: [],
    isFetching: false,
  },
  action,
) => {
  switch (action.type) {
    case types.FETCH_ROOMS_START:
      return ({
        ...state,
        isFetching: true,
      });
    case types.FETCH_ROOMS_END:
      return ({
        ...state,
        isFetching: false,
      });
    case types.FETCH_ROOMS_SUCCESS: {
      const { payload } = action;
      const byId = {};
      const allIds = [];

      payload.rooms.forEach((room) => {
        allIds.push(room.id);
        byId[room.id] = mapRoom(room);
      });

      return ({
        ...state,
        allIds,
        byId: { ...state.byId, ...byId },
        cursor: payload.cursor,
      });
    }
    case types.FETCH_ROOM_SUCCESS: {
      return ({
        ...state,
        allIds: [...state.allIds, action.payload._id],
        byId: { ...state.byId, [action.payload._id]: mapRoom(action.payload) },
      });
    }
    case types.FETCH_MESSAGES_SUCCESS: {
      return ({
        ...state,
        byId: {
          ...state.byId,
          [action.payload.roomId]: {
            ...state.byId[action.payload.roomId],
            messages: action.payload.messages.map(message => message._id),
          },
        },
      });
    }
    case types.ADD_MESSAGE: {
      return ({
        ...state,
        byId: {
          ...state.byId,
          [action.payload.roomId]: {
            ...state.byId[action.payload.roomId],
            messages: [...state.byId[action.payload.roomId].messages, action.payload._id],
          },
        },
      });
    }
    default: return state;
  }
};

export default rooms;
