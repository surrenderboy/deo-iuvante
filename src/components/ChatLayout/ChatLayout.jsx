import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AppLayout from '../AppLayout/AppLayout';
import Avatar from '../Avatar/Avatar';
import IconButton from '../IconButton/IconButton';
import SendMessageForm from '../../containers/SendMessageForm';
import MessagesList from '../../containers/MessagesList';

const renderAvatar = name => <Avatar size="s" avatarName={name} />;

const renderGoBack = () => (
  <Link href="/" to="/">
    <IconButton
      icon={{
        color: '#fff',
        glyph: 'arrow_back',
      }}
    />
  </Link>
);

const renderFooter = roomId => roomId && <SendMessageForm roomId={roomId} />;

const ChatLayout = ({ roomId, name }) => (
  <AppLayout
    headerText={name || 'Loading...'}
    headerLeft={renderGoBack()}
    headerRight={renderAvatar(name)}
    footer={renderFooter(roomId)}
  >
    { roomId && <MessagesList roomId={roomId} /> }
  </AppLayout>
);
ChatLayout.propTypes = {
  name: PropTypes.string.isRequired,
  roomId: PropTypes.string.isRequired,
};

export default ChatLayout;
