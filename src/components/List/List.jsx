import React from 'react';
import PropTypes from 'prop-types';
import './List.css';

const List = props => (
  <div {...props} className="list">{props.children}</div>
);

List.propTypes = {
  children: PropTypes.node.isRequired,
};

export default List;
