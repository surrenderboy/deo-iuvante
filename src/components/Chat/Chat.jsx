import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
          sendMessage={() => {}}
          handleVoice={() => {}}
          className={styles.chatFooter}
        />
      </div>
    );
  }
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentUserId: PropTypes.string.isRequired,
};

export default Chat;
