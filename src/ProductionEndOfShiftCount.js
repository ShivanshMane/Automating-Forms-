import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './ProductionEndOfShiftCount.css';

const productLotData = [
    { product: "RTA Creamy", lotFlavorCode: "T101", location: "Main" },
    { product: "PB2 Creamy Allulose", lotFlavorCode: "PB201", location: "Main" },
    { product: "Nuttzo Peanut Trail Mix", lotFlavorCode: "NZ211", location: "BN" },
    { product: "Nuttzo Smores", lotFlavorCode: "NZ209", location: "BN" },
    { product: "Nuttzo Pumpkin Spice", lotFlavorCode: "NZ207", location: "BN" },
    { product: "Nuttzo Gingerbread", lotFlavorCode: "NZ213", location: "BN" },
    { product: "Nuttzo Probiotic", lotFlavorCode: "NZ203", location: "BN" },
    { product: "Nuttzo Tumeric", lotFlavorCode: "NZ205", location: "BN" },
    { product: "Dream Big 12oz/8", lotFlavorCode: "1100", location: "BN" },
    { product: "Go Lucky 12oz/8", lotFlavorCode: "1101", location: "BN" },
    { product: "Don't Worry 12oz/8", lotFlavorCode: "1102", location: "BN" },
    { product: "Joy to the world 12oz/8", lotFlavorCode: "1103", location: "BN" },
    { product: "Good Day Sunshine 12oz/8", lotFlavorCode: "1109", location: "BN" },
    { product: "Share Kindness 12oz/8", lotFlavorCode: "1110", location: "BN" },
    { product: "Dream Big 12oz/45", lotFlavorCode: "2100", location: "BN" },
    { product: "Go Lucky 12oz/45", lotFlavorCode: "2101", location: "BN" },
    { product: "Don't Worry 12oz/45", lotFlavorCode: "2102", location: "BN" },
    { product: "Joy to the world 12oz/45", lotFlavorCode: "2103", location: "BN" },
    { product: "Good Day Sunshine 12oz/45", lotFlavorCode: "2109", location: "BN" },
    { product: "Dream Big 6oz/40", lotFlavorCode: "3100", location: "BN" },
    { product: "Go Lucky 6oz/40", lotFlavorCode: "3101", location: "BN" },
    { product: "Don't Worry 6oz/40", lotFlavorCode: "3102", location: "BN" },
    { product: "Joy to the world 6oz/40", lotFlavorCode: "3103", location: "BN" },
    { product: "Good Day Sunshine 6oz/40", lotFlavorCode: "3109", location: "BN" },
    { product: "Blissful Blueberry", lotFlavorCode: "02", location: "BN" },
    { product: "Coconuttly", lotFlavorCode: "04", location: "BN" },
    { product: "Irresistible Pretzel", lotFlavorCode: "06", location: "BN" },
    { product: "Java Chip", lotFlavorCode: "08", location: "BN" },
    { product: "Joyful Cranberry", lotFlavorCode: "10", location: "BN" },
    { product: "Perfectly Creamy", lotFlavorCode: "14", location: "BN" },
    { product: "Perfectly Crunchy", lotFlavorCode: "16", location: "BN" },
    { product: "Honey Granola Crunch", lotFlavorCode: "20", location: "BN" },
    { product: "Totally Toffee", lotFlavorCode: "22", location: "BN" },
    { product: "Simply Salted Caramel", lotFlavorCode: "24", location: "BN" },
    { product: "Pumpkin Spice", lotFlavorCode: "28", location: "BN" },
    { product: "Cinnamon Sugar Cookie", lotFlavorCode: "32", location: "BN" },
    { product: "Gingerbread", lotFlavorCode: "38", location: "BN" },
    { product: "Pecan Pie", lotFlavorCode: "40", location: "BN" },
    { product: "Peanut Butter Cup", lotFlavorCode: "46", location: "BN" },
    { product: "Raspberry White Chocolate", lotFlavorCode: "48", location: "BN" },
    { product: "Oatmeal Raisin", lotFlavorCode: "54", location: "BN" },
    { product: "Milk Chocolate Cherry", lotFlavorCode: "60", location: "BN" },
    { product: "Bark Butter 100", lotFlavorCode: "62", location: "BN" },
    { product: "Bark Butter Pumpkin", lotFlavorCode: "64", location: "BN" },
    { product: "Bark Butter Honey", lotFlavorCode: "66", location: "BN" },
    { product: "Bark Butter Blueberry", lotFlavorCode: "68", location: "BN" },
    { product: "Honest Paws Calm", lotFlavorCode: "HPC", location: "BN" },
    { product: "Honest Paws Blueberry", lotFlavorCode: "HPB", location: "BN" }
];

const names = [
    "MIRIAN BONILLA",
    "MELISSA TESSMER",
    "WILLIAM LABOY",
    "JAMIE LEFTRIDGE",
    "BILIKI AROMASHODUN",
    "DEVIN MOULTON",
    "ENRIQUE ARTEAGA",
    "TAYE LEFTRIDGE",
    "DAVID FOUNTAIN",
    "JARED PRIDEMORE",
    "MARY CARMEN",
    "LISA STEPHENS",
    "CHRISTINE BROWN",
    "RICKY MCCOY",
    "KEN ADELEKE"
];

const initialState = {
    location: '',
    product: '',
    lotCode: '',
    shift: '',
    date: '',
    wasteCount: {
        jarsFloorQty: '',
        jarsFloorInitials: '',
        lidsFloorQty: '',
        lidsFloorInitials: '',
        boxesFloorQty: '',
        boxesFloorInitials: '',
        labelsFloorQty: '',
        labelsFloorInitials: '',
        jarsSealsQty: '',
        jarsSealsInitials: '',
        lidsSealsQty: '',
        lidsSealsInitials: '',
        boxesSealsQty: '',
        boxesSealsInitials: '',
        labelsSealsQty: '',
        labelsSealsInitials: '',
        jarsRejectedQty: '',
        jarsRejectedInitials: '',
        lidsRejectedQty: '',
        lidsRejectedInitials: '',
        boxesRejectedQty: '',
        boxesRejectedInitials: '',
        labelsRejectedQty: '',
        labelsRejectedInitials: '',
    },
    shippableCount: {
        jarsPrevQty: '',
        jarsPrevInitials: '',
        lidsPrevQty: '',
        lidsPrevInitials: '',
        boxesPrevQty: '',
        boxesPrevInitials: '',
        labelsPrevQty: '',
        labelsPrevInitials: '',
        jarsFullPalletQty: '',
        jarsFullPalletInitials: '',
        lidsFullPalletQty: '',
        lidsFullPalletInitials: '',
        boxesFullPalletQty: '',
        boxesFullPalletInitials: '',
        labelsFullPalletQty: '',
        labelsFullPalletInitials: '',
        jarsPartialPalletQty: '',
        jarsPartialPalletInitials: '',
        lidsPartialPalletQty: '',
        lidsPartialPalletInitials: '',
        boxesPartialPalletQty: '',
        boxesPartialPalletInitials: '',
        labelsPartialPalletQty: '',
        labelsPartialPalletInitials: '',
        jarsIndCountQty: '',
        jarsIndCountInitials: '',
        lidsIndCountQty: '',
        lidsIndCountInitials: '',
        boxesIndCountQty: '',
        boxesIndCountInitials: '',
        labelsIndCountQty: '',
        labelsIndCountInitials: '',
    },
    labSamples: Array(5).fill({
        jarsQty: '',
        jarsInitials: '',
        lidsQty: '',
        lidsInitials: '',
        boxesQty: '',
        boxesInitials: '',
        labelsQty: '',
        labelsInitials: '',
    }),
};

const ProductionEndOfShiftCount = () => {
    const [formData, setFormData] = useState(initialState);
    const [data, setData] = useState([]);

    useEffect(() => {
        const currentDate = new Date().toISOString().slice(0, 10); // YYYY-MM-DD format
        setFormData(prevFormData => ({ ...prevFormData, date: currentDate }));
    }, []);

    const handleLocationChange = (e) => {
        setFormData({ ...formData, location: e.target.value, product: '', lotCode: '' });
    };

    const handleProductChange = (e) => {
        const selectedProduct = e.target.value;
        const lotFlavorCode = productLotData.find(p => p.product === selectedProduct)?.lotFlavorCode;
        const currentDate = new Date();
        const formattedDate = `${String(currentDate.getMonth() + 1).padStart(2, '0')}${String(currentDate.getDate()).padStart(2, '0')}${String(currentDate.getFullYear()).slice(-1)}`; // Format: MMDDY
        setFormData({ ...formData, product: selectedProduct, lotCode: `${lotFlavorCode}${formattedDate}` });
    };

    const handleInputChange = (e, section, name) => {
        const value = e.target.value;
        setFormData(prevState => {
            const updatedSection = { ...prevState[section], [name]: value };
            return { ...prevState, [section]: updatedSection };
        });
    };

    const handleSampleChange = (e, index, name) => {
        const value = e.target.value;
        setFormData(prevState => {
            const updatedSamples = prevState.labSamples.map((sample, i) =>
                i === index ? { ...sample, [name]: value } : sample
            );
            return { ...prevState, labSamples: updatedSamples };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/production-end-of-shift-count/', formData);
            console.log('Form submitted successfully:', response.data);
            setFormData(initialState); // Reset the form after submission
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/production-end-of-shift-count-list/');
                setData(response.data);
            } catch (error) {
                console.error('There was an error fetching the data!', error);
            }
        };

        fetchData();
    }, []);

    const calculateTotal = (section, type) => {
        return Object.keys(formData[section])
            .filter(key => key.endsWith(type))
            .reduce((sum, key) => sum + Number(formData[section][key] || 0), 0);
    };

    const filteredProducts = productLotData.filter(product => product.location === formData.location);

    return (
        <div className="pes-form-container">
            <h2 className="pes-form-title">SOP Production End Shift Count Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="pes-form-group">
                    <label>LOCATION:</label>
                    <select name="location" value={formData.location} onChange={handleLocationChange}>
                        <option value="">Select Location</option>
                        <option value="Main">Main</option>
                        <option value="BN">BN</option>
                    </select>
                </div>
                <div className="pes-form-row">
                    <div className="pes-form-group">
                        <label>PRODUCT:</label>
                        <select name="product" value={formData.product} onChange={handleProductChange}>
                            <option value="">Select Product</option>
                            {filteredProducts.map(product => (
                                <option key={product.product} value={product.product}>{product.product}</option>
                            ))}
                        </select>
                    </div>
                    <div className="pes-form-group">
                        <label>LOT CODE:</label>
                        <input type="text" name="lotCode" value={formData.lotCode} readOnly />
                    </div>
                </div>
                <div className="pes-form-row">
                    <div className="pes-form-group">
                        <label>SHIFT:</label>
                        <select name="shift" value={formData.shift} onChange={(e) => handleInputChange(e, null, 'shift')}>
                            <option value="">Select Shift</option>
                            <option value="Shift 1">Shift 1</option>
                            <option value="Shift 2">Shift 2</option>
                        </select>
                    </div>
                    <div className="pes-form-group">
                        <label>DATE:</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={(e) => handleInputChange(e, null, 'date')}
                        />
                    </div>
                </div>
                <table className="pes-form-table">
                    <thead>
                        <tr>
                            <th>Waste Count</th>
                            <th colSpan="2">Jars</th>
                            <th colSpan="2">Lids</th>
                            <th colSpan="2">Boxes</th>
                            <th colSpan="2">Labels</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Qty</th>
                            <th>Initials</th>
                            <th>Qty</th>
                            <th>Initials</th>
                            <th>Qty</th>
                            <th>Initials</th>
                            <th>Qty</th>
                            <th>Initials</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Floor</td>
                            <td>
                                <input
                                    type="number"
                                    name="jarsFloorQty"
                                    value={formData.wasteCount.jarsFloorQty}
                                    onChange={(e) => handleInputChange(e, 'wasteCount', 'jarsFloorQty')}
                                />
                            </td>
                            <td>
                                <select name="jarsFloorInitials" value={formData.wasteCount.jarsFloorInitials} onChange={(e) => handleInputChange(e, 'wasteCount', 'jarsFloorInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="lidsFloorQty"
                                    value={formData.wasteCount.lidsFloorQty}
                                    onChange={(e) => handleInputChange(e, 'wasteCount', 'lidsFloorQty')}
                                />
                            </td>
                            <td>
                                <select name="lidsFloorInitials" value={formData.wasteCount.lidsFloorInitials} onChange={(e) => handleInputChange(e, 'wasteCount', 'lidsFloorInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="boxesFloorQty"
                                    value={formData.wasteCount.boxesFloorQty}
                                    onChange={(e) => handleInputChange(e, 'wasteCount', 'boxesFloorQty')}
                                />
                            </td>
                            <td>
                                <select name="boxesFloorInitials" value={formData.wasteCount.boxesFloorInitials} onChange={(e) => handleInputChange(e, 'wasteCount', 'boxesFloorInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="labelsFloorQty"
                                    value={formData.wasteCount.labelsFloorQty}
                                    onChange={(e) => handleInputChange(e, 'wasteCount', 'labelsFloorQty')}
                                />
                            </td>
                            <td>
                                <select name="labelsFloorInitials" value={formData.wasteCount.labelsFloorInitials} onChange={(e) => handleInputChange(e, 'wasteCount', 'labelsFloorInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Seals</td>
                            <td>
                                <input
                                    type="number"
                                    name="jarsSealsQty"
                                    value={formData.wasteCount.jarsSealsQty}
                                    onChange={(e) => handleInputChange(e, 'wasteCount', 'jarsSealsQty')}
                                />
                            </td>
                            <td>
                                <select name="jarsSealsInitials" value={formData.wasteCount.jarsSealsInitials} onChange={(e) => handleInputChange(e, 'wasteCount', 'jarsSealsInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="lidsSealsQty"
                                    value={formData.wasteCount.lidsSealsQty}
                                    onChange={(e) => handleInputChange(e, 'wasteCount', 'lidsSealsQty')}
                                />
                            </td>
                            <td>
                                <select name="lidsSealsInitials" value={formData.wasteCount.lidsSealsInitials} onChange={(e) => handleInputChange(e, 'wasteCount', 'lidsSealsInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="boxesSealsQty"
                                    value={formData.wasteCount.boxesSealsQty}
                                    onChange={(e) => handleInputChange(e, 'wasteCount', 'boxesSealsQty')}
                                />
                            </td>
                            <td>
                                <select name="boxesSealsInitials" value={formData.wasteCount.boxesSealsInitials} onChange={(e) => handleInputChange(e, 'wasteCount', 'boxesSealsInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="labelsSealsQty"
                                    value={formData.wasteCount.labelsSealsQty}
                                    onChange={(e) => handleInputChange(e, 'wasteCount', 'labelsSealsQty')}
                                />
                            </td>
                            <td>
                                <select name="labelsSealsInitials" value={formData.wasteCount.labelsSealsInitials} onChange={(e) => handleInputChange(e, 'wasteCount', 'labelsSealsInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Rejected</td>
                            <td>
                                <input
                                    type="number"
                                    name="jarsRejectedQty"
                                    value={formData.wasteCount.jarsRejectedQty}
                                    onChange={(e) => handleInputChange(e, 'wasteCount', 'jarsRejectedQty')}
                                />
                            </td>
                            <td>
                                <select name="jarsRejectedInitials" value={formData.wasteCount.jarsRejectedInitials} onChange={(e) => handleInputChange(e, 'wasteCount', 'jarsRejectedInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="lidsRejectedQty"
                                    value={formData.wasteCount.lidsRejectedQty}
                                    onChange={(e) => handleInputChange(e, 'wasteCount', 'lidsRejectedQty')}
                                />
                            </td>
                            <td>
                                <select name="lidsRejectedInitials" value={formData.wasteCount.lidsRejectedInitials} onChange={(e) => handleInputChange(e, 'wasteCount', 'lidsRejectedInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="boxesRejectedQty"
                                    value={formData.wasteCount.boxesRejectedQty}
                                    onChange={(e) => handleInputChange(e, 'wasteCount', 'boxesRejectedQty')}
                                />
                            </td>
                            <td>
                                <select name="boxesRejectedInitials" value={formData.wasteCount.boxesRejectedInitials} onChange={(e) => handleInputChange(e, 'wasteCount', 'boxesRejectedInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="labelsRejectedQty"
                                    value={formData.wasteCount.labelsRejectedQty}
                                    onChange={(e) => handleInputChange(e, 'wasteCount', 'labelsRejectedQty')}
                                />
                            </td>
                            <td>
                                <select name="labelsRejectedInitials" value={formData.wasteCount.labelsRejectedInitials} onChange={(e) => handleInputChange(e, 'wasteCount', 'labelsRejectedInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>
                                <input
                                    type="number"
                                    name="jarsWasteTotal"
                                    value={calculateTotal('wasteCount', 'Qty')}
                                    readOnly
                                />
                            </td>
                            <td></td>
                            <td>
                                <input
                                    type="number"
                                    name="lidsWasteTotal"
                                    value={calculateTotal('wasteCount', 'Qty')}
                                    readOnly
                                />
                            </td>
                            <td></td>
                            <td>
                                <input
                                    type="number"
                                    name="boxesWasteTotal"
                                    value={calculateTotal('wasteCount', 'Qty')}
                                    readOnly
                                />
                            </td>
                            <td></td>
                            <td>
                                <input
                                    type="number"
                                    name="labelsWasteTotal"
                                    value={calculateTotal('wasteCount', 'Qty')}
                                    readOnly
                                />
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <table className="pes-form-table">
                    <thead>
                        <tr>
                            <th>Shippable Final Finished Product Count</th>
                            <th colSpan="2">Jars</th>
                            <th colSpan="2">Lids</th>
                            <th colSpan="2">Boxes</th>
                            <th colSpan="2">Labels</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Qty</th>
                            <th>Initials</th>
                            <th>Qty</th>
                            <th>Initials</th>
                            <th>Qty</th>
                            <th>Initials</th>
                            <th>Qty</th>
                            <th>Initials</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td># of cases from previous shift</td>
                            <td>
                                <input
                                    type="number"
                                    name="jarsPrevQty"
                                    value={formData.shippableCount.jarsPrevQty}
                                    onChange={(e) => handleInputChange(e, 'shippableCount', 'jarsPrevQty')}
                                />
                            </td>
                            <td>
                                <select name="jarsPrevInitials" value={formData.shippableCount.jarsPrevInitials} onChange={(e) => handleInputChange(e, 'shippableCount', 'jarsPrevInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="lidsPrevQty"
                                    value={formData.shippableCount.lidsPrevQty}
                                    onChange={(e) => handleInputChange(e, 'shippableCount', 'lidsPrevQty')}
                                />
                            </td>
                            <td>
                                <select name="lidsPrevInitials" value={formData.shippableCount.lidsPrevInitials} onChange={(e) => handleInputChange(e, 'shippableCount', 'lidsPrevInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="boxesPrevQty"
                                    value={formData.shippableCount.boxesPrevQty}
                                    onChange={(e) => handleInputChange(e, 'shippableCount', 'boxesPrevQty')}
                                />
                            </td>
                            <td>
                                <select name="boxesPrevInitials" value={formData.shippableCount.boxesPrevInitials} onChange={(e) => handleInputChange(e, 'shippableCount', 'boxesPrevInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="labelsPrevQty"
                                    value={formData.shippableCount.labelsPrevQty}
                                    onChange={(e) => handleInputChange(e, 'shippableCount', 'labelsPrevQty')}
                                />
                            </td>
                            <td>
                                <select name="labelsPrevInitials" value={formData.shippableCount.labelsPrevInitials} onChange={(e) => handleInputChange(e, 'shippableCount', 'labelsPrevInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Completed (Full) Pallet Count</td>
                            <td>
                                <input
                                    type="number"
                                    name="jarsFullPalletQty"
                                    value={formData.shippableCount.jarsFullPalletQty}
                                    onChange={(e) => handleInputChange(e, 'shippableCount', 'jarsFullPalletQty')}
                                />
                            </td>
                            <td>
                                <select name="jarsFullPalletInitials" value={formData.shippableCount.jarsFullPalletInitials} onChange={(e) => handleInputChange(e, 'shippableCount', 'jarsFullPalletInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="lidsFullPalletQty"
                                    value={formData.shippableCount.lidsFullPalletQty}
                                    onChange={(e) => handleInputChange(e, 'shippableCount', 'lidsFullPalletQty')}
                                />
                            </td>
                            <td>
                                <select name="lidsFullPalletInitials" value={formData.shippableCount.lidsFullPalletInitials} onChange={(e) => handleInputChange(e, 'shippableCount', 'lidsFullPalletInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="boxesFullPalletQty"
                                    value={formData.shippableCount.boxesFullPalletQty}
                                    onChange={(e) => handleInputChange(e, 'shippableCount', 'boxesFullPalletQty')}
                                />
                            </td>
                            <td>
                                <select name="boxesFullPalletInitials" value={formData.shippableCount.boxesFullPalletInitials} onChange={(e) => handleInputChange(e, 'shippableCount', 'boxesFullPalletInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="labelsFullPalletQty"
                                    value={formData.shippableCount.labelsFullPalletQty}
                                    onChange={(e) => handleInputChange(e, 'shippableCount', 'labelsFullPalletQty')}
                                />
                            </td>
                            <td>
                                <select name="labelsFullPalletInitials" value={formData.shippableCount.labelsFullPalletInitials} onChange={(e) => handleInputChange(e, 'shippableCount', 'labelsFullPalletInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Ending Partial Pallet Count/Case</td>
                            <td>
                                <input
                                    type="number"
                                    name="jarsPartialPalletQty"
                                    value={formData.shippableCount.jarsPartialPalletQty}
                                    onChange={(e) => handleInputChange(e, 'shippableCount', 'jarsPartialPalletQty')}
                                />
                            </td>
                            <td>
                                <select name="jarsPartialPalletInitials" value={formData.shippableCount.jarsPartialPalletInitials} onChange={(e) => handleInputChange(e, 'shippableCount', 'jarsPartialPalletInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="lidsPartialPalletQty"
                                    value={formData.shippableCount.lidsPartialPalletQty}
                                    onChange={(e) => handleInputChange(e, 'shippableCount', 'lidsPartialPalletQty')}
                                />
                            </td>
                            <td>
                                <select name="lidsPartialPalletInitials" value={formData.shippableCount.lidsPartialPalletInitials} onChange={(e) => handleInputChange(e, 'shippableCount', 'lidsPartialPalletInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="boxesPartialPalletQty"
                                    value={formData.shippableCount.boxesPartialPalletQty}
                                    onChange={(e) => handleInputChange(e, 'shippableCount', 'boxesPartialPalletQty')}
                                />
                            </td>
                            <td>
                                <select name="boxesPartialPalletInitials" value={formData.shippableCount.boxesPartialPalletInitials} onChange={(e) => handleInputChange(e, 'shippableCount', 'boxesPartialPalletInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="labelsPartialPalletQty"
                                    value={formData.shippableCount.labelsPartialPalletQty}
                                    onChange={(e) => handleInputChange(e, 'shippableCount', 'labelsPartialPalletQty')}
                                />
                            </td>
                            <td>
                                <select name="labelsPartialPalletInitials" value={formData.shippableCount.labelsPartialPalletInitials} onChange={(e) => handleInputChange(e, 'shippableCount', 'labelsPartialPalletInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Ending Individual Jar Count</td>
                            <td>
                                <input
                                    type="number"
                                    name="jarsIndCountQty"
                                    value={formData.shippableCount.jarsIndCountQty}
                                    onChange={(e) => handleInputChange(e, 'shippableCount', 'jarsIndCountQty')}
                                />
                            </td>
                            <td>
                                <select name="jarsIndCountInitials" value={formData.shippableCount.jarsIndCountInitials} onChange={(e) => handleInputChange(e, 'shippableCount', 'jarsIndCountInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="lidsIndCountQty"
                                    value={formData.shippableCount.lidsIndCountQty}
                                    onChange={(e) => handleInputChange(e, 'shippableCount', 'lidsIndCountQty')}
                                />
                            </td>
                            <td>
                                <select name="lidsIndCountInitials" value={formData.shippableCount.lidsIndCountInitials} onChange={(e) => handleInputChange(e, 'shippableCount', 'lidsIndCountInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="boxesIndCountQty"
                                    value={formData.shippableCount.boxesIndCountQty}
                                    onChange={(e) => handleInputChange(e, 'shippableCount', 'boxesIndCountQty')}
                                />
                            </td>
                            <td>
                                <select name="boxesIndCountInitials" value={formData.shippableCount.boxesIndCountInitials} onChange={(e) => handleInputChange(e, 'shippableCount', 'boxesIndCountInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="labelsIndCountQty"
                                    value={formData.shippableCount.labelsIndCountQty}
                                    onChange={(e) => handleInputChange(e, 'shippableCount', 'labelsIndCountQty')}
                                />
                            </td>
                            <td>
                                <select name="labelsIndCountInitials" value={formData.shippableCount.labelsIndCountInitials} onChange={(e) => handleInputChange(e, 'shippableCount', 'labelsIndCountInitials')}>
                                    <option value="">Select Initials</option>
                                    {names.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>
                                <input
                                    type="number"
                                    name="jarsShippableTotal"
                                    value={calculateTotal('shippableCount', 'Qty')}
                                    readOnly
                                />
                            </td>
                            <td></td>
                            <td>
                                <input
                                    type="number"
                                    name="lidsShippableTotal"
                                    value={calculateTotal('shippableCount', 'Qty')}
                                    readOnly
                                />
                            </td>
                            <td></td>
                            <td>
                                <input
                                    type="number"
                                    name="boxesShippableTotal"
                                    value={calculateTotal('shippableCount', 'Qty')}
                                    readOnly
                                />
                            </td>
                            <td></td>
                            <td>
                                <input
                                    type="number"
                                    name="labelsShippableTotal"
                                    value={calculateTotal('shippableCount', 'Qty')}
                                    readOnly
                                />
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <table className="pes-form-table">
                    <thead>
                        <tr>
                            <th>Lab/retain samples collected</th>
                            <th colSpan="2">Jars</th>
                            <th colSpan="2">Lids</th>
                            <th colSpan="2">Boxes</th>
                            <th colSpan="2">Labels</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Qty</th>
                            <th>Initials</th>
                            <th>Qty</th>
                            <th>Initials</th>
                            <th>Qty</th>
                            <th>Initials</th>
                            <th>Qty</th>
                            <th>Initials</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.labSamples.map((sample, index) => (
                            <tr key={index}>
                                <td>Sample {index + 1}</td>
                                <td>
                                    <input
                                        type="number"
                                        name="jarsQty"
                                        value={sample.jarsQty}
                                        onChange={(e) => handleSampleChange(e, index, 'jarsQty')}
                                    />
                                </td>
                                <td>
                                    <select name="jarsInitials" value={sample.jarsInitials} onChange={(e) => handleSampleChange(e, index, 'jarsInitials')}>
                                        <option value="">Select Initials</option>
                                        {names.map(name => (
                                            <option key={name} value={name}>{name}</option>
                                        ))}
                                    </select>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="lidsQty"
                                        value={sample.lidsQty}
                                        onChange={(e) => handleSampleChange(e, index, 'lidsQty')}
                                    />
                                </td>
                                <td>
                                    <select name="lidsInitials" value={sample.lidsInitials} onChange={(e) => handleSampleChange(e, index, 'lidsInitials')}>
                                        <option value="">Select Initials</option>
                                        {names.map(name => (
                                            <option key={name} value={name}>{name}</option>
                                        ))}
                                    </select>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="boxesQty"
                                        value={sample.boxesQty}
                                        onChange={(e) => handleSampleChange(e, index, 'boxesQty')}
                                    />
                                </td>
                                <td>
                                    <select name="boxesInitials" value={sample.boxesInitials} onChange={(e) => handleSampleChange(e, index, 'boxesInitials')}>
                                        <option value="">Select Initials</option>
                                        {names.map(name => (
                                            <option key={name} value={name}>{name}</option>
                                        ))}
                                    </select>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="labelsQty"
                                        value={sample.labelsQty}
                                        onChange={(e) => handleSampleChange(e, index, 'labelsQty')}
                                    />
                                </td>
                                <td>
                                    <select name="labelsInitials" value={sample.labelsInitials} onChange={(e) => handleSampleChange(e, index, 'labelsInitials')}>
                                        <option value="">Select Initials</option>
                                        {names.map(name => (
                                            <option key={name} value={name}>{name}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td>Total</td>
                            <td>
                                <input
                                    type="number"
                                    name="jarsLabTotal"
                                    value={calculateTotal('labSamples', 'jarsQty')}
                                    readOnly
                                />
                            </td>
                            <td></td>
                            <td>
                                <input
                                    type="number"
                                    name="lidsLabTotal"
                                    value={calculateTotal('labSamples', 'lidsQty')}
                                    readOnly
                                />
                            </td>
                            <td></td>
                            <td>
                                <input
                                    type="number"
                                    name="boxesLabTotal"
                                    value={calculateTotal('labSamples', 'boxesQty')}
                                    readOnly
                                />
                            </td>
                            <td></td>
                            <td>
                                <input
                                    type="number"
                                    name="labelsLabTotal"
                                    value={calculateTotal('labSamples', 'labelsQty')}
                                    readOnly
                                />
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <button className="pes-button" type="submit">Submit</button>
            </form>
            <div>

                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.product} - {item.date} - {item.shift}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductionEndOfShiftCount;
