import React from 'react';
import PropTypes from 'prop-types';
import form from './form.module.css';

const FormInput =
    ({
      onChangeValue,
      label,
      className,
      id,
      type,
      placeholder,
      validationStateForEmpty,
      errorMessageForEmpty,
      passwordsMatchValidationState,
      errorMessageDidntMatchPasswords,
    }) =>
      (
        <div className={form.loginField}>
          <label className={form.label} htmlFor={id} >
            {label}
            <input
              className={className}
              id={id}
              type={type}
              placeholder={placeholder}
              onChange={onChangeValue}
            />
          </label>
          {
            !validationStateForEmpty &&
            <p className={form.errorMessage}>{errorMessageForEmpty}</p>
          }
          {
            !passwordsMatchValidationState &&
            <p className={form.errorMessage}>{errorMessageDidntMatchPasswords}</p>
          }
        </div>
      );

FormInput.propTypes = {
  onChangeValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  validationStateForEmpty: PropTypes.bool.isRequired,
  errorMessageForEmpty: PropTypes.string.isRequired,
  passwordsMatchValidationState: PropTypes.bool,
  errorMessageDidntMatchPasswords: PropTypes.string,
};

FormInput.defaultProps = {
  passwordsMatchValidationState: true,
  errorMessageDidntMatchPasswords: '',
  className: '',
  type: 'text',
  placeholder: '...',
};

export default FormInput;

