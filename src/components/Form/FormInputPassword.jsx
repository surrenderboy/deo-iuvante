import React from 'react';

const FormInputPassword = ({onChangeValue}) =>
    <div className="password-field">
        <label className="label" htmlFor="password-input">Password</label>
        <input className="password-input" id="password-input" type="password" placeholder="Password..." onChange={onChangeValue}/>
    </div>;

export default FormInputPassword;