import React from 'react';

const FormInputLogin = ({ onChangeValue }) =>
  (<div className="login-field">
    <label className="label" htmlFor="login-input" >Login</label>
    <input className="login-input" id="login-input" type="text" placeholder="Login..." onChange={onChangeValue} />
  </div>);

export default FormInputLogin;

