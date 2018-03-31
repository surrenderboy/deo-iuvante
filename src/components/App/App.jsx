import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import chatReducer from '../../reducers/chat';

import Chat from '../Chat/Chat';
import CreateChat from '../CreateChatLayout/CreateChatLayout';
import ChatsList from '../ChatsListLayout/ChatsListLayout';
import ChatLayout from '../ChatLayout/ChatLayout';

const store = createStore(
  combineReducers({ chatReducer }),
  applyMiddleware(thunkMiddleware),
);

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
      <Provider store={store}>
        <Router>
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
        </Router>
      </Provider>
    );
  }
}

export default App;
