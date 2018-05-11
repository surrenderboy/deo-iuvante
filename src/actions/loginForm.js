import * as ActionTypes from './types';
import api from '../apiV2';

export const signUp = values => (
  async (dispatch) => {
    dispatch({
      type: ActionTypes.SIGN_UP_START,
    });

    try {
      const { jwt, user } = await api.createUser({ user: values });

      api.setToken(jwt);

      dispatch({
        type: ActionTypes.SIGN_UP_SUCCESS,
        payload: user,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.SIGN_UP_FAILURE,
        payload: e,
      });
    } finally {
      dispatch({
        type: ActionTypes.SIGN_UP_END,
      });
    }
  }
);

export const signIn = values => (
  async (dispatch) => {
    dispatch({
      type: ActionTypes.SIGN_IN_START,
    });

    try {
      const { jwt } = await api.createUserToken({ auth: values });

      api.setToken(jwt);

      const { user } = await api.fetchCurrentUser();

      dispatch({
        type: ActionTypes.SIGN_IN_SUCCESS,
        payload: user,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.SIGN_IN_FAILURE,
        payload: e,
      });
    } finally {
      dispatch({
        type: ActionTypes.SIGN_IN_END,
      });
    }
  }
);
