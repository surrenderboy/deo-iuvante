import React from 'react';
import PropTypes from 'prop-types';

import styles from './Spinner.module.css';
import bc from '../../assets/bc.svg';

function Spinner({ size, className }) {
  return (
    <div className={`${styles[size]} ${className}`}>
      <div className={styles.Overlay}>
        <div className={styles.CircleContainer1}>
          <img src={bc} className={styles.Circle1} alt="" />
          <img src={bc} className={styles.Circle2} alt="" />
          <img src={bc} className={styles.Circle3} alt="" />
        </div>
        <div className={styles.CircleContainer2}>
          <img src={bc} className={styles.Circle4} alt="" />
          <img src={bc} className={styles.Circle5} alt="" />
        </div>
        <img src={bc} className={styles.Circle6} alt="" />
        <img src={bc} className={styles.Circle7} alt="" />
      </div>
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
};

Spinner.defaultProps = {
  size: 's',
  className: '',
};

export default Spinner;
