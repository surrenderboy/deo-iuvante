import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import authorize, { KNOWN_USERS_ONLY } from '../hocs/authorize';
import ChatLayout from '../components/ChatLayout/ChatLayout';
import { fetchRoomIfNeeded } from '../actions/rooms';

class ChatPage extends React.Component {
  static propTypes = {
    fetchRoomIfNeeded: PropTypes.func.isRequired,
    roomId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.props.fetchRoomIfNeeded();
  }

  render() {
    const { roomId, name } = this.props;

    return <ChatLayout roomId={roomId} name={name} />;
  }
}

const mapStateToProps = ({ rooms }, { match }) => {
  const { _id, name } = rooms.byId[match.params.id] || {};

  return ({
    roomId: _id,
    name,
  });
};

const mapDispatchToProps = (dispatch, { match }) => ({
  fetchRoomIfNeeded: () => dispatch(fetchRoomIfNeeded(match.params.id)),
});

export default compose(
  authorize(KNOWN_USERS_ONLY),
  connect(mapStateToProps, mapDispatchToProps),
)(ChatPage);
