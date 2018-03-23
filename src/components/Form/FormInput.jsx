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
    }) =>
      (
        <div className={form.login_field}>
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
        </div>
      );

FormInput.propTypes = {
  onChangeValue: PropTypes.func.isRequired,
  label: PropTypes.func.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

FormInput.defaultProps = {
  className: '',
  type: 'text',
  placeholder: '...',
};

export default FormInput;

