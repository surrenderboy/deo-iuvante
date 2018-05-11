import React from 'react';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';

import testAvatar from './test-avatar.jpg';
import styles from './Avatar.module.css';

function classNameWithSize(className, size) {
  return styles[`${className}${size.toUpperCase()}`];
}

function renderAvatarName(avatarName) {
  const arrayOfChatName = avatarName.split(' ').slice(0, 2);
  return arrayOfChatName.map(name => name.charAt(0).toUpperCase()).join('');
}

function Avatar({
  size, src, alt, className, avatarName, count,
}) {
  const normalizedCount = count > 100 ? 99 : count;
  const normalizedName = avatarName.length === 0 ? ' ' : avatarName;

  return (
    <div className={`${styles.avatar} ${className}`}>
      {normalizedName ?
        <div
          className={classNameWithSize('avatarName', size)}
          style={{
            backgroundColor: randomColor({ seed: normalizedName }),
          }}
        >
          { renderAvatarName(normalizedName) }
        </div> :
        <img src={src} className={classNameWithSize('image', size)} alt={alt} />
      }
      { normalizedCount > 0 &&
        <div className={classNameWithSize('count', size)}>
          { normalizedCount }
        </div> }
    </div>
  );
}

Avatar.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l']).isRequired,
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  avatarName: PropTypes.string,
  count: PropTypes.number,
};

Avatar.defaultProps = {
  className: '',
  src: testAvatar,
  alt: 'avatar',
  avatarName: ' ',
  count: 0,
};

export default Avatar;
