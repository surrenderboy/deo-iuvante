import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AppLayout from '../AppLayout/AppLayout';
import Avatar from '../Avatar/Avatar';
import IconButton from '../IconButton/IconButton';
import ChatFields from '../../containers/ChatFields';

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

function ChatLayout({ chatName, avatarUrl, roomId }) {
  return (
    <AppLayout
      headerText={chatName}
      headerLeft={renderGoBack()}
      headerRight={renderAvatar(avatarUrl)}
    >
      <ChatFields roomId={roomId} />
    </AppLayout>
  );
}

ChatLayout.propTypes = {
  chatName: PropTypes.string,
  avatarUrl: PropTypes.string,
  roomId: PropTypes.string.isRequired,
};
ChatLayout.defaultProps = {
  chatName: '',
  avatarUrl: '',
};

export default ChatLayout;
