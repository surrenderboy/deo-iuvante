import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import authorize, { SIGNED_IN_USERS_ONLY } from '../hocs/authorize';
import ChatLayout from '../components/ChatLayout/ChatLayout';
import { fetchRoomIfNeeded } from '../actions/rooms';

class ChatPage extends React.Component {
  static propTypes = {
    fetchRoomIfNeeded: PropTypes.func.isRequired,
    roomId: PropTypes.string,
    name: PropTypes.string,
  };
  static defaultProps = {
    roomId: '',
    name: '',
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
  const { id, name } = rooms.byId[match.params.id] || {};

  return ({
    roomId: id,
    name,
  });
};

const mapDispatchToProps = (dispatch, { match }) => ({
  fetchRoomIfNeeded: () => dispatch(fetchRoomIfNeeded(match.params.id)),
});

export default compose(
  authorize(SIGNED_IN_USERS_ONLY),
  connect(mapStateToProps, mapDispatchToProps),
)(ChatPage);
