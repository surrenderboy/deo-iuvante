/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { fetchMessagesIfNeeded, readMessages } from '../actions/messages';
import ReverseList from '../components/ReverseList/ReverseList';
import Bubble from '../components/BubbleNew/Bubble';
import cable from '../cable';

class MessagesList extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { fetchMessages, readMessages, roomId, } = this.props;

    fetchMessages();

    cable.subscribeToRoom(readMessages, { id: roomId });
    cable.visitRoom({ id: roomId });
  }

  componentDidUpdate() {
    cable.visitRoom({ id: this.props.roomId });
  }

  componentWillUnmount() {
    cable.unsubscribeOfRoom();
  }

  render() {
    const { messages, isFetching } = this.props;

    return (
      <ReverseList isFetching={isFetching} emptyMessage="You have no messages yet">
        { messages.map(message => <Bubble key={message.id} {...message} />) }
      </ReverseList>
    );
  }
}

const mapStateToProps = ({
  rooms, messages, currentUser, users, isFetching,
}, { roomId }) => {
  const room = rooms.byId[roomId] || {};
  const roomMessages = (room.messages && room.messages.allIds) || [];

  return {
    roomId,
    messages:
      roomMessages
        .map(messageId => messages.byId[messageId])
        .map((message) => {
          const user = users.byId[message.user_id] || {};

          return ({
            id: message.id,
            isOwner: message.user_id === currentUser.id,
            message: message.body,
            viewState: message.read ? 'read' : 'delivered',
            time: message.created_at,
            username: user.name || user.username,
          });
        }),
    isFetching: isFetching.messages,
  };
};

const mapDispatchToProps = (dispatch, { roomId }) => ({
  fetchMessages: () => roomId && dispatch(fetchMessagesIfNeeded(roomId)),
  readMessages: ({ message_ids: ids }) => {
    dispatch(readMessages(ids));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
