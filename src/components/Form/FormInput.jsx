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
      validationState,
      errorMessage,
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
          {!validationState &&
            <p className={form.errorMessage}>{errorMessage}</p>
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
  validationState: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

FormInput.defaultProps = {
  className: '',
  type: 'text',
  placeholder: '...',
};

export default FormInput;

