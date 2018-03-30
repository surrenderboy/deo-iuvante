import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.css';

class List extends Component {
  renderListItems() {
    const { ListItem } = this.props;

    return (this.props.listItemProps.map(item => (
      <ListItem {...item} key={Math.random().toString(32).slice(2)} />
    )));
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.renderListItems()}
      </div>
    );
  }
}

List.propTypes = {
  className: PropTypes.string,
  ListItem: PropTypes.func.isRequired,
  listItemProps: PropTypes.arrayOf(PropTypes.object).isRequired,
};

List.defaultProps = {
  className: styles.list,
};

export default List;
