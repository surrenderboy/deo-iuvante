import React, { Component } from 'react';
import Header from '../Header/Header.js';

class App extends Component {
  render() {
    return (
      <Header left="L" right="R">Awfully Large Header Text To Check Overflow Capabilities</Header>
    );
  }
}

export default App;
