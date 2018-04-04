const chat = (state = { messages: {}, currentUserId: '', isFetching: false }, action) => ({
  ADD_MESSAGE: () => {
    const messages = [
      ...state.messages,
      {
        roomId: action.roomId,
        message: action.message,
      },
    ];
    return { messages, isFetching: false, currentUserId: state.currentUserId };
  },
  REQUEST_MESSAGES: () => ({ ...state, isFetching: true }),
  RECEIVE_MESSAGES: () => {
    const messages = {
      ...state.messages,
      ...action.messages,
    };
    return { messages, isFetching: false, currentUserId: state.currentUserId };
  },
  REQUEST_CURRENT_USER_ID: () => ({ ...state, isFetching: true }),
  RECEIVE_CURRENT_USER_ID: () => ({
    messages: state.messages,
    isFetching: false,
    currentUserId: action.currentUserId,
  }
  )
  ,
}[action.type] || (() => state))();

export default chat;
