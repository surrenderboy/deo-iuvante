import React from 'react';

import testAvatar from './test-avatar.jpg';
import './Avatar.css';

function Avatar(props) {
  let size = props.size;
  if (['s', 'm', 'l'].indexOf(size) === -1) {
    size = 'm';
  }
  let sizeModifier = `avatar_size_${size}`;

  let src = props.src || testAvatar;
  let alt = props.alt || 'avatar';

  let withCount = props.count && props.count > 0;

  return (
    <div className={`avatar ${sizeModifier}`}>
      <img src={src} className="avatar__image" alt={alt} />

      {
        withCount &&
          <div className="avatar__count">{props.count}</div>
      }
    </div>
  );
}

export default Avatar;
