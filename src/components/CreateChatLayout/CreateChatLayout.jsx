import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import api from '../../apiV2';

import { fetchUsers } from '../../actions/users';

import UsersList from '../UsersList/UsersList';
import AppLayout from '../AppLayout/AppLayout';
import IconButton from '../IconButton/IconButton';

class CreateChat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUsers: [],
      newRoomId: null,
    };

    this.switchUserSelection = this.switchUserSelection.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  switchUserSelection(id) {
    const userAlreadySelected = this.state.selectedUsers.indexOf(id) !== -1;

    if (userAlreadySelected) {
      this.setState({
        selectedUsers: this.state.selectedUsers.filter(userId => userId !== id),
      });
    } else {
      this.setState({
        selectedUsers: [].concat(this.state.selectedUsers, id),
      });
    }
  }

  roomName() {
    const users = this.state.selectedUsers;

    return [...users, this.props.currentUserId].map((id) => {
      const user = this.props.usersById[id];

      return user.name || user.username;
    }).join(', ');
  }

  createRoom() {
    if (this.state.selectedUsers.length === 0) return;

    api.createRoom({
      room: {
        user_ids: this.state.selectedUsers,
        name: this.roomName(),
      },
    }).then(({ room }) => {
      this.setState({
        newRoomId: room.id,
      });
    });
  }

  renderRedirect() {
    if (!this.state.newRoomId) return null;

    return <Redirect to={`/chat/${this.state.newRoomId}`} />;
  }

  render() {
    return (
      <AppLayout
        headerText="Select users"
        headerRight={(<IconButton
          icon={{ glyph: 'check', color: '#fff' }}
          onClick={this.createRoom}
        />)}
        headerLeft={(<IconButton
          icon={{ glyph: 'arrow_back', color: '#fff' }}
          component={Link}
          to="/"
        />)}
      >
        <React.Fragment>
          <UsersList
            switchUserSelection={this.switchUserSelection}
            selectedUsers={this.state.selectedUsers}
            users={this.props.users}
          />
          {this.renderRedirect()}
        </React.Fragment>
      </AppLayout>
    );
  }
}

function mapStateToProps(state) {
  const currentUserId = state.currentUser.id,
    users =
      Object
        .keys(state.users.byId)
        .filter(id => id !== currentUserId)
        .map(id => state.users.byId[id]);

  return ({
    users,
    usersById: state.users.byId,
    currentUserId,
  });
}

CreateChat.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchUsers: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  usersById: PropTypes.object,
  currentUserId: PropTypes.string.isRequired,
};
CreateChat.defaultProps = {
  usersById: {},
};

export default connect(mapStateToProps, { fetchUsers })(CreateChat);
