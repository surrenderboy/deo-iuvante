import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import chatReducer from '../../reducers/chat';

import IconButton from '../IconButton/IconButton';
import AppLayout from '../AppLayout/AppLayout';
import Avatar from '../Avatar/Avatar';
import List from '../List/List';
import ChatListItem from '../ChatsListItem/ChatsListItem';
import Chat from '../Chat/Chat';

import rooms from './mockRooms';

const store = createStore(
  combineReducers({ chatReducer }),
  applyMiddleware(thunkMiddleware),
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserId: 'pistch',
      rooms,
      selectedRoom: null,
    };

    this.dropRoomSelection = this.dropRoomSelection.bind(this);
    this.selectRoom = this.selectRoom.bind(this);
  }

  selectRoom(index) {
    return ((roomIndex) => {
      this.setState({
        selectedRoom: roomIndex,
      });
    }).bind(this, index);
  }

  dropRoomSelection() {
    this.setState({
      selectedRoom: null,
    });
  }

  headerTextContent() {
    if (this.state.selectedRoom !== null) {
      return this.state.rooms[this.state.selectedRoom].name;
    }

    return 'Список чатов';
  }

  headerRightContent() {
    if (this.state.selectedRoom !== null) {
      return (
        <Avatar size="s" src={this.state.rooms[this.state.selectedRoom].avatarUrl} />
      );
    }

    return (
      <IconButton
        onClick={() => {}}
        icon={{ color: '#fff', glyph: 'add' }}
      />
    );
  }

  headerLeftContent() {
    if (this.state.selectedRoom !== null) {
      return (
        <IconButton
          onClick={this.dropRoomSelection}
          icon={{ color: '#fff', glyph: 'arrow_back' }}
        />
      );
    }

    return '';
  }

  renderChat() {
    if (this.state.selectedRoom !== null) {
      return (
        <Chat
          messages={this.state.rooms[this.state.selectedRoom].messages}
          currentUserId={this.state.currentUserId}
        />
      );
    }

    return '';
  }

  renderChatsList() {
    if (this.state.selectedRoom === null) {
      const chatRooms = this.state.rooms.map((room, index) => ({
        unreadMessages: room.messages.reduce((sum, { isRead }) => (!isRead ? sum + 1 : sum), 0),
        lastActivity: room.messages[0] ? room.messages[room.messages.length - 1].time : 0,
        lastMessage: room.messages[0] ? room.messages[room.messages.length - 1].message : undefined,
        room: {
          name: room.name,
          avatarUrl: room.avatarUrl,
        },
        onClick: this.selectRoom(index),
      }));

      return (
        <List
          ListItem={ChatListItem}
          listItemProps={chatRooms}
        />
      );
    }

    return '';
  }

  render() {
    return (
      <Provider store={store}>
        <AppLayout
          headerText={this.headerTextContent()}
          headerLeft={this.headerLeftContent()}
          headerRight={this.headerRightContent()}
        >
          <React.Fragment>
            {this.renderChatsList()}
            {this.renderChat()}
          </React.Fragment>
        </AppLayout>
      </Provider>
    );
  }
}

export default App;
