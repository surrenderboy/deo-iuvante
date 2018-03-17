import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  state = {
    normalizedText: ''
  };

  componentWillMount() {
    this.normalizeText();
  }

  componentWillUpdate() {
    this.normalizeText();
  }

  normalizeText() {
    let text = typeof this.props.children === 'string' ? this.props.children : '';
    console.log(this.props.children, typeof this.props.children);

    if (text.length > 23) {
      text = text.slice(0, 20) + '...';
    };

    this.setState({
      normalizedText: text
    });
  }

  render() {
    return(
      <div className="header">
        <div className="header__left-slot">{this.props.left || null}</div>
        <div className="header__text">{this.state.normalizedText}</div>
        <div className="header__right-slot">{this.props.right || null}</div>
      </div>
    )
  }
}

export default Header;