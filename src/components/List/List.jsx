import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.css';

function List({ className, children }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

List.defaultProps = {
  className: styles.list,
};

export default List;
