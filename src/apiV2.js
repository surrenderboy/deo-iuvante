/* eslint-disable no-console,no-throw-literal */
import axios from 'axios';
import Cookies from 'js-cookie';

const authorizationHeader = token => `Bearer ${token}`;
const cookiesSetToken = token => Cookies.set('token', token);
const cookiesGetToken = () => Cookies.get('token');

const handleUnknownError = (error) => {
  console.log(error);
  return 'Something went wrong';
};

class Api {
  handle = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
      common: {
        Authorization: authorizationHeader(cookiesGetToken()),
      },
    },
  });

  setToken(token) {
    cookiesSetToken(token);
    this.handle.defaults.headers.common.Authorization =
      authorizationHeader(token);
  }

  async createUser(data) {
    try {
      const response = await this.handle.post('api/users', data);

      return response.data;
    } catch (error) {
      const { response } = error;
      if (response && response.status === 422) {
        throw response.data;
      } else {
        throw handleUnknownError(error);
      }
    }
  }

  async createUserToken(data) {
    try {
      const response = await this.handle.post('api/user_token', data);

      return response.data;
    } catch (error) {
      const { response } = error;
      if (response && response.status === 404) {
        throw 'User cannot be found or password is invalid.';
      } else {
        throw handleUnknownError(error);
      }
    }
  }

  async fetchUser(id) {
    try {
      const response = await this.handle.get(`api/users/${id}`);

      return response.data;
    } catch (error) {
      throw handleUnknownError(error);
    }
  }

  fetchCurrentUser() {
    return this.fetchUser('current');
  }

  async fetchRooms() {
    try {
      const response = await this.handle.get('api/rooms');

      return response.data;
    } catch (error) {
      throw handleUnknownError(error);
    }
  }
}

const api = new Api();

window.api = api;
export default api;
