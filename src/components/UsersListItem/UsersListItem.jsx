import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Avatar/Avatar';
import Icon from '../Icon/Icon';
import styles from './UsersListItem.module.css';

function UsersListItem({ email, name, phone, online, selected, onClick, }) {
  const avatarUrl = 'https://i.ytimg.com/vi/8f7xJMShlZI/maxresdefault.jpg';

  return (
    <div className={`${styles.listItem} ${selected ? styles.selectedItem : ''}`} onClick={onClick}>
      <Avatar size="m" src={avatarUrl} className={styles.avatar} />
      <span className={styles.username}>
        {name}
      </span>
      <span className={styles.onlineMark}>
        {online ? 'online' : ''}
      </span>
      <span className={styles.phone}>
        {phone}
      </span>
      <span className={styles.email}>
        {email}
      </span>
      <Icon
        className={styles.selectedIcon}
        color={selected ? '#00b33c' : '#777'}
        glyph={selected ? 'check_circle' : 'add_circle'}
      />
    </div>
  );
}

UsersListItem.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  online: PropTypes.bool,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

UsersListItem.defaultProps = {
  phone: '',
  email: '',
  online: false,
  selected: false,
  onClick: () => {},
};

export default UsersListItem;
