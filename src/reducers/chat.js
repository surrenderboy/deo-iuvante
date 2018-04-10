const chat = (state = {
  messages: {},
  room: {},
  isFetchingMessages: false,
  isFetchingRoom: false,
}, action) => ({
  ADD_MESSAGE: () => ({
    ...state,
    messages: {
      ...state.messages,
      items: [
        ...state.messages.items,
        {
          created_at: action.newMessage.created_at,
          message: action.newMessage.message,
          roomId: action.newMessage.roomId,
          userId: action.newMessage.userId,
          _id: action.newMessage._id,
        },
      ],
    },
  }),
  FETCH_MESSAGES_START: () => ({ ...state, isFetchingMessages: true }),
  FETCH_MESSAGES_SUCCESS: () => ({
    ...state,
    messages: {
      ...action.messages,
    },
  }),
  FETCH_MESSAGES_ERROR: () => ({
    ...state,
    errorMessage: action.errorMessage,
  }),
  FETCH_MESSAGES_END: () => ({
    ...state,
    isFetchingMessages: false,
  }),
  FETCH_ROOM_START: () => ({
    ...state,
    isFetchingRoom: true,
  }),
  FETCH_ROOM_SUCCESS: () => ({
    ...state,
    room: {
      ...action.room,
    },
  }),
  FETCH_ROOM_ERROR: () => ({
    ...state,
    errorMessage: action.errorMessage,
  }),
  FETCH_ROOM_END: () => ({
    ...state,
    isFetchingRoom: false,
  }),
}[action.type] || (() => state))();

export default chat;
