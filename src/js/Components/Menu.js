import React from 'react';
import '../../css/Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHome, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Menu(props) {
    return (
        <>
        <div className={"nav-menu" + (props.visible ? " nav-menu-open" : "")}>
            <div className="btn-menu-close">
                <FontAwesomeIcon icon={faTimes} size="lg" onClick={props.close} />
            </div>
            <nav>
                <ul className="nav-menu-list">
                    <li className="menu-list-item">
                        <FontAwesomeIcon className="list-item-icon" icon={faHome} size="lg" />
                        <Link to="/" className="list-item-link" onClick={props.close}>Home</Link>
                    </li>
                    <li className="menu-list-item">
                        <FontAwesomeIcon className="list-item-icon" icon={faCog} size="lg" />
                        <span className="list-item-link">Configurações</span>
                    </li>
                    <li className="menu-list-item">
                        <FontAwesomeIcon className="list-item-icon" icon={faQuestionCircle} size="lg" />
                        <Link to="/about" className="list-item-link" onClick={props.close}>Sobre</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className={props.visible ? "menu-bg-open" : "menu-bg-close"} onClick={props.close}></div>
        </>
    );
}

export default Menu;