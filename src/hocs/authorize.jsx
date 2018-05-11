import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const SIGNED_IN_USERS_ONLY = 'SIGNED_IN_USERS_ONLY';
export const NEW_USERS_ONLY = 'NEW_USERS_ONLY';

const mapStateToProps = ({ currentUser }) => ({
  isSignedIn: !!currentUser.id,
});

const authorize = rule => (
  (WrappedComponent) => {
    const Authorize = ({ isSignedIn, ...props }) => {
      const component = <WrappedComponent {...props} />;

      switch (rule) {
        case SIGNED_IN_USERS_ONLY: return !isSignedIn ? <Redirect to="/sign-in" /> : component;
        case NEW_USERS_ONLY: return isSignedIn ? <Redirect to="/" /> : component;
        default: return component;
      }
    };
    Authorize.displayName = `Authorize(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    Authorize.propTypes = {
      isSignedIn: PropTypes.bool.isRequired,
    };

    return connect(mapStateToProps)(Authorize);
  }
);

export default authorize;
