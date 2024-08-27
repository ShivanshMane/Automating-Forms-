// src/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-links">
                <h3><Link to="/">Dashboard</Link></h3>
                <h3><Link to="/forms">Forms</Link></h3>
                <h3><Link to="/production">Production</Link></h3>
                <h3><Link to="/inventory">Inventory</Link></h3>
            </div>
        </div>
    );
};

export default Sidebar;
