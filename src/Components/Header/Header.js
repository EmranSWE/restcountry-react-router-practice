import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div className='headerr'>
            <h1>Welcome to React Router Web Pages!</h1>
            <nav className='link'>
                <Link to='/'>Home </Link>
                <Link to='/about'>About </Link>
                <Link to='/countries'>Country </Link>
            </nav>
        </div>
    );
};

export default Header;