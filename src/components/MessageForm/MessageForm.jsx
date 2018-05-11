import React from 'react';
import PropTypes from 'prop-types';

import styles from './MessageForm.module.css';
import IconButton from '../IconButton/IconButton';

class MessageForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    className: PropTypes.string,
  };
  static defaultProps = {
    className: '',
  };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = { value: '' };

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.value);

    this.setState({ value: '' });
  }

  handleChange({ target }) {
    this.setState({ value: target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={`${styles.form} ${this.props.className}`}>
        <input
          type="text"
          placeholder="Type your message"
          className={styles.input}
          value={this.state.value}
          onChange={this.handleChange}
        />

        <IconButton
          component="button"
          type="submit"
          icon={{
            color: '#a9d18b',
            glyph: 'send',
          }}
        />
      </form>
    );
  }
}

export default MessageForm;
