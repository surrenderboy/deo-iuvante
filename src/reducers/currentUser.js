import * as ActionTypes from '../actions/types';

export default (state = { id: null, isFetching: false, isUpdating: false }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CURRENT_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.UPDATE_CURRENT_USER_START:
      return {
        ...state,
        isUpdating: true,
      };
    case ActionTypes.FETCH_CURRENT_USER_SUCCESS:
    case ActionTypes.UPDATE_CURRENT_USER_SUCCESS:
    case ActionTypes.SIGN_UP_SUCCESS:
    case ActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
      };
    case ActionTypes.FETCH_CURRENT_USER_FAILURE:
    case ActionTypes.UPDATE_CURRENT_USER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case ActionTypes.FETCH_CURRENT_USER_END:
      return {
        ...state,
        isFetching: false,
      };
    case ActionTypes.UPDATE_CURRENT_USER_END:
      return {
        ...state,
        isUpdating: false,
      };
    default:
      return state;
  }
};
