import React from 'react';
import PropTypes from 'prop-types';

const FormButton = ({ onSubmit, className, text }) =>
  <button className={className} onClick={onSubmit}>{text}</button>;

FormButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FormButton;
