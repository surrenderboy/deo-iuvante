import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './IconButton.css'

class IconButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const CustomComponent = this.props.href ? 'a' : this.props.component;        
        return (
            <CustomComponent             
                role='button'
                {...this.props}
                className={`icon-button ${this.props.className || ''} ${this.props.disabled ? 'icon-button_disabled' : ''}`}
            >
                {
                    typeof this.props.children === 'string'
                    ? <i 
                        className='material-icons icon-button__icon' 
                        style={{color: this.props.disabled ? '#aaa' : this.props.color}}
                    >{this.props.children}</i>
                    : <div className='icon-button__icon' >{this.props.children}</div>
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
