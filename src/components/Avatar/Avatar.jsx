import React from 'react';
import PropTypes from 'prop-types';

import testAvatar from './test-avatar.jpg';
import styles from './Avatar.module.css';

function classNameWithSize(className, size) {
  return styles[`${className}${size.toUpperCase()}`];
}

function renderAvatarName(chatName) {
  const arrayOfChatName = chatName.split(' ');
  const avatarName = arrayOfChatName.map(name => name.charAt(0).toUpperCase());
  return avatarName.join('');
}

function Avatar({
  size, src, alt, count, className, chatName,
}) {
  const withCount = count > 0;
  const sanitizedCount = count > 99 ? '99+' : count;

  return (
    <div className={`${styles.avatar} ${className}`}>
      {chatName ?
        <div className={classNameWithSize('avatarName', size)}>{renderAvatarName(chatName)}</div> :
        <img src={src} className={classNameWithSize('image', size)} alt={alt} />
      }
      {
        withCount &&
          <div className={classNameWithSize('count', size)}>{sanitizedCount}</div>
      }
    </div>
  );
}

Avatar.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l']).isRequired,
  src: PropTypes.string,
  alt: PropTypes.string,
  count: PropTypes.number,
  className: PropTypes.string,
  chatName: PropTypes.string,
};

Avatar.defaultProps = {
  className: '',
  src: testAvatar,
  alt: 'avatar',
  count: 0,
  chatName: ' ',
};

export default Avatar;
