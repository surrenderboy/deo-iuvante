import React from 'react';
import PropTypes from 'prop-types';
import './Icon.module.css';

const Icon = (props) => {
  const {
    glyph,
    color,
    ...validProps
  } = props;
  return (
    <i
      {...validProps}
      className="material-icons"
      style={{ color, ...validProps.style }}
    >
      {glyph}
    </i>
  );
};

Icon.defaultProps = {
  color: '#000',
};

Icon.propTypes = {
  /** Icon glyph */
  glyph: PropTypes.string.isRequired,
  /**
   * Icon color. When Icon is inside the IconButton component, it color changes to #aaa when button is disabled
  */
  color: PropTypes.string,
};

export default Icon;
