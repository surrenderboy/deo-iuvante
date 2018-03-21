import React from 'react';
import PropTypes from 'prop-types';

const ButtonSignUp = ({ onSubmit }) =>
  <button className="button-sign-up" onSubmit={onSubmit}>Sign up</button>;

ButtonSignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ButtonSignUp;
