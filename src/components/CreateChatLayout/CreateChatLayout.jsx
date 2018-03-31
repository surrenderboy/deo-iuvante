import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import api from '../../api';

import UsersList from '../UsersList/UsersList';
import AppLayout from '../AppLayout/AppLayout';
import IconButton from '../IconButton/IconButton';
import FormInput from '../FormInput/FormInput';

class CreateChat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      selectedUsers: [],
      screen: 'Добавить пользователей',
      roomName: '',
      currentUserId: null,
      newRoomId: null,
    };

    this.switchUserSelection = this.switchUserSelection.bind(this);
    this.handleRoomNameChange = this.handleRoomNameChange.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  componentWillMount() {
    this.getCurrentUser();
    this.getUsers();
  }

  async getCurrentUser() {
    const user = await api.getCurrentUser();

    this.setState({
      currentUserId: user._id,
    });
  }

  async getUsers() {
    const usersData = await api.getUsers();
    const users = usersData.items.filter(user => user._id !== this.state.currentUserId);

    this.setState({
      users,
    });
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

  handleRoomNameChange(e) {
    this.setState({
      roomName: e.target.value,
    });
  }

  switchScreen(name) {
    return ((screenName) => {
      this.setState({
        screen: screenName,
      });
    }).bind(this, name);
  }

  createRoom() {
    api.createRoom({
      name: this.state.roomName,
      users: this.state.selectedUsers,
    })
      .then(({ _id }) => {
        this.setState({
          newRoomId: _id,
        });
      });
  }

  headerRightContent() {
    if (this.state.screen === 'Настройки чата') {
      return (
        <IconButton
          icon={{ glyph: 'check', color: '#00a000' }}
          onClick={this.createRoom}
        />
      );
    }

    if (this.state.screen === 'Добавить пользователей') {
      return (
        <IconButton
          icon={{ glyph: 'arrow_forward', color: '#fff' }}
          onClick={this.switchScreen('Настройки чата')}
        />
      );
    }

    return null;
  }

  headerLeftContent() {
    if (this.state.screen === 'Добавить пользователей') {
      return (
        <IconButton
          icon={{ glyph: 'keyboard_arrow_left', color: '#fff' }}
          component={Link}
          to="/"
        />
      );
    }

    if (this.state.screen === 'Настройки чата') {
      return (
        <IconButton
          icon={{ glyph: 'keyboard_arrow_left', color: '#fff' }}
          onClick={this.switchScreen('Добавить пользователей')}
        />
      );
    }

    return null;
  }

  renderList() {
    if (this.state.screen !== 'Добавить пользователей') return null;

    return (
      <UsersList
        switchUserSelection={this.switchUserSelection}
        selectedUsers={this.state.selectedUsers}
        users={this.state.users}
      />
    );
  }

  renderRoomSettings() {
    if (this.state.screen !== 'Настройки чата') return null;

    return (
      <FormInput
        label="Room name"
        className=""
        id="room-name-input"
        type="text"
        placeholder="Например, Комната смеха"
        value={this.state.roomName}
        onChange={this.handleRoomNameChange}
        errorMessage=""
      />
    );
  }

  renderRedirect() {
    if (!this.state.newRoomId) return null;
    return <Redirect to={`/chat/${this.state.newRoomId}`} push />;
  }

  render() {
    return (
      <AppLayout
        headerText={this.state.screen}
        headerRight={this.headerRightContent()}
        headerLeft={this.headerLeftContent()}
      >
        <React.Fragment>
          {this.renderList()}
          {this.renderRoomSettings()}
          {this.renderRedirect()}
        </React.Fragment>
      </AppLayout>
    );
  }
}

export default CreateChat;
