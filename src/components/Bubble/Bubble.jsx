import React, { Component } from 'react';
import './Bubble.css';

class Bubble extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Bubble" key={Date.now()} >
        <div className={this.props.isOwner ? 'Bubble_owner_yes' : ''}>
          <span className="Bubble__message">{this.props.message}</span>
          <span className={this.props.isReaded ? 'Bubble_readed_yes' : ''} />
        </div>
      </div>
    );
  }
}

export default Bubble;
