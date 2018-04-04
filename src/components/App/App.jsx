import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Chat from '../Chat/Chat';
import CreateChat from '../CreateChatLayout/CreateChatLayout';
import ChatsList from '../ChatsListLayout/ChatsListLayout';
import ChatLayout from '../ChatLayout/ChatLayout';

class App extends React.Component {
  renderChat(id) {
    return (
      <Chat
        messages={this.state.rooms[id].messages}
        currentUserId={this.state.currentUserId}
      />
    );
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/create-chat"
          render={() => (
            <CreateChat />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <ChatsList />
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
    );
  }
}

export default App;
