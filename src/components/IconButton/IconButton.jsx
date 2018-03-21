import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';

const IconButton = (props) => {
  const {
    component,
    disabled,
    children,
    color,
    ...validProps
  } = props;
  const CustomComponent = props.href ? 'a' : component;
  return (
    <CustomComponent
      role="button"
      {...validProps}
      className={`icon-button ${props.className || ''} ${disabled ? 'icon-button_disabled' : ''}`}
    >
      {
                    typeof children === 'string'
                    ?
                      <i
                        className="material-icons icon-button__icon"
                        style={{ color: disabled ? '#aaa' : color }}
                      >
                        {children}
                      </i>
                    : <div className="icon-button__icon" >{children}</div>
                }
    </CustomComponent>
  );
};

IconButton.defaultProps = {
  disabled: false,
  component: 'button',
};

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  /** Custom component for button */
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  className: PropTypes.string.isRequired,
  /** Glyph color */
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default IconButton;
