import React from 'react';
import PropTypes from 'prop-types';
import { receiveMessage } from '../actions/chat';
import api from '../api';

export default (WrappedComponent) => {
  class SubscribeOnMessage extends React.Component {
    constructor(props) {
      super(props);

      this.receiveMessage = this.receiveMessage.bind(this);
    }

    componentDidMount() {
      api.onMessage(this.receiveMessage);
    }

    componentWillUnmount() {
      api.offMessage();
    }

    receiveMessage(message) {
      this.props.dispatch(receiveMessage(message));
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  SubscribeOnMessage.displayName =
    `SubscribeOnMessage(${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`;
  SubscribeOnMessage.propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  return SubscribeOnMessage;
};
