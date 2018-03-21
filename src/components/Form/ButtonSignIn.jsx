import React from 'react';
import PropTypes from 'prop-types';

const ButtonSignIn = ({ onSubmit }) =>
  <button className="button-sign-in" onSubmit={onSubmit}>Sign in</button>;

ButtonSignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ButtonSignIn;
