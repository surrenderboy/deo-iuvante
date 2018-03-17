import React from 'react';

import Avatar from '../Avatar/Avatar';
import './ChatAvatar.css';

function ChatAvatar(props) {
  let size = props.size;
  if (['s', 'm', 'l'].indexOf(size) === -1) {
    size = 'm';
  }
  let modifier = `chat-avatar__count_size_${size}`;

  let withCount = props.count && props.count > 0;

  return (
    <div className="chat-avatar">
      <Avatar src={props.src} size={size} alt={props.alt} />

      {
        withCount &&
        <div className={`chat-avatar__count ${modifier}`}>{props.count}</div>
      }
    </div>
  )
}

export default ChatAvatar;
