import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendMessage, getCurrentUserId, getRoomMessages } from '../../actions/chat';

import styles from './Chat.module.css';

import MessageBubble from '../Bubble/Bubble';
import ChatFooter from '../ChatFooter/ChatFooter';

class Chat extends Component {
  renderMessages() {
    if (!this.props.messages[0]) {
      return <div className={styles.emptyState}>В этом чате пока нет сообщений</div>;
    }

    const aggregateMessage = message => (
      <MessageBubble
        isOwner={message.userId === this.props.currentUserId}
        message={message.message}
        isRead={message.isRead}
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
          sendMessage={this.props.sendMessage}
          handleVoice={() => {}}
          className={styles.chatFooter}
        />
      </div>
    );
  }
}

Chat.defaultProps = {
  sendMessage: () => undefined,
};

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentUserId: PropTypes.string.isRequired,
  sendMessage: PropTypes.func,
};

export default connect(
  state => ({
    messages: state.messages,
    currentUserId: state.currentUserId,
  }),
  dispatch => ({
    sendMessage: ({ roomID, message }) => dispatch(sendMessage({ roomID, message })),
    getCurrentUserId: () => dispatch(getCurrentUserId()),
    getRoomMessages: id => dispatch(getRoomMessages(id)),
  }),
)(Chat);
