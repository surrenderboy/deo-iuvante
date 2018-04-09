import React from 'react';

import styles from './Bouncer.module.css';
import bc from '../../assets/bc.svg';

function Bouncer() {
  return (
    <div className={styles.container}>
      <img src={bc} className={styles.Circle1} alt="" />
      <img src={bc} className={styles.Circle2} alt="" />
      <img src={bc} className={styles.Circle3} alt="" />
      <img src={bc} className={styles.Circle4} alt="" />
    </div>
  );
}

export default Bouncer;
