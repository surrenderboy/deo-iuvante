import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconButton.module.css';

const IconButton = (props) => {
  const {
    component,
    disabled,
    children,
    ...validProps
  } = props;
  const CustomComponent = props.href && props.href.length ? 'a' : component;
  return (
    <CustomComponent
      role="button"
      {...validProps}
      className={`${styles.icon_button} ${props.className || ''} ${disabled ? styles.disabled : ''}`}
    >
      {children}
    </CustomComponent>
  );
};

IconButton.defaultProps = {
  onClick: () => undefined,
  component: 'button',
  href: '',
  className: '',
  disabled: false,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  /** Custom component for button */
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  href: PropTypes.string,
  /** Can be both <Icon /> component or image */
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default IconButton;
