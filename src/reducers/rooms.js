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
      const { payload } = action;
      return ({
        ...state,
        allIds: [...state.allIds, payload.id],
        byId: { ...state.byId, [action.payload.id]: mapRoom(action.payload) },
      });
    }
    case types.FETCH_MESSAGES_SUCCESS: {
      return ({
        ...state,
        byId: {
          ...state.byId,
          [action.payload.roomId]: {
            ...state.byId[action.payload.roomId],
            messages: {
              allIds: [
                ...state.byId[action.payload.roomId].messages.allIds,
                ...action.payload.messages.map(message => message.id),
              ],
              cursor: action.payload.cursor,
            },
          },
        },
      });
    }
    case types.ADD_MESSAGE: {
      return ({
        ...state,
        byId: {
          ...state.byId,
          [action.payload.room_id]: {
            ...state.byId[action.payload.room_id],
            messages: {
              ...state.byId[action.payload.room_id].messages,
              allIds: [
                ...state.byId[action.payload.room_id].messages.allIds,
                action.payload.id,
              ],
            },
          },
        },
      });
    }
    case types.UPDATE_ROOM: {
      return ({
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: {
            ...state.byId[action.payload.id],
            unread_count: action.payload.unread_count,
            last_message: action.payload.last_message,
            updated_at: action.payload.updated_at,
          },
        },
      });
    }
    case types.ADD_ROOM: {
      return ({
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: {
            ...action.payload,
            messages: {
              allIds: [],
            },
          },
        },
        allIds: [
          ...state.allIds,
          action.payload.id,
        ],
      });
    }
    default: return state;
  }
};

export default rooms;
