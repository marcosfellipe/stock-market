import React, { Component } from 'react';
import '../../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {

    menuToggle = () => {
        console.log('click');
    }

    render() {
        return (
            <>
            <header>
                <h1 className="header">Stock Market<FontAwesomeIcon icon={faBars} size="xs" onClick={this.menuToggle} /></h1>
            </header>
            <nav className="nav-menu">
                <ul>
                    <li>Home</li>
                    <li>Configurações</li>
                    <li>Sobre</li>
                </ul>
            </nav>
            </>
        );
    }
}

export default Header;