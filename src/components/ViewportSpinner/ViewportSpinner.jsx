import React from 'react';

import styles from './ViewportSpinner.module.css';
import Spinner from '../Spinner/Spinner';

const ViewportSpinner = () => <Spinner size="xl" className={styles.viewportSpinner} />;

export default ViewportSpinner;
