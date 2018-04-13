const defaultState = {
  messages: [],
  room: {},
  isFetchingMessages: false,
  isFetchingRoom: false,
};

const chat = (state = defaultState, action) => ({
  ADD_MESSAGE: () => ({
    ...state,
    messages: [...state.messages, action.newMessage],
  }),
  FETCH_MESSAGES_START: () => ({ ...state, isFetchingMessages: true }),
  FETCH_MESSAGES_SUCCESS: () => ({
    ...state,
    messages: [...action.messages, ...state.messages],
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
  CLEAR_STATE: () => defaultState,
}[action.type] || (() => state))();

export default chat;
