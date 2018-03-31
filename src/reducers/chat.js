const chat = (state = { messages: [], isFetching: false }, action) => ({
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
    return { messages, isFetching: false };
  },
}[action.type] || (() => state));

export default chat;
