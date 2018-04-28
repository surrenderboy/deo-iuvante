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

function classNameMessage(hasReadMessage) {
  const classes = hasReadMessage ? ' ' : styles.hasReadMessage;
  return `${classes} ${styles.lastMessage}`;
}

function ChatsListItem(props) {
  const lastMessage = props.room.messages &&
    props.room.messages[0] &&
    props.room.messages[props.room.messages.length - 1] &&
    props.messages[props.room.messages[props.room.messages.length - 1]];
  const lastActivity = lastMessage ? lastMessage.time : null,
    hasReadMessage = lastMessage ? lastMessage.read : true;
  return (
    <Link to={`/chat/${props.room._id}`} className={styles.listItem}>
      <Avatar
        size="m"
        avatarName={props.room.name}
        className={styles.avatar}
      />
      <span className={styles.roomName}>
        {props.room.name}
      </span>
      <span className={classNameMessage(hasReadMessage)}>
        {(lastMessage && lastMessage.text) || 'В этом чате пока нет сообщений'}
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
  messages: PropTypes.objectOf(PropTypes.object),
};

ChatsListItem.defaultProps = {
  messages: {},
};

export default ChatsListItem;
