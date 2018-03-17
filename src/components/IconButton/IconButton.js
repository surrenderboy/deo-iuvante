import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './IconButton.css'

class IconButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const CustomComponent = this.props.component || 'button';
        this.children = this.props.children
            ? this.props.children
            : <i className='material-icons icon-button__icon' style={{color: this.props.color}}>{this.props.glyph}</i>;
        return (
            <CustomComponent 
                className={`icon-button ${this.props.className}`} 
                onClick={this.props.onClick}
            >
                {this.children}
            </CustomComponent>
        );
    }
}

IconButton.propTypes = {
    glyph: PropTypes.string,
    onClick: PropTypes.func,
    component: PropTypes.element,
    href: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string
};
 
export default IconButton;