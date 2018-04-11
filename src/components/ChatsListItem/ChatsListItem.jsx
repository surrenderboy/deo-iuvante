import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Avatar from '../Avatar/Avatar';
import styles from './ChatsListItem.module.css';

class ChatsListItem extends Component {
  prettifyLastActivity(lastActivity) {
    if (!lastActivity) return '';
    return new Date(lastActivity).toLocaleString('ru', {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  }

  render() {
    const lastMessage = this.props.room.messages &&
      this.props.room.messages[0] &&
      this.props.room.messages[this.props.room.messages.length - 1],
      lastActivity = lastMessage && lastMessage.time;
    return (
      <Link to={`/chat/${this.props.room._id}`} className={styles.listItem}>
        <Avatar
          size="m"
          avatarName={this.props.room.name}
          count={0}
          className={styles.avatar}
        />
        <span className={styles.roomName}>
          {this.props.room.name}
        </span>
        <span className={styles.lastMessage}>
          {lastMessage && lastMessage.text}
        </span>
        <span className={styles.lastActivity}>
          {this.prettifyLastActivity(lastActivity)}
        </span>
      </Link>
    );
  }
}

ChatsListItem.propTypes = {
  room: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    messages: PropTypes.array,
  }).isRequired,
};

export default ChatsListItem;
