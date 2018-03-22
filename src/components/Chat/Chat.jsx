import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Chat.module.css';

import MessageBubble from '../Bubble/Bubble';

class Chat extends Component {
  renderMessages() {
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
      <div className={styles.chat_container}>
        { this.renderMessages() }
      </div>
    );
  }
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentUserId: PropTypes.string.isRequired,
};

export default Chat;
