const { ObjectId } = require('mongodb');
const { insertOrUpdateEntity } = require('./helpers');
const { getUser } = require('./user');

const COLL = 'rooms';

/**
 * @typedef {{
 *  userId: string,
 *  text: string,
 *  [attachments]: string[],
 *  time: number
 * }} Message
 */

/**
 * @typedef {{
 *  [_id]: string,
 *  name: string,
 *  users: string[],
 *  messages: Message[],
 *  [avatarUrl]: string
 * }} Room
 */

/**
 * @param {Db} db
 * @param {string} id
 * @param {{}} user
 *
 * @return {Promise<Room>}
 */
async function getRoom(db, id, user) {
  return db.collection(COLL).findOne({ _id: ObjectId(id.toString()), users: user._id.toString() });
}

/**
 * @param {Db} db
 * @param {Room} room
 *
 * @return {Promise<Room>}
 */
async function saveRoom(db, room) {
  return insertOrUpdateEntity(db.collection(COLL), room);
}

/**
 * @param {Db} db
 * @param {object} user
 *
 * @return {Promise<Room>}
 */
async function getUserRooms(db, user) {
  return db.collection(COLL).find({
    users: user._id.toString(),
  }, { messages: { $slice: -5 } }).toArray();
}

/**
 * @param {Db} db
 * @param {User} currentUser
 * @param {Room} room
 *
 * @return {Promise<Room>}
 */
async function createRoom(db, currentUser, room) {
  if (!room.name) {
    throw new Error('Cannot create room without name');
  }

  const collection = db.collection(COLL),
    existsRoom = await collection.findOne({ name: room.name });

  if (!existsRoom) {
    // If we clone room
    // eslint-disable-next-line no-param-reassign
    delete room._id;

    // eslint-disable-next-line no-param-reassign
    room.users = room.users || [];
    room.users.push(currentUser._id.toString());

    return insertOrUpdateEntity(collection, { ...room, messages: [] });
  }

  return {
    error: 'Room with same name already exists',
    code: 409,
  };
}

/**
 *
 * @param {Db} db
 * @param {User} currentUser
 * @param {string} roomId
 * @param {string} userId
 *
 * @return {Promise<Room>}
 */
async function joinRoom(db, currentUser, { roomId, userId }) {
  if (!roomId) {
    throw new Error('You must specify roomId to join');
  }

  if (!userId) {
    throw new Error('You must specify userId to join');
  }

  const collection = db.collection(COLL),
    [room, user] = await Promise.all([getRoom(db, roomId, currentUser), getUser(db, userId)]);

  if (!room) {
    throw new Error(`Cannot find room with id=${roomId}`);
  }

  if (!user) {
    throw new Error(`Unknown user with id=${userId}`);
  }

  // Save users to database
  await collection.updateOne({ _id: room._id }, { $addToSet: { users: user._id.toString() } });

  return room;
}

/**
 * @param {Db} db
 * @param {User} currentUser
 * @param {string} roomId
 * @param {string} userId
 *
 * @return {Promise<Room>}
 */
async function leaveRoom(db, currentUser, { roomId, userId }) {
  if (!roomId) {
    throw new Error('You must specify roomId to join');
  }

  if (!userId) {
    throw new Error('You must specify userId to join');
  }

  const collection = db.collection(COLL),
    [room, user] = await Promise.all([getRoom(db, currentUser, roomId), getUser(db, userId)]);

  if (!room) {
    throw new Error(`Cannot find room with id=${roomId}`);
  }

  if (!user) {
    throw new Error(`Unknown user with id=${userId}`);
  }

  room.users = room.users
    .filter(oneUser => oneUser !== userId.toString());

  // Save users to database
  await collection.updateOne({ _id: room._id }, { $set: { users: room.users } });

  return room;
}

module.exports = {
  saveRoom,
  getUserRooms,
  createRoom,
  getRoom,
  joinRoom,
  leaveRoom,
};
