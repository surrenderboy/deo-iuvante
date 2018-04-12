import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchMessages, sendMessage } from '../actions/chat';

import Chat from '../components/Chat/Chat';

class RoomMessages extends Component {
  constructor(props) {
    super(props);

    this.fetchMessages = this.props.fetchMessages.bind(this);
    this.sendMessage = this.props.sendMessage.bind(this);
  }

  componentDidMount() {
    this.fetchMessages(this.props.roomId);
  }

  render() {
    return (
      <Chat
        messages={this.props.messages}
        currentUserId={this.props.currentUserId}
        sendMessage={this.sendMessage}
        roomId={this.props.roomId}
        isFetchingMessages={this.props.isFetchingMessages}
      />
    );
  }
}

export default connect(
  state => ({
    messages: state.chatReducer.messages.items,
    currentUserId: state.currentUser.data._id,
    isFetchingMessages: state.chatReducer.isFetchingMessages,
  }),
  dispatch => ({
    sendMessage: (roomId, message) => dispatch(sendMessage(roomId, message)),
    fetchMessages: roomId => dispatch(fetchMessages(roomId)),
  }),
)(RoomMessages);

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
};
