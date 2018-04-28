import * as types from './types';
import api from '../api';

export const fetchUsers = ({ _id }) => (
  async (dispatch) => {
    dispatch({
      type: types.FETCH_USERS_START,
    });

    try {
      const payload = await api.getUsers(({ _id }));

      dispatch({
        type: types.FETCH_USERS_SUCCESS,
        payload,
      });
    } catch (error) {
      dispatch({
        type: types.FETCH_USERS_ERROR,
        error,
      });
    } finally {
      dispatch({
        type: types.FETCH_USERS_END,
      });
    }
  }
);

export const fetchUser = _id => fetchUsers.call(this, { _id: [_id] });
