import React, { Component } from 'react';

import api from '../../api';

import List from '../List/List';
import ChatsListItem from '../ChatsListItem/ChatsListItem';
import IconButton from '../IconButton/IconButton';
import AppLayout from '../AppLayout/AppLayout';

class ChatsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
    };
  }

  componentWillMount() {
    this.getRooms();
  }

  async getRooms() {
    const roomsData = await api.getRooms();
    let rooms = roomsData.items;

    rooms = rooms.map(room => ({
      ...room,
      unreadMessages: 3,
      lastActivity: Date.now() - 3000000,
      lastMessage: 'О боже мой',
    }));

    this.setState({
      rooms,
    });
  }

  render() {
    return (
      <AppLayout
        headerText="Чаты"
        headerRight={(
          <IconButton
            onClick={() => {}}
            icon={{ glyph: 'add', color: '#fff' }}
          />
        )}
      >
        <List>
          {this.state.rooms.map(room => (
            <ChatsListItem room={room} {...room} />
          ))}
        </List>
      </AppLayout>
    );
  }
}

export default ChatsList;
