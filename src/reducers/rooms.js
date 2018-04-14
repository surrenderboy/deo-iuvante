const rooms = (
  state = {
    byId: {},
    allIds: [],
  },
  action,
) => {
  switch (action.type) {
    case 'FETCH_ROOMS_SUCCESS': {
      const byId = {},
        allIds = [];
      action.payload.forEach((room) => {
        allIds.push(room._id);
        byId[room._id] = room;
      });
      return ({
        allIds,
        byId,
      });
    }
    default: return state;
  }
};

export default rooms;
