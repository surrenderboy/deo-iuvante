/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions/messages';
import { fetchUsers } from '../actions/users';
import ReverseList from '../components/ReverseList/ReverseList';
import Bubble from '../components/BubbleNew/Bubble';
import { markAllUnreadMessages } from '../actions/rooms';

class MessagesList extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { fetchMessages, fetchUsers } = this.props;

    fetchMessages();
    fetchUsers();
  }

  componentDidUpdate() {
    this.props.readMessages();
  }

  render() {
    const { messages, isFetching } = this.props;

    return (
      <ReverseList isFetching={isFetching}>
        { messages.map(message => <Bubble key={message.id} {...message} />) }
      </ReverseList>
    );
  }
}

const mapStateToProps = ({
  rooms, messages, currentUser, users,
}, { roomId }) => {
  const room = rooms.byId[roomId] || {};
  const roomMessages = room.messages || [];

  return {
    messages:
      roomMessages
        .map(messageId => messages.byId[messageId])
        .filter(message => typeof message !== 'undefined')
        .map(({
          _id, userId, text, read, time,
        }) => ({
          id: _id,
          isOwner: userId === currentUser.data._id,
          message: text,
          viewState: read ? 'read' : 'delivered',
          time,
          username: (users.byId[userId] || {}).name,
        })),
    isFetching: false,
  };
};

const mapDispatchToProps = (dispatch, { roomId }) => ({
  fetchMessages: () => dispatch(fetchMessages(roomId)),
  readMessages: () => dispatch(markAllUnreadMessages(roomId)),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
