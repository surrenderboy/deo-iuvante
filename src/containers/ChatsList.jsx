import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import List from '../components/List/List';
import ChatsListItem from '../components/ChatsListItem/ChatsListItem';
import { fetchRoomsIfNeeded } from '../actions/rooms';

class ChatsList extends React.Component {
  static propTypes = {
    fetchRoomsIfNeeded: PropTypes.func.isRequired,
    chats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      lastMessage: PropTypes.string,
      lastActivity: PropTypes.string,
    })).isRequired,
    isFetching: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { fetchRoomsIfNeeded } = this.props;

    fetchRoomsIfNeeded();
  }

  render() {
    const { chats, isFetching } = this.props;
    return (
      <List isFetching={isFetching} emptyMessage="You have no chats yet">
        { chats.map(chat => <ChatsListItem key={chat.id} {...chat} />) }
      </List>
    );
  }
}

const mapStateToProps = ({ rooms, currentUser }) => ({
  chats:
  rooms.allIds
    .map((id) => {
      const room = rooms.byId[id];
      const lastMessage = (room.last_message && room.last_message.body);

      return {
        id,
        name:
          room.users
            .filter(user => user.id !== currentUser.id)
            .map(user => user.name || user.username)
            .join(', '),
        lastMessage,
        lastActivity: room.updated_at,
        count: room.unread_count[currentUser.id],
      };
    })
    .sort((a, b) => new Date(b.lastActivity) - new Date(a.lastActivity)),
  isFetching: (typeof rooms.cursor === 'undefined') || rooms.isFetching,
});

export default connect(mapStateToProps, { fetchRoomsIfNeeded })(ChatsList);
