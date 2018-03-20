import React, { Component } from 'react';
import './List.css';

const List = props => (
    <div {...props} className='list'>{props.children}</div>
);
 
export default List;