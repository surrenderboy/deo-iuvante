import React from 'react';
import PropTypes from 'prop-types';
import './Bubble.css';

const Bubble = props =>
  (
    <div className="Bubble" key={Date.now()} >
      <div className={props.isOwner ? 'Bubble_owner_yes' : ''}>
        <span className="Bubble__message">
          <span className="Bubble__message-text">{props.message}</span>
          <span className="Bubble_created-at">
            {new Date(props.created_at).toLocaleString(
        'ru',
        {
          hour: 'numeric',
          minute: 'numeric',
        },
)}
          </span>
        </span>
        <span className={props.isRead ? 'Bubble_read_yes' : ''} />
      </div>
    </div>
  );

Bubble.propTypes = {
  isOwner: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  isRead: PropTypes.bool.isRequired,
  created_at: PropTypes.number.isRequired,
};

export default Bubble;
