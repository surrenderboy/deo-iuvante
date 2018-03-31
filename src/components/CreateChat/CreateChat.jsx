import React, { Component } from 'react';

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
      currentUserId: api.getCurrentUser(),
    };

    this.switchUserSelection = this.switchUserSelection.bind(this);
    this.handleRoomNameChange = this.handleRoomNameChange.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }


  componentWillMount() {
    this.getUsers();
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
      return this.setState({
        selectedUsers: this.state.selectedUsers.filter(userId => userId !== id),
      });
    }

    this.setState({
      selectedUsers: [].concat(this.state.selectedUsers, id),
    });
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
    console.log('going to save room');
    api.createRoom({
      name: this.state.roomName,
      users: [].concat(this.state.selectedUsers, this.state.currentUserId),
    })
      .then(res => console.log(res));
  }

  renderRoomSettings() {
    if (this.state.screen !== 'Настройки чата') return null;

    return (
      <FormInput
        label="Room name"
        className=""
        id="room-name-input"
        type="text"
        placeholder="Например, Привычка"
        value={this.state.roomName}
        onChange={this.handleRoomNameChange}
        errorMessage=""
      />
    );
  }

  headerRightContent() {
    if (this.state.screen === 'Настройки чата') {
      return (
        <IconButton
          icon={{ glyph: 'check', color: '#00b33c' }}
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
  }

  headerLeftContent() {
    if (this.state.screen === 'Добавить пользователей') {
      return (
        <IconButton
          icon={{ glyph: 'keyboard_arrow_left', color: '#fff' }}
          onClick={() => {}}
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
        </React.Fragment>
      </AppLayout>
    );
  }
}

export default CreateChat;
