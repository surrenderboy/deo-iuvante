import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.css';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      normalizedText: '',
    };
  }

  componentWillMount() {
    this.normalizeText();
  }

  componentWillUpdate() {
    this.normalizeText();
  }

  normalizeText() {
    const text = typeof this.props.children === 'string' ? this.props.children : '';

    this.setState({
      normalizedText: text,
    });
  }

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.left_slot}>{this.props.left || null}</div>
        <div className={styles.text}>
          {this.state.normalizedText}
        </div>
        <div className={styles.right_slot}>{this.props.right || null}</div>
      </div>
    );
  }
}


Header.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Header;
