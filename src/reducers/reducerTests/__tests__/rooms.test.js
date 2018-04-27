import { assert } from 'chai';
import rooms, { mapRoom } from '../../rooms';
import * as constantsRoom from '../constantsRoomsTest';

describe('reducer rooms', () => {
  it('должен вернуть initial state', () => {
    assert.deepEqual(
      rooms(undefined, {}),
      {
        byId: {},
        allIds: [],
      },
    );
  });
  it('Должен вернуть объект room с ключом messages и массивом сообщений', () =>
    assert.deepEqual(
      mapRoom(constantsRoom.room),
      {
        ...constantsRoom.room,
        messages: ['messageId1', 'messageId2', 'messageId3'],
      },
    ));

  it('Должен вурнуть state с ключами allIds(массив из roomId), byId(объекты комнат с ключом roomId)', () => {
    assert.deepEqual(
      rooms(undefined, constantsRoom.actionRoomsSuccess),
      {
        allIds: ['roomId1', 'roomId2'],
        byId: {
          roomId1: {
            _id: 'roomId1',
            messages: ['messageId1', 'messageId2', 'messageId3'],
            avatarUrl: '',
            messagesCount: 20,
            name: 'roomName1',
          },
          roomId2: {
            _id: 'roomId2',
            messages: ['messageId4'],
            avatarUrl: '',
            messagesCount: 20,
            name: 'roomName2',
          },
        },
      },
    );
  });
  it('Должен вернуть state с добавленным roomId в массив allIds и обектом комнаты с ключом roomId', () => {
    assert.deepEqual(
      rooms(undefined, constantsRoom.actionRoomSuccess),
      {
        allIds: ['roomId1'],
        byId: {
          roomId1: {
            _id: 'roomId1',
            messages: ['messageId1', 'messageId2', 'messageId3'],
            avatarUrl: '',
            messagesCount: 20,
            name: 'roomName1',
          },
        },
      },
    );
  });
  it('Должен вернуть state с добавленными по roomId сообщениями ', () => {
    assert.deepEqual(
      rooms(undefined, constantsRoom.actionMessagesSuccess),
      {
        allIds: [],
        byId: {
          roomId1: {
            messages: ['messageId1', 'messageId2', 'messageId3'],
          },
        },
      },
    );
  });
  it('Должен добавить сообщение в объект с ключом roomId', () => {
    assert.deepEqual(
      rooms(constantsRoom.initialState, constantsRoom.actionAddMessage),
      {
        allIds: ['roomId1'],
        byId: {
          roomId1: {
            messages: ['message', 'messageId1'],
          },
        },
      },
    );
  });
});
