import React from 'react';
import PropTypes from 'prop-types';
import AppLayout from '../AppLayout/AppLayout';
import IconButton from '../IconButton/IconButton';

function renderIconButton() {
  return (
    <IconButton
      onClick={() => {}}
      icon={{ color: '#fff', glyph: 'add' }}
    />
  );
}

function ChatListLayout({ children }) {
  return (
    <AppLayout headerText="Chat List" headerRight={renderIconButton()}>
      {children}
    </AppLayout>
  );
}

ChatListLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ChatListLayout;
