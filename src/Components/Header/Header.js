import React from 'react';
import './Header.css';
import logo from '../../logo.jpg'
const Header = () => {
    return (
        <nav className='header'>
            <img className='logo' src={logo} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about us">About Us</a>
            </div>
        </nav>
    );
};

export default Header;