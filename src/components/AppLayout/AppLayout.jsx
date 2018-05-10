import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';

import styles from './AppLayout.module.css';

const AppLayout = ({
  headerText,
  children,
  headerLeft,
  headerRight,
  footer,
}) => (
  <div className={styles.app_layout}>
    <Header left={headerLeft} right={headerRight} className={styles.header}>{headerText}</Header>
    <div className={styles.main_area}>
      {children}
    </div>
    <div className={styles.footer}>
      {footer}
    </div>
  </div>
);
AppLayout.propTypes = {
  headerText: PropTypes.node.isRequired,
  children: PropTypes.element.isRequired,
  headerLeft: PropTypes.node,
  headerRight: PropTypes.node,
  footer: PropTypes.node,
};
AppLayout.defaultProps = {
  headerLeft: null,
  headerRight: null,
  footer: null,
};

export default AppLayout;
