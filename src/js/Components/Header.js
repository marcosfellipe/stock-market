import React, { Component } from 'react';
import '../../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';

class Header extends Component {
    constructor(props) {
        super(props);
        this._menu = null;
    }

    componentDidMount = () => {
        this._menu = document.getElementById('menu');
    }

    menuToggle = () => {
        if (this._menu.classList.contains('nav-menu-open')) {
            this._menu.classList.remove('nav-menu-open');
        } else {
            this._menu.classList.add('nav-menu-open');
        }
    }

    render() {
        return (
            <>
            <header>
                <h1 className="header">Stock Market<FontAwesomeIcon icon={faBars} size="xs" onClick={this.menuToggle} /></h1>
            </header>
            <Menu close={this.menuToggle} />
            </>
        );
    }
}

export default Header;