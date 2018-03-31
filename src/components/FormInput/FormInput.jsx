import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormInput.module.css';

class FormInput extends React.PureComponent {
  render() {
    const {
      value,
      onChange,
      label,
      className,
      id,
      type,
      placeholder,
      errorMessage,
    } = this.props;

    return (
      <div className={styles.loginField}>
        <label className={styles.label} htmlFor={id} >
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
          <p className={styles.errorMessage}>{errorMessage}</p>
        }
      </div>
    );
  }
}

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

