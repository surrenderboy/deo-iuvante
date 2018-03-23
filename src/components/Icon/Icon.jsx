import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.module.css';

const Icon = (props) => {
  const {
    glyph,
    color,
    src,
    alt,
    className,
    ...validProps
  } = props;
  return src && src.length
    ?
      <img {...validProps} className={`${styles.icon} ${className}`} src={src} alt={alt} />
    :
      <i
        {...validProps}
        className={`material-icons ${styles.icon} ${className}`}
        style={{ color, ...validProps.style }}
      >
        {glyph}
      </i>;
};

Icon.defaultProps = {
  color: '#000',
  src: '',
  glyph: '',
  alt: '',
  className: '',
};

Icon.propTypes = {
  /** Icon glyph */
  glyph: PropTypes.string,
  /** Icon image. If glyph was provided, image will not render */
  src: PropTypes.string,
  alt: PropTypes.string,
  /**
   * Icon color. When Icon is inside the IconButton component, it color changes to #aaa when button is disabled
  */
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
