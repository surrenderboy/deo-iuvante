import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ViewportSpinner from '../components/ViewportSpinner/ViewportSpinner';

import { fetchCurrentUser } from '../actions/currentUser';
import { fetchUsers } from '../actions/users';

import subscribeOnMessage from '../helpers/subscribeOnMessage';
import ChatsPage from './ChatsPage';
import CreateChatPage from './CreateChatPage';
import FirstTimePage from './FirstTimePage';
import ChatPage from './ChatPage';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCurrentUser());
    this.props.fetchUsers();
  }

  render() {
    const { isFetching } = this.props;

    if (isFetching) return <ViewportSpinner />;

    return (
      <Switch>
        <Route exact path="/" component={ChatsPage} />
        <Route path="/create-chat" component={CreateChatPage} />
        <Route path="/chat/:id" component={ChatPage} />
        <Route path="/first-time" component={FirstTimePage} />
      </Switch>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { data, isFetching } = state.currentUser;

  return {
    currentUser: data,
    isFetching: !data._id || isFetching,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: filter => dispatch(fetchUsers(filter)),
  dispatch,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(subscribeOnMessage(App)));
