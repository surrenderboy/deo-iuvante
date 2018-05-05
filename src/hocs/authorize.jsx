import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const KNOWN_USERS_ONLY = 'KNOWN_USERS_ONLY';
export const NEW_USERS_ONLY = 'NEW_USERS_ONLY';

const userIsEmpty = ({ name, email, phone }) => (
  [name, email, phone].every(field => field.length === 0)
);

const mapStateToProps = ({ currentUser }) => ({
  user: currentUser.data,
});

const authorize = rule => (
  (WrappedComponent) => {
    const Authorize = ({ user, ...props }) => {
      const component = <WrappedComponent {...props} />;

      switch (rule) {
        case KNOWN_USERS_ONLY: return userIsEmpty(user) ? <Redirect to="/first-time" /> : component;
        case NEW_USERS_ONLY: return !userIsEmpty(user) ? <Redirect to="/" /> : component;
        default: return component;
      }
    };
    Authorize.displayName = `Authorize(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    Authorize.propTypes = {
      user: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
      }).isRequired,
    };

    return connect(mapStateToProps)(Authorize);
  }
);

export default authorize;
