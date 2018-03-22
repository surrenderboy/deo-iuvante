import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.css';

function Header({ children, left, right }) {
  return (
    <div className={styles.header}>
      <div className={styles.left_slot}>{left}</div>
      <div className={styles.text}>
        {children}
      </div>
      <div className={styles.right_slot}>{right}</div>
    </div>
  );
}

Header.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  children: PropTypes.string,
};

Header.defaultProps = {
  left: '',
  right: '',
  children: '',
};

export default Header;
