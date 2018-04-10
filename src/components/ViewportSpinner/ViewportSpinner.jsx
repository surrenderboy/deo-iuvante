import React from 'react';
import PropTypes from 'prop-types';

import styles from './ViewportSpinner.module.css';
import Spinner from '../Spinner/Spinner';

const ViewportSpinner = ({ size }) => <Spinner size={size} className={styles.viewportSpinner} />;

export default ViewportSpinner;

ViewportSpinner.defaultProps = {
  size: 'xl',
};

ViewportSpinner.propTypes = {
  size: PropTypes.string,
};
