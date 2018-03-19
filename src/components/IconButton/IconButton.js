import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './IconButton.css'

class IconButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            component,
            disabled,
            children,
            color,
            ...validProps
        } = this.props;
        const CustomComponent = this.props.href ? 'a' : component; 
        return (
            <CustomComponent             
                role='button'
                {...validProps}
                className={`icon-button ${this.props.className || ''} ${disabled ? 'icon-button_disabled' : ''}`}
            >
                {
                    typeof children === 'string'
                    ? <i 
                        className='material-icons icon-button__icon' 
                        style={{color: disabled ? '#aaa' : color}}
                    >{children}</i>
                    : <span className='icon-button__icon' >{children}</span>
                }
            </CustomComponent>
        );
    }
}

IconButton.defaultProps = {
    disabled: false,
    component: 'button'
}

IconButton.propTypes = {
    onClick: PropTypes.func,
    /** Custom component for button */
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    href: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]).isRequired,
    className: PropTypes.string,
    /** Glyph color */
    color: PropTypes.string,
    disabled: PropTypes.bool
};
 
export default IconButton;
