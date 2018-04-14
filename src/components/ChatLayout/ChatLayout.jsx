import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AppLayout from '../AppLayout/AppLayout';
import Avatar from '../Avatar/Avatar';
import IconButton from '../IconButton/IconButton';
import RoomMessages from '../../containers/RoomMessages';

function renderAvatar(chatName) {
  return <Avatar size="s" avatarName={chatName} />;
}

function renderGoBack() {
  return (
    <Link href="/" to="/" >
      <IconButton icon={{ color: '#fff', glyph: 'arrow_back' }} />
    </Link>
  );
}

function ChatLayout({ chatName, roomId, chatNameAvatar, roomIsFetching }) {
  return (
    <AppLayout
      headerText={chatName}
      headerLeft={renderGoBack()}
      headerRight={renderAvatar(chatNameAvatar)}
    >
      { !roomIsFetching && <RoomMessages roomId={roomId} /> }
    </AppLayout>
  );
}

ChatLayout.propTypes = {
  chatName: PropTypes.string,
  chatNameAvatar: PropTypes.string,
  roomId: PropTypes.string.isRequired,
};
ChatLayout.defaultProps = {
  chatName: '',
  chatNameAvatar: ' ',
  roomIsFetching: false,
};

export default ChatLayout;
