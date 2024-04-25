// ! rsc - (Creates a React component class with ES7 module system (ES7+ React/Redux/React-Native snippets))

import React from 'react';
import './Header.css'
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className=''>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/Login">Login</a>
            </div>

        </nav>
    );
};

export default Header;