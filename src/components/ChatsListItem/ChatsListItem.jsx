import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Avatar from '../Avatar/Avatar';
import styles from './ChatsListItem.module.css';

function prettifyLastActivity(lastActivity) {
  if (!lastActivity) return '';
  return new Date(lastActivity).toLocaleString('ru', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
}

function ChatsListItem(props) {
  const lastMessage = props.room.messages &&
    props.room.messages[0] &&
    props.room.messages[props.room.messages.length - 1],
    lastActivity = lastMessage && lastMessage.time;
  return (
    <Link to={`/chat/${props.room._id}`} className={styles.listItem}>
      <Avatar
        size="m"
        avatarName={props.room.name ? props.room.name.slice(0, 2) : 'R'}
        count={0}
        className={styles.avatar}
      />
      <span className={styles.roomName}>
        {props.room.name}
      </span>
      <span className={styles.lastMessage}>
        {lastMessage && lastMessage.text}
      </span>
      <span className={styles.lastActivity}>
        {prettifyLastActivity(lastActivity)}
      </span>
    </Link>
  );
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
