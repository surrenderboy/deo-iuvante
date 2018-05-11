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

const renderFooter = roomId => roomId.length > 0 && <SendMessageForm roomId={roomId} />;

const ChatLayout = ({ roomId, name }) => (
  <AppLayout
    headerText={(name.length > 0 && name) || 'Loading...'}
    headerLeft={renderGoBack()}
    headerRight={renderAvatar(name)}
    footer={renderFooter(roomId)}
  >
    { roomId.length > 0 && <MessagesList roomId={roomId} /> }
  </AppLayout>
);
ChatLayout.propTypes = {
  roomId: PropTypes.string,
  name: PropTypes.string,
};
ChatLayout.defaultProps = {
  roomId: '',
  name: '',
};

export default ChatLayout;
