import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import List from '../List/List';
import ChatListItem from '../ChatsListItem/ChatsListItem';
import Chat from '../Chat/Chat';

import rooms from './mockRooms';
import ChatListLayout from '../ChatListLayout/ChatListLayout';
import ChatLayout from '../ChatLayout/ChatLayout';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserId: 'pistch',
      rooms,
    };
  }

  renderChat(id) {
    return (
      <Chat
        messages={this.state.rooms[id].messages}
        currentUserId={this.state.currentUserId}
      />
    );
  }

  renderChatsList() {
    const chatRooms = this.state.rooms.map((room, index) => ({
      unreadMessages: room.messages.reduce((sum, { isRead }) => (!isRead ? sum + 1 : sum), 0),
      lastActivity: room.messages[0] ? room.messages[room.messages.length - 1].time : 0,
      lastMessage: room.messages[0] ? room.messages[room.messages.length - 1].message : undefined,
      room: {
        id: index,
        name: room.name,
        avatarUrl: room.avatarUrl,
      },
    }));

    return (
      <List>
        {chatRooms.map(chatRoom => <ChatListItem key={chatRoom.room.id} {...chatRoom} />)}
      </List>
    );
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <ChatListLayout>
                {this.renderChatsList()}
              </ChatListLayout>
            )}
          />
          <Route
            path="/chat/:id"
            render={({ match }) => {
              const { id } = match.params;

              return (
                <ChatLayout
                  chatName={this.state.rooms[id].name}
                  avatarUrl={this.state.rooms[id].avatarUrl}
                >
                  {this.renderChat(id)}
                </ChatLayout>
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
