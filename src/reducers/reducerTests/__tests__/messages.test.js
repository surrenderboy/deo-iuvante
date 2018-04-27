import { assert } from 'chai';
import state, {
  flattenMessages,
  normalizeMessages,
  addMessagesFromRooms,
  addMessage,
  addMessages,
  messagesById,
} from '../../messages';
import * as constantsMessages from '../constantsMessagesTest';

describe('reducer messages', () => {
  it('должен вернуть initial state', () => {
    assert.deepEqual(
      state(undefined, {}),
      {
        byId: {},
      },
    );
  });
  it('Должен добавить по ключу message._id объект сообщения', () => {
    assert.deepEqual(
      addMessage(constantsMessages.initialState, constantsMessages.actionAddMessage),
      {
        ...constantsMessages.initialState,
        actionAddMessageId: { _id: 'actionAddMessageId', message: 'actionMessage' },
      },
    );
  });

  it('Из объектов комнат делает массив с сущностями сообщений из этих комнат', () => {
    assert.deepEqual(
      flattenMessages(constantsMessages.rooms),
      [
        { _id: 'messageId1', message: 'message1' },
        { _id: 'messageId2', message: 'message2' },
        { _id: 'messageId3', message: 'message3' },
        { _id: 'messageId4', message: 'message4' },
      ],
    );
  });

  it('Из объектов сообщений делает объект с ключами message._id', () => {
    assert.deepEqual(
      normalizeMessages(constantsMessages.messages),
      {
        messageId1: { _id: 'messageId1', message: 'message1' },
        messageId2: { _id: 'messageId2', message: 'message2' },
        messageId3: { _id: 'messageId3', message: 'message3' },
      },
    );
  });

  it('Добавляет новые сообщения с ключами message._id', () => {
    assert.deepEqual(
      addMessagesFromRooms(constantsMessages.initialState, constantsMessages.actionAddMessagesFromRooms),
      {
        ...constantsMessages.initialState,
        messageId1: { _id: 'messageId1', message: 'message1' },
        messageId2: { _id: 'messageId2', message: 'message2' },
        messageId3: { _id: 'messageId3', message: 'message3' },
        messageId4: { _id: 'messageId4', message: 'message4' },
      },
    );
  });

  it('Добавляет новые сообщения в конец объекта по ключу message._id', () => {
    assert.deepEqual(
      addMessages(constantsMessages.initialState, constantsMessages.actionAddMessages),
      {
        ...constantsMessages.initialState,
        messageId1: { _id: 'messageId1', message: 'message1' },
        messageId2: { _id: 'messageId2', message: 'message2' },
        messageId3: { _id: 'messageId3', message: 'message3' },
      },
    );
  });

  it('Actions добавляют новые объекты сообщений по ключам message._id', () => {
    assert.deepEqual(
      messagesById(constantsMessages.initialState, constantsMessages.actionAddMessagesFromRooms),
      {
        ...constantsMessages.initialState,
        messageId1: { _id: 'messageId1', message: 'message1' },
        messageId2: { _id: 'messageId2', message: 'message2' },
        messageId3: { _id: 'messageId3', message: 'message3' },
        messageId4: { _id: 'messageId4', message: 'message4' },
      },
    );
    assert.deepEqual(
      messagesById(constantsMessages.initialState, constantsMessages.actionAddMessage),
      {
        ...constantsMessages.initialState,
        actionAddMessageId: { _id: 'actionAddMessageId', message: 'actionMessage' },
      },
    );
    assert.deepEqual(
      messagesById(constantsMessages.initialState, constantsMessages.actionAddMessages),
      {
        ...constantsMessages.initialState,
        messageId1: { _id: 'messageId1', message: 'message1' },
        messageId2: { _id: 'messageId2', message: 'message2' },
        messageId3: { _id: 'messageId3', message: 'message3' },
      },
    );
  });
});
