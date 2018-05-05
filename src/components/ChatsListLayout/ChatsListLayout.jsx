import React from 'react';
import { Link } from 'react-router-dom';

import AppLayout from '../AppLayout/AppLayout';
import IconButton from '../IconButton/IconButton';
import ChatsList from '../../containers/ChatsList';

const ChatsListLayout = () => (
  <AppLayout
    headerText="Your chats"
    headerRight={
      <IconButton
        onClick={() => {}}
        icon={{ glyph: 'add', color: '#fff' }}
        component={Link}
        to="/create-chat"
      />
    }
  >
    <ChatsList />
  </AppLayout>
);

export default ChatsListLayout;
