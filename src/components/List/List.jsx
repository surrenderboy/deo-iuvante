import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.css';
import ViewportSpinner from '../ViewportSpinner/ViewportSpinner';

const renderChildren = (children, isFetching, emptyMessage) => {
  if (isFetching) return <ViewportSpinner size="l" />;
  if (children.length === 0) return <div className={styles.empty}>{ emptyMessage }</div>;

  return children;
};

const List = ({
  className, children, isFetching, emptyMessage,
}) => (
  <div className={`${styles.list} ${className}`}>
    { renderChildren(children, isFetching, emptyMessage) }
  </div>
);

List.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
  isFetching: PropTypes.bool,
  emptyMessage: PropTypes.string,
};

List.defaultProps = {
  className: '',
  isFetching: false,
  emptyMessage: 'No items',
};

export default List;
