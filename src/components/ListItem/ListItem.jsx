import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = props => (
  <div {...props} className="list__item">{props.children}</div>
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListItem;
