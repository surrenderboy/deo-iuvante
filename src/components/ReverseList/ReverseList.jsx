import React from 'react';
import PropTypes from 'prop-types';

import styles from './ReverseList.module.css';
import ViewportSpinner from '../ViewportSpinner/ViewportSpinner';

class ReverseList extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    isFetching: PropTypes.bool,
    emptyMessage: PropTypes.string,
  };
  static defaultProps = {
    isFetching: false,
    emptyMessage: 'No items',
  };

  constructor(props) {
    super(props);

    this.scrollBottom = this.scrollBottom.bind(this);
    this.bindRef = this.bindRef.bind(this);
  }

  componentDidMount() {
    this.scrollBottom();
  }

  componentDidUpdate() {
    this.scrollBottom();
  }

  scrollBottom() {
    if (this.container) this.container.scrollTop = this.container.scrollHeight;
  }

  bindRef(container) {
    this.container = container;
  }

  renderChildren() {
    const { children, isFetching, emptyMessage } = this.props;

    if (isFetching) return <ViewportSpinner size="l" />;
    if (children.length === 0) return <div className={styles.empty}>{ emptyMessage }</div>;

    return children;
  }

  render() {
    return (
      <div ref={this.bindRef} className={styles.reverseList}>
        { this.renderChildren() }
      </div>
    );
  }
}

export default ReverseList;
