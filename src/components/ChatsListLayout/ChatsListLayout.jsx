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
    this.getRooms();
  }

  async getRooms() {
    const rooms = await api.getRooms();

    this.setState({
      rooms: rooms.map(room => ({
        ...room,
        // stubs next 3 lines
        unreadMessages: 3,
        lastActivity: Date.now() - 3000000,
        lastMessage: 'Мессадж богов, услышьте и внемлите!',
      })),
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
            component={Link}
            to="/create-chat"
          />
        )}
      >
        <List>
          {this.state.rooms.map(room => (
            <ChatsListItem room={room} {...room} key={room._id} />
          ))}
        </List>
      </AppLayout>
    );
  }
}

export default ChatsList;
