import React, { Component } from 'react';

import api from '../../api';

import List from '../List/List';
import UsersListItem from '../UsersListItem/UsersListItem';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentWillMount() {
    this.getUsers();
  }

  async getUsers() {
    const usersData = await api.getUsers();
    let users = usersData.items;

    this.setState({
      users,
    });
  }

  render() {
    return (
      <List >
        {this.state.users.map(user => (
          <UsersListItem {...user} />
        ))}
      </List>
    );
  }
}

export default UsersList;
