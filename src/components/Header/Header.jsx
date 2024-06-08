// ! rsc - (Creates a React component class with ES7 module system (ES7+ React/Redux/React-Native snippets))

import React from 'react';
import './Header.css'
import logo from '../../assets/images/Logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className=''>
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/orders">Order</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>

        </nav>
    );
};

export default Header;