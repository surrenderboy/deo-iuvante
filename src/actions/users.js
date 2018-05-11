import * as ActionTypes from './types';
import api from '../apiV2';

export const fetchUsers = () => (
  async (dispatch) => {
    dispatch({
      type: ActionTypes.FETCH_USERS_START,
    });

    try {
      const payload = await api.getUsers();

      dispatch({
        type: ActionTypes.FETCH_USERS_SUCCESS,
        payload,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.FETCH_USERS_ERROR,
        error,
      });
    } finally {
      dispatch({
        type: ActionTypes.FETCH_USERS_END,
      });
    }
  }
);

export const fetchUser = id => (
  async (dispatch) => {
    dispatch({
      type: ActionTypes.FETCH_USERS_START,
    });

    try {
      const payload = await api.getUser(id);

      dispatch({
        type: ActionTypes.FETCH_USER_SUCCESS,
        payload,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.FETCH_USERS_ERROR,
        error,
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
