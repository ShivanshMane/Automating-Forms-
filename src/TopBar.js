import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = ({ logoutUser }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="topbar-container">
            <div className="topbar">
                <div className="menu-icon" onClick={toggleMenu}>
                    {isMenuOpen ? '✖' : '☰'}
                </div>
                {isMenuOpen && (
                    <ul className="menu">
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/forms">Forms</Link></li>
                        <li><Link to="/production">Production</Link></li>
                        <li><Link to="/inventory">Inventory</Link></li>
                        <li><button onClick={logoutUser}>Logout</button></li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default TopBar;
