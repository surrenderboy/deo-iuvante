import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { fetchCurrentUser } from '../actions/users';
import subscribeOnMessage from '../helpers/subscribeOnMessage';

import ViewportSpinner from '../components/ViewportSpinner/ViewportSpinner';
import ChatsPage from './ChatsPage';
import CreateChatPage from './CreateChatPage';
import ChatPage from './ChatPage';
import LoginPage from './LoginPage';

const redirectToRoot = () => <Redirect to="/" />;

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    if (this.props.isFetching) return <ViewportSpinner />;

    return (
      <Switch>
        <Route exact path="/" component={ChatsPage} />
        <Route path="/create-chat" component={CreateChatPage} />
        <Route path="/chat/:id" component={ChatPage} />
        <Route path="/sign-in" component={LoginPage} />
        <Route path="/sign-up" component={LoginPage} />
        <Route render={redirectToRoot} />
      </Switch>
    );
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  fetchCurrentUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ currentUser }) => {
  const { id, isFetching } = currentUser;

  return {
    isFetching: !id || isFetching,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: () => dispatch(fetchCurrentUser()),
  dispatch,
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  subscribeOnMessage,
)(App);
