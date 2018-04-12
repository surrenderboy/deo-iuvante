import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Chat.module.css';

import MessageBubble from '../Bubble/Bubble';
import ChatFooter from '../ChatFooter/ChatFooter';
import ViewportSpinner from '../ViewportSpinner/ViewportSpinner';

export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollTop: 10000,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.messages.length > this.props.messages.length) {
      console.log(this.container.scrollHeight,this.container.clientHeight);
      this.setState({
        scrollTop: this.container.scrollHeight !== this.container.clientHeight ?
          this.container.scrollHeight : 1000000,
      });
    }
  }

  componentDidUpdate() {
    this.container.scrollTop = this.state.scrollTop;
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
        created_at={message.created_at}
      />
    );

    return this.props.messages.map(aggregateMessage);
  }

  render() {
    return (
      <div className={styles.chatContainer}>
        <div
          className={styles.chatMessages}
          ref={(container) => { this.container = container; }}
        >
          {this.props.isFetchingMessages ?
            <ViewportSpinner size="l" /> :
            this.renderMessages()
          }
        </div>
        <ChatFooter
          handleAttachment={() => {}}
          sendMessage={this.props.sendMessage}
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
  isFetchingMessages: false,
};

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  currentUserId: PropTypes.string.isRequired,
  sendMessage: PropTypes.func,
  roomId: PropTypes.string.isRequired,
  isFetchingMessages: PropTypes.bool,
};
