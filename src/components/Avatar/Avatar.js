import React from 'react';

import testAvatar from './test-avatar.jpg';
import './Avatar.css';

function Avatar(props) {
  let {height = '300px', width = '300px'} = props;
  let src = props.src || testAvatar;

  return (
    <img src={src} className="avatar" style={{height, width}} alt="avatar" />
  )
}

export default Avatar;
