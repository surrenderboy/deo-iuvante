import React from 'react';
import PropTypes from 'prop-types';

import List from '../List/List';
import UsersListItem from '../UsersListItem/UsersListItem';

function UsersList({ users, selectedUsers, switchUserSelection }) {
  return (
    <List>
      {users.map(user => (
        <UsersListItem
          {...user}
          key={user.id}
          onClick={() => switchUserSelection.call(null, user.id)}
          selected={selectedUsers.indexOf(user.id) !== -1}
        />
      ))}
    </List>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
  })).isRequired,
  switchUserSelection: PropTypes.func.isRequired,
  selectedUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UsersList;
