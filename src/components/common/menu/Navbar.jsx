import React from 'react';
import style from './Navbar.module.css';
import logo from '../../../../src/assets/react-chile-logo.png';

import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    render() {

        return(
            <nav className={`${style.navbarLine} navbar is-white` } role="navigation" aria-label="main navigation">
                <div className={`navbar-brand ${style.menu} `}>
                <a className="navbar-item" href="https://bulma.io">
                    <img src={logo} width="112" height="28" />
                </a>

                <Link to='/' className="navbar-item is-active"><i className="ion ion-md-home"></i>Inicio</Link>
                <Link to='/orders' className="navbar-item"><i className="ion ion-md-text"></i>Ordenes</Link>
                <Link to='/services' className="navbar-item"><i className="ion ion-md-list-box"></i>Servicios</Link>

                </div>
                
            </nav>
        )
    }
}

export default Navbar;
