import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    this.getRooms()
      .then(this.getRoomsLastMessage.bind(this));
  }

  async getRooms() {
    const roomsUnordered = await api.getRooms();

    const rooms = {},
      roomsIds = [];

    roomsUnordered.forEach((room) => {
      roomsIds.push(room._id);
      rooms[room._id] = room;
    });

    this.setState({
      rooms,
      roomsIds,
    });

    return Promise.resolve(roomsIds);
  }

  getRoomsLastMessage(roomsIds) {
    roomsIds.forEach((roomId) => {
      api.getMessages({ roomId, limit: 1 })
        .then((messages) => {
          this.setState({
            rooms: {
              ...this.state.rooms,
              [roomId]: {
                ...this.state.rooms[roomId],
                messages,
              },
            },
          });
        });
    });
  }

  renderChatsListItems() {
    if (!this.state.roomsIds) return null;
    return this.state.roomsIds
      .sort((rid1, rid2) => {
        const m1 = this.state.rooms[rid1].messages,
          m2 = this.state.rooms[rid2].messages;
        if (!m1[0] || !m2[0]) return 0;
        return m1[m1.length - 1].time - m2[m2.length - 1].time;
      })
      .map(roomId => (
        <ChatsListItem room={this.state.rooms[roomId]} key={roomId} />
      ));
  }

  render() {
    return (
      <AppLayout
        headerText="Your chats"
        headerRight={(
          <IconButton
            onClick={() => {}}
            icon={{ glyph: 'add', color: '#fff' }}
            component={Link}
            to="/create-chat"
          />
        )}
      >
        <List>
          {this.renderChatsListItems()}
        </List>
      </AppLayout>
    );
  }
}

export default ChatsList;
