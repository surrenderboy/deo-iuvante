import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton/IconButton';
import MessageInput from '../MessageInput/MessageInput';

import styles from './ChatFooter.module.css';

class ChatFooter extends React.PureComponent {
  render() {
    const {
      handleAttachment, sendMessage, handleVoice, className,
    } = this.props;

    return (
      <div className={`${styles.footer} ${className}`}>
        <IconButton
          onClick={handleAttachment}
          icon={{
            color: '#a9d18b',
            glyph: 'attach_file',
          }}
        />
        <MessageInput
          sendMessage={sendMessage}
          className={styles.messageInput}
          roomId={this.props.roomId}
        />
        <IconButton
          onClick={handleVoice}
          icon={{
            color: '#a9d18b',
            glyph: 'mic_none',
          }}
        />
      </div>
    );
  }
}

ChatFooter.propTypes = {
  handleAttachment: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  handleVoice: PropTypes.func.isRequired,
  className: PropTypes.string,
  roomId: PropTypes.string.isRequired,
};
ChatFooter.defaultProps = {
  className: '',
};

export default ChatFooter;
