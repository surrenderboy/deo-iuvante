import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Avatar/Avatar';
import Icon from '../Icon/Icon';
import styles from './UsersListItem.module.css';

function UsersListItem({
  name,
  username,
  selected,
  onClick,
}) {
  return (
    <div className={`${styles.listItem} ${selected ? styles.selectedItem : ''}`} onClick={onClick}>
      <Avatar size="m" avatarName={name || username} className={styles.avatar} />
      <span className={styles.username}>
        {name || username}
      </span>
      <Icon
        className={styles.selectedIcon}
        color={selected ? '#00b33c' : '#777'}
        glyph={selected ? 'check_circle_outline' : 'add_circle_outline'}
      />
    </div>
  );
}

UsersListItem.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

UsersListItem.defaultProps = {
  name: '',
  username: '',
  selected: false,
  onClick: () => {},
};

export default UsersListItem;
