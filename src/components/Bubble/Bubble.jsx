import React from 'react';
import PropTypes from 'prop-types';
import './Bubble.css';

const Bubble = props =>
  (
    <div className="Bubble" key={Date.now()} >
      <div className={props.isOwner ? 'Bubble_owner_yes' : ''}>
        <span className="Bubble__message">{props.message}</span>
        <span className={props.isReaded ? 'Bubble_readed_yes' : ''} />
      </div>
    </div>
  );

Bubble.propTypes = {
  isOwner: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  isReaded: PropTypes.bool.isRequired,
};

export default Bubble;
