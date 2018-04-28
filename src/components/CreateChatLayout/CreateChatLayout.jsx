import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import api from '../../api';

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

  createRoom() {
    api.createRoom({
      users: this.state.selectedUsers,
    })
      .then(({ _id }) => {
        this.setState({
          newRoomId: _id,
        });
      });
  }

  renderRedirect() {
    if (!this.state.newRoomId) return null;
    return <Redirect to={`/chat/${this.state.newRoomId}`} push />;
  }

  render() {
    return (
      <AppLayout
        headerText="Выберите пользователей"
        headerRight={(<IconButton
          icon={{ glyph: 'check', color: '#00a000' }}
          onClick={this.createRoom}
        />)}
        headerLeft={(<IconButton
          icon={{ glyph: 'keyboard_arrow_left', color: '#fff' }}
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
  const currentUserId = state.currentUser.data._id,
    users = Object.keys(state.users.byId).map(_id => state.users.byId[_id]).filter(_id => _id !== currentUserId);

  return ({
    users,
  });
}

CreateChat.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchUsers })(CreateChat);
