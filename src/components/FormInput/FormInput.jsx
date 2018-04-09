import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormInput.module.css';

function FormInput({ label, errorMessage, ...inputProps }) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={inputProps.id}>
        {label}
        <input className={styles.input} {...inputProps} />
      </label>
      {
        errorMessage.length > 0 &&
        <p className={styles.errorMessage}>{errorMessage}</p>
      }
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

FormInput.defaultProps = {
  errorMessage: '',
};

export default FormInput;

