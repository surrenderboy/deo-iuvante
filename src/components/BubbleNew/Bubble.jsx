import React from 'react';
import PropTypes from 'prop-types';
import Bouncer from '../Bouncer/Bouncer';
import Icon from '../Icon/Icon';
import Avatar from '../Avatar/Avatar';

import styles from './Bubble.module.css';

const renderDate = (time) => {
  const date = new Date(time);
  const options = {
    hour: 'numeric',
    minute: 'numeric',
  };
  return date.toLocaleString('ru', options);
};

const renderMessageState = (viewState) => {
  switch (viewState) {
    case 'pending': return <Bouncer />;
    case 'delivered': return (<Icon color="#1be003" glyph="done" />);
    case 'read': return (<Icon color="#1be003" glyph="done_all" />);
    case 'error': return (<Icon color="#1be003" glyph="error_outline" />);
    default: return null;
  }
};

const Bubble = props => (
  <div className={styles.Bubble}>
    <div className={props.isOwner ? styles.Owner : styles.NotOwner}>
      <div className={styles.Checkmark}>{renderMessageState(props.viewState)}</div>
      <div className={styles.BubbleMessage}>
        {!props.isOwner && <p className={styles.UserName}>{props.username}</p>}
        <p>{props.message}</p>
        <p className={styles.MessageDate}>{renderDate(props.time)}</p>
      </div>
      {!props.isOwner && <Avatar
        className={styles.Avatar}
        avatarName={props.username}
        src={props.avatarUrl}
        size="s"
      />}
    </div>
  </div>
);

Bubble.propTypes = {
  time: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  username: PropTypes.string,
  viewState: PropTypes.oneOf(['pending', 'delivered', 'read', 'error']),
  avatarUrl: PropTypes.string,
  isOwner: PropTypes.bool,
};

Bubble.defaultProps = {
  viewState: 'pending',
  username: 'Username',
  avatarUrl: 'https://s00.yaplakal.com/pics/userpic/2/2/3/av-192322.png',
  isOwner: false,
};

export default Bubble;
