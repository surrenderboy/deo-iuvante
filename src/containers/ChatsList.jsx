import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import List from '../components/List/List';
import ChatsListItem from '../components/ChatsListItem/ChatsListItem';
import { fetchRooms } from '../actions/rooms';

class ChatsList extends React.Component {
  static propTypes = {
    fetchRooms: PropTypes.func.isRequired,
    chats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      lastMessage: PropTypes.string,
      lastActivity: PropTypes.string,
    })).isRequired,
  };

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { chats, fetchRooms } = this.props;

    if (chats.length === 0) fetchRooms();
  }

  render() {
    return (
      <List>
        { this.props.chats.map(chat => <ChatsListItem key={chat.id} {...chat} />) }
      </List>
    );
  }
}

const mapStateToProps = ({ rooms, messages: allMessages }) => ({
  chats: rooms.allIds.map((id) => {
    const room = rooms.byId[id];
    const { messages } = room;
    const lastMessage = allMessages.byId[messages[messages.length - 1]];

    return {
      id,
      name: room.name,
      lastMessage: lastMessage && lastMessage.text,
      lastActivity: lastMessage && lastMessage.time,
    };
  }),
});

export default connect(mapStateToProps, { fetchRooms })(ChatsList);
