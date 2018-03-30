import React from 'react';
import PropTypes from 'prop-types';
import form from './form.module.css';

const FormInput =
    ({
      value,
      onChange,
      label,
      className,
      id,
      type,
      placeholder,
      errorMessage,
    }) =>
      (
        <div className={form.loginField}>
          <label className={form.label} htmlFor={id} >
            {label}
            <input
              value={value}
              className={className}
              id={id}
              type={type}
              placeholder={placeholder}
              onChange={onChange}
            />
          </label>
          {
            errorMessage.length > 0 &&
            <p className={form.errorMessage}>{errorMessage}</p>
          }
        </div>
      );

FormInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
};

FormInput.defaultProps = {
  className: '',
  type: 'text',
  placeholder: '...',
  errorMessage: '',
};

export default FormInput;

