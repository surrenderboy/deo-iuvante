import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Avatar/Avatar';
import styles from './UsersListItem.module.css';

function UsersListItem({ email, name, phone, online, }) {
  const avatarUrl = 'https://i.ytimg.com/vi/8f7xJMShlZI/maxresdefault.jpg';

  return (
    <div className={styles.listItem}>
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
    </div>
  );
}

UsersListItem.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  online: PropTypes.bool,
};

UsersListItem.defaultProps = {
  phone: '',
  email: '',
  online: false,
};

export default UsersListItem;
