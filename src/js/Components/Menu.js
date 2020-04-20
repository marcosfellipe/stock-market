import React from 'react';
import '../../css/Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHome, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

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
                        <FontAwesomeIcon icon={faHome} size="lg" />
                        <span className="list-item-text">Home</span>
                    </li>
                    <li className="menu-list-item">
                        <FontAwesomeIcon icon={faCog} size="lg" />
                        <span className="list-item-text">Configurações</span>
                    </li>
                    <li className="menu-list-item">
                        <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
                        <span className="list-item-text">Sobre</span>
                    </li>
                </ul>
            </nav>
        </div>
        <div className={props.visible ? "menu-bg-open" : "menu-bg-close"} onClick={props.close}></div>
        </>
    );
}

export default Menu;