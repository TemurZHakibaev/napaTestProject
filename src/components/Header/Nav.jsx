import React from 'react';
import {Logo} from '../../assets/image/index'
import './Header.scss'

function Nav() {
    return (
        <nav className={'container'}>
            <ul className={'d-flex header__list items-center'}>
                <li className={'header-logo'}><img src={Logo}/></li>
                <li>
                    <ul className={'d-flex header__inside__list'}>
                        <li>About amid</li>
                        <li>Features</li>
                        <li>Portfolio</li>
                        <li>Reviews</li>
                    </ul>
                </li>
                <li><button>Login</button></li>
            </ul>
        </nav>
    );
}

export default Nav;