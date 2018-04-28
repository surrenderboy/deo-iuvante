import React from 'react';
import PropTypes from 'prop-types';

import testAvatar from './test-avatar.jpg';
import styles from './Avatar.module.css';

function classNameWithSize(className, size) {
  return styles[`${className}${size.toUpperCase()}`];
}

function renderAvatarName(avatarName) {
  const arrayOfChatName = avatarName.split(' ');
  return arrayOfChatName.map(name => name.charAt(0).toUpperCase()).join('');
}

function Avatar({
  size, src, alt, className, avatarName,
}) {
  return (
    <div className={`${styles.avatar} ${className}`}>
      {avatarName ?
        <div className={classNameWithSize('avatarName', size)}>{renderAvatarName(avatarName)}</div> :
        <img src={src} className={classNameWithSize('image', size)} alt={alt} />
      }
    </div>
  );
}

Avatar.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l']).isRequired,
  src: PropTypes.string,
  alt: PropTypes.string,
  hasRead: PropTypes.bool,
  className: PropTypes.string,
  avatarName: PropTypes.string,
};

Avatar.defaultProps = {
  className: '',
  src: testAvatar,
  alt: 'avatar',
  hasRead: true,
  avatarName: ' ',
};

export default Avatar;
