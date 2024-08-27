// src/MainContent.js
import React from 'react';
import './MainContent.css';
import { Link } from 'react-router-dom';

const MainContent = () => {
    return (
        <div className="mc-main-content">
            <h1 className="mc-logo">T3N</h1>
            <div className="mc-content-sections">
                <div className="mc-current-inventory mc-card">
                    <h2 className="mc-section-title">Current Inventory</h2>
                    <ul className="mc-list">
                        <li className="mc-list-item">Peanuts: XXX</li>
                        <li className="mc-list-item">Jars: XXXX</li>
                        <li className="mc-list-item">Lids: XXXX</li>
                    </ul>
                    <Link to="/inventory" className="mc-link">Go to Inventory Page</Link>
                </div>
                <div className="mc-production mc-card">
                    <h2 className="mc-section-title">Production</h2>
                    <ul className="mc-list">
                        <li className="mc-list-item">Bnutty: XXXX</li>
                        <li className="mc-list-item">Main Room: XXXXX</li>
                    </ul>
                    <Link to="/production" className="mc-link">Go to Production Page</Link>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
