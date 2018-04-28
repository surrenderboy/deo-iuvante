import React from 'react';
import PropTypes from 'prop-types';
import { addMessage } from '../actions/messages';
import { fetchRoom } from '../actions/rooms';

import api from '../api';

export default (WrappedComponent) => {
  class SubscribeOnMessage extends React.Component {
    constructor(props) {
      super(props);

      this.receiveMessage = this.receiveMessage.bind(this);
    }

    componentDidMount() {
      api.onMessage(this.receiveMessage);
      api.onNewRoom(roomId => this.props.dispatch(fetchRoom(roomId)));
    }

    componentWillUnmount() {
      api.offMessage();
    }

    receiveMessage(message) {
      this.props.dispatch(addMessage(message));
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
