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
        <IconButton onClick={handleAttachment} color="#a9d18b" className={styles.icon}>
          attach_file
        </IconButton>
        <MessageInput sendMessage={sendMessage} className={styles.messageInput} />
        <IconButton onClick={handleVoice} color="#a9d18b" className={styles.icon}>
          mic_none
        </IconButton>
      </div>
    );
  }
}

ChatFooter.propTypes = {
  handleAttachment: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  handleVoice: PropTypes.func.isRequired,
  className: PropTypes.string,
};
ChatFooter.defaultProps = {
  className: '',
};

export default ChatFooter;
