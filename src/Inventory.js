import React, { useState } from 'react';
import './Inventory.css';  // Make sure this path is correct to apply styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faTimes } from '@fortawesome/free-solid-svg-icons';

const Inventory = () => {
    const items = [
        { name: 'Peanuts', quantity: '150 kg', lastUpdated: '2024-06-01', vendors: ['Bird Song', 'Tifton', 'Clam', 'Lineage', 'Synergy'] },
        { name: 'Salt', quantity: '50 kg', lastUpdated: '2024-06-02', vendors: ['Vendor A', 'Vendor B'] },
        { name: 'Sugar', quantity: '75 kg', lastUpdated: '2024-05-20', vendors: ['Vendor C', 'Vendor D'] },
        { name: 'Soy', quantity: '100 liters', lastUpdated: '2024-05-01', vendors: ['Vendor E', 'Vendor F'] },
        { name: 'Jars', quantity: '200 units', lastUpdated: '2024-04-18', vendors: ['Vendor G', 'Vendor H'] },
        { name: 'Lids', quantity: '200 units', lastUpdated: '2024-03-19', vendors: ['Vendor I', 'Vendor J'] }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState([]);

    // Function to generate random quality ratings
    const getRandomQuality = () => Math.floor(Math.random() * 100) + 1; // Random quality between 1 and 100

    const handleItemClick = (vendors) => {
        const vendorsWithQuality = vendors.map(vendor => ({
            name: vendor,
            quality: getRandomQuality()
        }));
        setModalContent(vendorsWithQuality);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container">
            <div className="header">
                <h1>Inventory List</h1>
            </div>
            <table className="inventory-table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index} onClick={() => handleItemClick(item.vendors)}>
                            <td><FontAwesomeIcon icon={faBoxOpen} /> {item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.lastUpdated}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}><FontAwesomeIcon icon={faTimes} /></span>
                        <h2>Vendors for Selected Item</h2>
                        <ul>
                            {modalContent.map((vendor, index) => (
                                <li key={index}>{vendor.name} - Quality: {vendor.quality}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Inventory;
