import React from 'react';

import styles from './FirstTime.module.css';
import UpdateCurrentUserForm from '../../containers/UpdateCurrentUserForm';

function FirstTime() {
  return (
    <div className={styles.firstTime}>
      <h1 className={styles.title}>First time to<br />Deo Iuvante?</h1>
      <h2 className={styles.title}>Tell us something about yourself!</h2>

      <UpdateCurrentUserForm />
    </div>
  );
}

export default FirstTime;
