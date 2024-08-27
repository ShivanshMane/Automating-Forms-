import React, { useState } from 'react';
import './ProductOrganolepticInspectionForm.css';

const productLotData = {
    "RTA Creamy": "T101",
    "PB2 Creamy Allulose": "PB201",
    "Nuttzo Peanut Trail Mix": "NZ211",
    "Nuttzo Smores": "NZ209",
    "Nuttzo Pumpkin Spice": "NZ207",
    "Nuttzo Gingerbread": "NZ213",
    "Nuttzo Probiotic": "NZ203",
    "Nuttzo Tumeric": "NZ205",
    "Dream Big 12oz/8": "1100",
    "Go Lucky 12oz/8": "1101",
    "Don't Worry 12oz/8": "1102",
    "Joy to the world 12oz/8": "1103",
    "Good Day Sunshine 12oz/8": "1109",
    "Share Kindness 12oz/8": "1110",
    "Dream Big 12oz/45": "2100",
    "Go Lucky 12oz/45": "2101",
    "Don't Worry 12oz/45": "2102",
    "Joy to the world 12oz/45": "2103",
    "Good Day Sunshine 12oz/45": "2109",
    "Dream Big 6oz/40": "3100",
    "Go Lucky 6oz/40": "3101",
    "Don't Worry 6oz/40": "3102",
    "Joy to the world 6oz/40": "3103",
    "Good Day Sunshine 6oz/40": "3109",
    "Blissful Blueberry": "02",
    "Coconuttly": "04",
    "Irresistible Pretzel": "06",
    "Java Chip": "08",
    "Joyful Cranberry": "10",
    "Perfectly Creamy": "14",
    "Perfectly Crunchy": "16",
    "Honey Granola Crunch": "20",
    "Totally Toffee": "22",
    "Simply Salted Caramel": "24",
    "Pumpkin Spice": "28",
    "Cinnamon Sugar Cookie": "32",
    "Gingerbread": "38",
    "Pecan Pie": "40",
    "Peanut Butter Cup": "46",
    "Raspberry White Chocolate": "48",
    "Oatmeal Raisin": "54",
    "Milk Chocolate Cherry": "60",
    "Bark Butter 100": "62",
    "Bark Butter Pumpkin": "64",
    "Bark Butter Honey": "66",
    "Bark Butter Blueberry": "68",
    "Honest Paws Calm": "HPC",
    "Honest Paws Blueberry": "HPB"
};

const initialState = {
    customer: '',
    product: '',
    lotNumber: '',
    date: '',
    size: '',
    batches: Array.from({ length: 10 }, () => ({
        color: '',
        odor: '',
        taste: '',
        salt: '',
        sugar: '',
        viscosity: '',
        retention: '',
        temperature: '',
        monitor: '',
        verified: ''
    }))
};

const ProductOrganolepticInspectionForm = () => {
    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e, batchIndex, name) => {
        const updatedBatches = [...formData.batches];
        updatedBatches[batchIndex][name] = e.target.value;
        setFormData({ ...formData, batches: updatedBatches });
    };

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleProductChange = (e) => {
        const selectedProduct = e.target.value;
        const lotFlavorCode = productLotData[selectedProduct];
        const currentDate = new Date();
        const formattedDate = `${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(currentDate.getDate()).padStart(2, '0')}/${String(currentDate.getFullYear()).slice(-4)}`; // Format: MM/DD/YYYY
        setFormData({
            ...formData,
            product: selectedProduct,
            lotNumber: `${lotFlavorCode}-${formattedDate}`
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="poi-form-container">
            <h2 className="poi-form-title">Product Organoleptic Inspection Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="poi-form-row">
                    <div className="poi-form-group">
                        <label>Customer:</label>
                        <input
                            type="text"
                            name="customer"
                            value={formData.customer}
                            onChange={handleFieldChange}
                            required
                        />
                    </div>
                    <div className="poi-form-group">
                        <label>Product:</label>
                        <select
                            name="product"
                            value={formData.product}
                            onChange={handleProductChange}
                            required
                        >
                            <option value="">Select Product</option>
                            {Object.keys(productLotData).map((product) => (
                                <option key={product} value={product}>{product}</option>
                            ))}
                        </select>
                    </div>
                    <div className="poi-form-group">
                        <label>Lot #:</label>
                        <input
                            type="text"
                            name="lotNumber"
                            value={formData.lotNumber}
                            readOnly
                            required
                        />
                    </div>
                    <div className="poi-form-group">
                        <label>Date:</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleFieldChange}
                            required
                        />
                    </div>
                    <div className="poi-form-group">
                        <label>Size:</label>
                        <select
                            name="size"
                            value={formData.size}
                            onChange={handleFieldChange}
                            required
                        >
                            <option value="">Select Size</option>
                            <option value="2.0 oz">2.0 oz</option>
                            <option value="9.0 oz">9.0 oz</option>
                            <option value="12.0 oz">12.0 oz</option>
                            <option value="16.0 oz">16.0 oz</option>
                            <option value="19.0 oz">19.0 oz</option>
                        </select>
                    </div>
                </div>
                <div className="poi-abbreviation-container">
                    <p>S = Satisfactory, U = Unsatisfactory</p>
                </div>
                <div className="poi-table-container">
                    <table className="poi-form-table">
                        <thead>
                            <tr>
                                <th>Specification</th>
                                {Array.from({ length: 10 }, (_, index) => (
                                    <th key={index}>Batch {index + 1}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {['color', 'odor', 'taste', 'salt', 'sugar', 'viscosity', 'retention', 'temperature', 'monitor', 'verified'].map((spec, specIndex) => (
                                <tr key={specIndex}>
                                    <td>{spec.charAt(0).toUpperCase() + spec.slice(1)}</td>
                                    {formData.batches.map((batch, batchIndex) => (
                                        <td key={batchIndex}>
                                            {spec === 'salt' || spec === 'sugar' || spec === 'temperature' ? (
                                                <input
                                                    type="text"
                                                    name={spec}
                                                    value={batch[spec]}
                                                    onChange={(e) => handleInputChange(e, batchIndex, spec)}
                                                />
                                            ) : (
                                                <select
                                                    name={spec}
                                                    value={batch[spec]}
                                                    onChange={(e) => handleInputChange(e, batchIndex, spec)}
                                                >
                                                    <option value="">Select</option>
                                                    <option value="S">S</option>
                                                    <option value="U">U</option>
                                                </select>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button type="submit" className="poi-submit-button">Submit</button>
            </form>
        </div>
    );
};

export default ProductOrganolepticInspectionForm;