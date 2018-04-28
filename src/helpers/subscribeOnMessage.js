import React from 'react';
import PropTypes from 'prop-types';
import { addMessage, readMessages } from '../actions/messages';
import { fetchRoom } from '../actions/rooms';

import api from '../api';

export default (WrappedComponent) => {
  class SubscribeOnMessage extends React.Component {
    constructor(props) {
      super(props);

      this.receiveMessage = this.receiveMessage.bind(this);
      this.readMessages = this.readMessages.bind(this);
    }

    componentDidMount() {
      api.onMessage(this.receiveMessage);

      api.onMessagesRead(this.readMessages);

      api.onNewRoom(roomId => this.props.dispatch(fetchRoom(roomId)));
    }

    componentWillUnmount() {
      api.offMessage();
      api.offMessagesRead();
    }

    receiveMessage(message) {
      this.props.dispatch(addMessage(message));
    }

    readMessages(roomId) {
      this.props.dispatch(readMessages(roomId));
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  SubscribeOnMessage.displayName =
    `SubscribeOnMessage(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  SubscribeOnMessage.propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  return SubscribeOnMessage;
};
