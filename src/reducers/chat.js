const chat = (state = { messages: [], currentUserId: '', isFetching: false }, action) => ({
  ADD_MESSAGE: () => {
    const messages = [
      ...state.messages,
      {
        id: action.id,
        userId: action.userId,
        message: action.message,
        createdAt: action.createdAt,
      },
    ];
    return { messages, isFetching: false, currentUserId: state.currentUserId };
  },
  REQUEST_MESSAGES: () => ({ ...state, isFetching: true }),
  RECEIVE_MESSAGES: () => {
    const messages = [
      ...state.messages,
      ...action.messages,
    ];
    return { messages, isFetching: false, currentUserId: state.currentUserId };
  },
  REQUEST_CURRENT_USER_ID: () => ({ ...state, isFetching: true }),
  RECEIVE_CURRENT_USER_ID: () => {
    return {
      message: state.messages,
      isFetching: false,
      currentUserId: action.currentUserId,
    };
  },
}[action.type] || (() => state))();

export default chat;
