import React from 'react';
import PropTypes from 'prop-types';

import testAvatar from './test-avatar.jpg';
import styles from './Avatar.module.css';

function classNameWithSize(className, size) {
  return styles[`${className}${size.toUpperCase()}`];
}

function Avatar({
  size, src, alt, count,
}) {
  const withCount = count > 0;
  const sanitizedCount = count > 99 ? '99+' : count;

  return (
    <div className={styles.avatar}>
      <img src={src} className={classNameWithSize('image', size)} alt={alt} />

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
};

Avatar.defaultProps = {
  src: testAvatar,
  alt: 'avatar',
  count: 0,
};

export default Avatar;
