import React, { Component } from 'react';
import './ListItem.css';

const ListItem = props => (
    <div {...props} className="list__item">{props.children}</div>
);
 
export default ListItem;