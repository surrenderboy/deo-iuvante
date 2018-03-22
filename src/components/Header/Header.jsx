import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.css';

function Header({
  children, left, right, className,
}) {
  return (
    <div className={`${styles.header} ${className}`}>
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
  className: PropTypes.string,
};

Header.defaultProps = {
  left: '',
  right: '',
  children: '',
  className: '',
};

export default Header;
