import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Avatar from '../Avatar/Avatar';
import styles from './ChatsListItem.module.css';

const prettifyLastActivity = (lastActivity) => {
  if (!lastActivity) return '';
  return new Date(lastActivity).toLocaleString('en', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};

const classNameMessage = (hasReadMessage) => {
  const classes = hasReadMessage ? ' ' : styles.hasReadMessage;
  return `${classes} ${styles.lastMessage}`;
};

const ChatsListItem = ({
  id, name, lastMessage, lastActivity, count,
}) => (
  <Link to={`/chat/${id}`} className={styles.listItem}>
    <Avatar size="m" avatarName={name} className={styles.avatar} count={count} />
    <span className={styles.roomName}>
      {name}
    </span>
    <span className={classNameMessage(true)}>
      { (lastMessage && lastMessage.length > 0 && lastMessage) || 'No messages yet' }
    </span>
    <span className={styles.lastActivity}>
      { prettifyLastActivity(lastActivity) }
    </span>
  </Link>
  // );
);
ChatsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastMessage: PropTypes.string,
  lastActivity: PropTypes.string,
  count: PropTypes.number,
};
ChatsListItem.defaultProps = {
  lastMessage: '',
  lastActivity: '',
  count: 0,
};

export default ChatsListItem;
