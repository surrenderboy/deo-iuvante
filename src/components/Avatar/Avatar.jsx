import React from 'react';
import PropTypes from 'prop-types';

import testAvatar from './test-avatar.jpg';
import './Avatar.css';

function Avatar(props) {
  const sizeModifier = `avatar_size_${props.size}`;

  const withCount = props.count && props.count > 0;

  return (
    <div className={`avatar ${sizeModifier}`}>
      <img src={props.src} className="avatar__image" alt={props.alt} />

      {
        withCount &&
          <div className="avatar__count">{props.count}</div>
      }
    </div>
  );
}

Avatar.defaultProps = {
  src: testAvatar,
  alt: 'avatar',
};

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
