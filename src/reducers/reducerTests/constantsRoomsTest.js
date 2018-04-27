import * as actionTypes from '../../actions/types';

export const initialState = {
  allIds: ['roomId1'],
  byId: {
    roomId1: {
      messages: ['message'],
    },
  },
};

export const messages = [
  { _id: 'messageId1', message: 'message1', roomId: 'roomId1' },
  { _id: 'messageId2', message: 'message2' },
  { _id: 'messageId3', message: 'message3' },
];

export const arrayRooms = [
  {
    _id: 'roomId1',
    messages,
    avatarUrl: '',
    messagesCount: 20,
    name: 'roomName1',
  },
  {
    _id: 'roomId2',
    messages: [{ _id: 'messageId4', message: 'message4' }],
    avatarUrl: '',
    messagesCount: 20,
    name: 'roomName2',
  },
];

export const room = {
  _id: 'roomId1',
  messages,
  avatarUrl: '',
  messagesCount: 20,
  name: 'roomName1',
};

export const actionRoomsSuccess = {
  type: actionTypes.FETCH_ROOMS_SUCCESS,
  payload: arrayRooms,
};

export const actionRoomSuccess = {
  type: 'FETCH_ROOM_SUCCESS',
  payload: room,
};

export const actionMessagesSuccess = {
  type: actionTypes.FETCH_MESSAGES_SUCCESS,
  payload: {
    roomId: 'roomId1',
    messages,
  },
};

export const actionAddMessage = {
  type: actionTypes.ADD_MESSAGE,
  payload: messages[0],
};
