import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Avatar from '../Avatar/Avatar';
import styles from './ChatsListItem.module.css';

class ChatsListItem extends Component {
  prettifyLastActivity() {
    const { lastActivity } = this.props;

    if (lastActivity === 0) return '';
    return new Date(lastActivity).toLocaleString('ru', {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  }

  render() {
    return (
      <Link to={`/chat/${this.props.room.id}`} className={styles.listItem}>
        <Avatar size="m" src={this.props.room.avatarUrl} count={this.props.unreadMessages} className={styles.avatar} />
        <span className={styles.roomName}>
          {this.props.room.name}
        </span>
        <span className={styles.lastMessage}>
          {this.props.lastMessage}
        </span>
        <span className={styles.lastActivity}>
          {this.prettifyLastActivity()}
        </span>
      </Link>
    );
  }
}

ChatsListItem.propTypes = {
  unreadMessages: PropTypes.number,
  lastActivity: PropTypes.number,
  room: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  lastMessage: PropTypes.string,
};

ChatsListItem.defaultProps = {
  lastMessage: 'Ваш чат пока пуст',
  unreadMessages: 0,
  lastActivity: 0,
};

export default ChatsListItem;
