import React from 'react';
import PropTypes from 'prop-types';

const FormInputPassword = ({ onChangeValue }) =>
  (
    <div className="password-field">
      <label className="label" htmlFor="password-input">
      Password
        <input
          className="password-input"
          id="password-input"
          type="password"
          placeholder="Password..."
          onChange={onChangeValue}
        />
      </label>
    </div>
  );

FormInputPassword.propTypes = {
  onChangeValue: PropTypes.func.isRequired,
};

export default FormInputPassword;
