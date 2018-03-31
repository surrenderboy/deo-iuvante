const chat = (state = [], action) => ({
  SEND_MESSAGE: () => [...state, {}],
}[action.type] || (() => state)());

export default chat;
