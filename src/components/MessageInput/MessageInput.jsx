import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MessageInput.css';

class MessageInput extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    this.props.sendMessage(this.state.value);

    this.setState({ value: '' });

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="message-input">
        <input
          type="text"
          placeholder="Type your message"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

MessageInput.propTypes = {
  sendMessage: PropTypes.func.isRequired
}

export default MessageInput;
