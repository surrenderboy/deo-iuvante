import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendMessage, getCurrentUserId, getRoomMessages } from '../../actions/chat';

import styles from './Chat.module.css';

import MessageBubble from '../Bubble/Bubble';
import ChatFooter from '../ChatFooter/ChatFooter';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.sendMessage = this.props.sendMessage.bind(this);
    this.getRoomMessages = this.props.getRoomMessages.bind(this);
    this.getCurrentUserId = this.props.getCurrentUserId.bind(this);
  }

  componentWillMount() {
    this.getCurrentUserId();
    this.getRoomMessages(this.props.roomId);
  }

  renderMessages() {
    if (this.props.messages.length === 0) {
      return <div className={styles.emptyState}>В этом чате пока нет сообщений</div>;
    }

    const aggregateMessage = message => (
      <MessageBubble
        isOwner={message.userId === this.props.currentUserId}
        message={message.message}
        isRead={false}
        key={message._id}
      />
    );

    return this.props.messages.map(aggregateMessage);
  }

  render() {
    return (
      <div className={styles.chatContainer}>
        <div className={styles.chatMessages}>
          { this.renderMessages() }
        </div>
        <ChatFooter
          handleAttachment={() => {}}
          sendMessage={this.sendMessage}
          handleVoice={() => {}}
          className={styles.chatFooter}
          roomId={this.props.roomId}
        />
      </div>
    );
  }
}

Chat.defaultProps = {
  sendMessage: () => undefined,
  messages: [],
};

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  currentUserId: PropTypes.string.isRequired,
  sendMessage: PropTypes.func,
  roomId: PropTypes.string.isRequired,
  getRoomMessages: PropTypes.func.isRequired,
  getCurrentUserId: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    messages: state.chatReducer.messages.items,
    currentUserId: state.chatReducer.currentUserId,
  }),
  dispatch => ({
    sendMessage: (roomId, message) => dispatch(sendMessage(roomId, message)),
    getCurrentUserId: () => dispatch(getCurrentUserId()),
    getRoomMessages: roomId => dispatch(getRoomMessages(roomId)),
  }),
)(Chat);
