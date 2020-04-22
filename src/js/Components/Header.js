import React, { Component } from 'react';
import '../../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.menuToggle = this.menuToggle.bind(this);
    }

    menuToggle() {
        this.setState((state, props) => {
            return { visible: !state.visible };
        });
    }

    render() {
        return (
            <header  className="header">
                <h1>Stock Market</h1>
                <FontAwesomeIcon className="btn-open-menu" icon={faBars} size="2x" onClick={this.menuToggle} />
                <Menu close={this.menuToggle} visible={this.state.visible} />
            </header>
        );
    }
}

export default Header;