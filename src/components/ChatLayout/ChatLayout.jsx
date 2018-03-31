import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AppLayout from '../AppLayout/AppLayout';
import Avatar from '../Avatar/Avatar';
import IconButton from '../IconButton/IconButton';

function renderAvatar(avatarUrl) {
  return <Avatar size="s" src={avatarUrl} />;
}

function renderGoBack() {
  return (
    <Link href="/" to="/" >
      <IconButton icon={{ color: '#fff', glyph: 'arrow_back' }} />
    </Link>
  );
}

function ChatLayout({ children, chatName, avatarUrl }) {
  return (
    <AppLayout
      headerText={chatName}
      headerLeft={renderGoBack()}
      headerRight={renderAvatar(avatarUrl)}
    >
      {children}
    </AppLayout>
  );
}

ChatLayout.propTypes = {
  children: PropTypes.element.isRequired,
  chatName: PropTypes.string,
  avatarUrl: PropTypes.string,
};
ChatLayout.defaultProps = {
  chatName: '',
  avatarUrl: '',
};

export default ChatLayout;
