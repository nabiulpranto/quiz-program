import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2 className='clr'>Quiz Program </h2>
            <nav className='header-nav'>
                <Link className='clr' to='/'>Quiz</Link>
                <Link className='clr' to='/statistics'>Statistics</Link>
                <Link className='clr' to='/blog'>Blog</Link>
            </nav>
        </div>
    );
};

export default Header;