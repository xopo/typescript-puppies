import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
    <header className="App-header">
        <img src="Doge.jpg" className='App-logo' alt='logo' />
        <h4>Welcome to dogs for thugs!!</h4>
        <div className='App-links'>
            <Link to="/">Check Puppies </Link>
            <Link to="/form"> Add Form </Link>
        </div>
    </header>
);

export default Header;
