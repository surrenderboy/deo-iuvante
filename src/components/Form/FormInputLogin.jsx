import React from 'react';
import PropTypes from 'prop-types';

const FormInputLogin = ({ onChangeValue }) =>
  (
    <div className="login-field">
      <label className="label" htmlFor="login-input" >
        Login
        <input className="login-input" id="login-input" type="text" placeholder="Login..." onChange={onChangeValue} />
      </label>
    </div>
  );

FormInputLogin.propTypes = {
  onChangeValue: PropTypes.func.isRequired,
};

export default FormInputLogin;

