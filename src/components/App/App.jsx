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

const App = () =>
  (
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
            path="/chat/:roomId"
            render={({ match }) => {
                const { roomId } = match.params;

                return (
                  <ChatLayout>
                    <Chat roomId={roomId} />
                  </ChatLayout>
                );
              }}
          />
        </Switch>
      </Router>
    </Provider>
  );

export default App;
