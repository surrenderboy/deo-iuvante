import * as ActionTypes from './types';
import api from '../apiV2';

export const fetchUsers = () => (
  async (dispatch) => {
    dispatch({
      type: ActionTypes.FETCH_USERS_START,
    });

    try {
      const { users } = await api.fetchUsers();

      dispatch({
        type: ActionTypes.FETCH_USERS_SUCCESS,
        payload: users,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.FETCH_USERS_ERROR,
        payload: error,
      });
    } finally {
      dispatch({
        type: ActionTypes.FETCH_USERS_END,
      });
    }
  }
);

export const fetchCurrentUser = () => (
  async (dispatch) => {
    dispatch({
      type: ActionTypes.FETCH_CURRENT_USER_START,
    });

    try {
      const { user } = await api.fetchCurrentUser();

      dispatch({
        type: ActionTypes.FETCH_CURRENT_USER_SUCCESS,
        payload: user,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.FETCH_CURRENT_USER_FAILURE,
        payload: e,
      });
    }

    dispatch({
      type: ActionTypes.FETCH_CURRENT_USER_END,
    });
  }
);
