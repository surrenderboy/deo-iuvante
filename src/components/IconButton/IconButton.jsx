import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import styles from './IconButton.module.css';

const IconButton = (props) => {
  const {
    component,
    disabled,
    icon,
    text,
    ...validProps
  } = props;
  const CustomComponent = props.href && props.href.length ? 'a' : component;
  return (
    <CustomComponent
      role="button"
      {...validProps}
      className={`${styles.icon_button} ${props.className || ''} ${disabled ? styles.disabled : ''}`}
    >
      <div className={styles.label} style={{ color: text.color }}>
        {icon.src
          ? <img src={icon.src} alt={icon.alt || ''} />
          : icon.glyph &&
            <Icon
              style={{ marginRight: text.caption && 8 }}
              color={disabled ? '#aaa' : icon.color}
              glyph={icon.glyph}
            />
        }
        {text.caption &&
          text.caption
        }
      </div>
    </CustomComponent>
  );
};

IconButton.defaultProps = {
  icon: {
    color: '#000',
  },
  text: {
    color: '#000',
  },
  onClick: () => undefined,
  component: 'button',
  href: '',
  className: '',
  disabled: false,
};

IconButton.propTypes = {
  /** Icon glyph describer */
  icon: PropTypes.shape({
    color: PropTypes.string,
    glyph: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  /** Icon caption describer */
  text: PropTypes.shape({
    caption: PropTypes.string,
    color: PropTypes.string,
  }),
  onClick: PropTypes.func,
  /** Custom component for button */
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  href: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default IconButton;
