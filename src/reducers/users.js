import * as types from '../actions/types';

export const mapRoom = room => ({ ...room, messages: room.messages.map(message => message._id) });

const rooms = (
  state = {
    byId: {},
    fetching: false,
    errorMsg: null,
  },
  action,
) => {
  switch (action.type) {
    case types.FETCH_USERS_START: {
      return ({
        ...state,
        fetching: true,
      });
    }
    case types.FETCH_USERS_END: {
      return ({
        ...state,
        fetching: false,
      });
    }
    case types.FETCH_USERS_ERROR: {
      return ({
        ...state,
        errorMsg: action.error,
      });
    }
    case types.FETCH_USERS_SUCCESS: {
      return ({
        ...state,
        byId: action.payload.reduce((accum, user) => ({
          ...accum,
          [user._id]: user,
        }), { ...state.byId }),
      });
    }
    default: return state;
  }
};

export default rooms;
