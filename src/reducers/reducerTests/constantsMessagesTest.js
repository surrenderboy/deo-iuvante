import * as actionTypes from '../../actions/types';

export const initialState = {
  initialStateId: { _id: 'initialStateId', message: 'initialStateMessage' },
};

export const actionAddMessage = {
  type: actionTypes.ADD_MESSAGE,
  payload: { _id: 'actionAddMessageId', message: 'actionMessage' },
};

export const messages = [
  { _id: 'messageId1', message: 'message1' },
  { _id: 'messageId2', message: 'message2' },
  { _id: 'messageId3', message: 'message3' },
];

export const actionAddMessages = {
  type: actionTypes.FETCH_MESSAGES_SUCCESS,
  payload: { roomId: 'roomId1', messages },
};

export const rooms = [
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

export const actionAddMessagesFromRooms = {
  type: actionTypes.FETCH_ROOMS_SUCCESS,
  payload: rooms,
};
