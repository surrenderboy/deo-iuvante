import * as actionTypes from '../actions/currentUser';

export default (state = { data: {}, isFetching: false, isUpdating: false }, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENT_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.UPDATE_CURRENT_USER_START:
      return {
        ...state,
        isUpdating: true,
      };
    case actionTypes.FETCH_CURRENT_USER_SUCCESS:
    case actionTypes.UPDATE_CURRENT_USER_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case actionTypes.FETCH_CURRENT_USER_FAILURE:
    case actionTypes.UPDATE_CURRENT_USER_FAILURE:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    case actionTypes.FETCH_CURRENT_USER_END:
      return {
        ...state,
        isFetching: false,
      };
    case actionTypes.UPDATE_CURRENT_USER_END:
      return {
        ...state,
        isUpdating: false,
      };
    default:
      return state;
  }
};
