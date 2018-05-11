import { combineReducers } from 'redux';

import * as ActionTypes from '../actions/types';

const errorMessages = (payload) => {
  if (typeof payload === 'string') {
    return { base: payload };
  }

  return {
    values:
    Object
      .entries(payload.errors)
      .reduce((values, [field, message]) => ({
        ...values,
        [field]: message.join('. '),
      }), {}),
  };
};

const errors = (state = {
  values: null,
  base: null,
}, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN_START:
    case ActionTypes.SIGN_UP_START:
      return {
        values: null,
        base: null,
      };
    case ActionTypes.SIGN_UP_FAILURE:
    case ActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        ...errorMessages(action.payload),
      };
    default:
      return state;
  }
};

const isSubmitting = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_UP_START:
    case ActionTypes.SIGN_IN_START:
      return true;
    case ActionTypes.SIGN_UP_END:
    case ActionTypes.SIGN_IN_END:
      return false;
    default: return state;
  }
};

export default combineReducers({
  errors,
  isSubmitting,
});
