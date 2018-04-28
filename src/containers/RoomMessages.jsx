import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMessages, sendMessage } from '../actions/messages';
import { fetchUser, fetchUsers } from '../actions/users';

import Chat from '../components/Chat/Chat';

class RoomMessages extends Component {
  componentDidMount() {
    this.props.fetchMessages(this.props.roomId);
  }

  render() {
    return (
      <Chat
        messages={this.props.messages}
        currentUserId={this.props.currentUserId}
        sendMessage={this.props.sendMessage}
        roomId={this.props.roomId}
        isFetchingMessages={this.props.isFetchingMessages}
        users={this.props.users}
      />
    );
  }
}

const mapStateToProps = (state, { roomId }) => {
  const messages =
    state.rooms.byId[roomId].messages
      .map(messageId => state.messages.byId[messageId])
      .filter(message => typeof message !== 'undefined');

  return {
    messages,
    currentUserId: state.currentUser.data._id,
    users: state.users,
    isFetchingMessages: false,
  };
};

const mapDispatchToProps = dispatch => ({
  sendMessage: (roomId, message) => dispatch(sendMessage(roomId, message)),
  fetchMessages: roomId => dispatch(fetchMessages(roomId)),
  fetchUser: _id => dispatch(fetchUser(_id)),
  fetchUsers: filter => dispatch(fetchUsers(filter)),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomMessages);

RoomMessages.defaultProps = {
  isFetchingMessages: false,
  messages: [],
};

RoomMessages.propTypes = {
  fetchMessages: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  roomId: PropTypes.string.isRequired,
  currentUserId: PropTypes.string.isRequired,
  isFetchingMessages: PropTypes.bool,
  messages: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};
