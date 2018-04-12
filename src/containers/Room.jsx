import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRoom } from '../actions/chat';

import ChatLayout from '../components/ChatLayout/ChatLayout';

class Room extends Component {
  constructor(props) {
    super(props);

    this.fetchRoom = this.props.fetchRoom.bind(this);
  }

  componentDidMount() {
    this.fetchRoom(this.props.match.params.id);
  }

  render() {
    if (this.props.isFetchingRoom) {
      return (
        <ChatLayout
          roomId={this.props.match.params.id}
        />
      );
    }
    return (
      <ChatLayout
        chatName={this.props.room.name}
        roomId={this.props.match.params.id}
        chatNameAvatar={this.props.room.name}
      />
    );
  }
}

export default connect(
  state => ({
    room: state.chatReducer.room,
    isFetchingRoom: state.chatReducer.isFetchingRoom,
  }),
  dispatch => ({
    fetchRoom: roomId => dispatch(fetchRoom(roomId)),
  }),
)(Room);

Room.defaultProps = {
  isFetchingRoom: false,
};

Room.propTypes = {
  fetchRoom: PropTypes.func.isRequired,
  isFetchingRoom: PropTypes.bool,
  room: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
