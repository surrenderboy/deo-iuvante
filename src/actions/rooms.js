import api from '../api';

import { FETCH_ROOMS_SUCCESS } from '../actions/types';

// eslint-disable-next-line import/prefer-default-export
export const fetchRooms = () => (dispatch) => {
  api.getRooms()
    .then(rooms => dispatch({ type: FETCH_ROOMS_SUCCESS, payload: rooms }));
};
