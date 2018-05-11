import * as types from '../actions/types';

export default (
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
    case types.FETCH_USER_SUCCESS:
    case types.FETCH_CURRENT_USER_SUCCESS:
    case types.SIGN_IN_SUCCESS:
    case types.SIGN_UP_SUCCESS:
      return ({
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
      });
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

