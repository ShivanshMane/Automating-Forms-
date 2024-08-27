import React, { useState, useEffect } from 'react';
import axios from './axiosConfig';
import './EndLinePackageQuality.css';

const productLotData = {
    Main: {
        "RTA Creamy": "T101",
        "PB2 Creamy Allulose": "PB201"
    },
    BN: {
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
    }
};

const sizes = ["2.0 oz", "6.0 oz", "9.0 oz", "12.0 oz", "16.0 oz", "19.0 oz"];

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

const verificationItems = [
    "Date/Lot Codes are correct and legible",
    "Jar/Sachet is Sealed Properly",
    "Label is straight",
    "Label is not wrinkled",
    "Top Label is affixed & centered",
    "Case/Box count is correct",
    "Case/Box packed right side up",
    "Case/Box label is correct",
    "Pallet: Stacking Pattern is correct",
    "Pallet: Boxes are labeled and facing the correct direction",
    "Pallet: Wrapped, Weighed, and labeled",
    "Temperature of Jar"
];

const initialFormData = {
    location: '',
    product: '',
    date: '',
    shift: '',
    lotNumber: '',
    bestByDate: '',
    size: '',
    verification: verificationItems.map(() => Array(6).fill({ time: '', yes: false, no: false, comments: '', initials: '' })),
    additionalComments: ''
};

const EndLinePackageQualityForm = () => {
    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        const currentDate = new Date().toISOString().slice(0, 10);
        setFormData(prevFormData => ({ ...prevFormData, date: currentDate }));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleVerificationChange = (itemIndex, timeIndex, field) => {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const newVerification = formData.verification.map((item, index) =>
            index === itemIndex
                ? item.map((timeBlock, tIndex) =>
                    tIndex === timeIndex
                        ? { ...timeBlock, time: currentTime, [field]: true, comments: field === 'yes' ? '' : timeBlock.comments }
                        : timeBlock
                )
                : item
        );
        setFormData({ ...formData, verification: newVerification });
    };

    const handleCommentsChange = (itemIndex, timeIndex, value) => {
        const newVerification = formData.verification.map((item, index) =>
            index === itemIndex
                ? item.map((timeBlock, tIndex) =>
                    tIndex === timeIndex
                        ? { ...timeBlock, comments: value }
                        : timeBlock
                )
                : item
        );
        setFormData({ ...formData, verification: newVerification });
    };

    const handleInitialsChange = (itemIndex, timeIndex, value) => {
        const newVerification = formData.verification.map((item, index) =>
            index === itemIndex
                ? item.map((timeBlock, tIndex) =>
                    tIndex === timeIndex
                        ? { ...timeBlock, initials: value }
                        : timeBlock
                )
                : item
        );
        setFormData({ ...formData, verification: newVerification });
    };

    const handleLocationChange = (e) => {
        const selectedLocation = e.target.value;
        setFormData({
            ...formData,
            location: selectedLocation,
            product: '',
            lotNumber: ''
        });
    };

    const handleProductChange = (e) => {
        const selectedProduct = e.target.value;
        const date = new Date();
        const currentDate = `${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}${String(date.getFullYear()).slice(-1)}`;
        setFormData({
            ...formData,
            product: selectedProduct,
            lotNumber: `${productLotData[formData.location][selectedProduct]}${currentDate}`
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/endline-package-quality/', formData);
            console.log('Form submitted successfully:', response.data);
            setFormData(initialFormData);  // Reset form after successful submission
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="elpq-form-container">
            <h2>2.5.4.2 End Line Package Quality Verification</h2>
            <table className="elpq-form-table">
                <tbody>
                    <tr>
                        <td><label>QUALITY CONTROL TECHNICIAN:</label></td>
                        <td><input type="text" name="technician" value={formData.technician} onChange={handleInputChange} /></td>
                        <td><label>DATE:</label></td>
                        <td><input type="date" name="date" value={formData.date} onChange={handleInputChange} readOnly /></td>
                    </tr>
                    <tr>
                        <td><label>LOCATION:</label></td>
                        <td>
                            <select name="location" value={formData.location} onChange={handleLocationChange} required>
                                <option value="">Select Location</option>
                                <option value="Main">Main</option>
                                <option value="BN">BN</option>
                            </select>
                        </td>
                        <td><label>PRODUCT:</label></td>
                        <td>
                            <select name="product" value={formData.product} onChange={handleProductChange} required disabled={!formData.location}>
                                <option value="">Select Product</option>
                                {formData.location && Object.keys(productLotData[formData.location]).map((product) => (
                                    <option key={product} value={product}>{product}</option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>LOT #:</label></td>
                        <td><input type="text" name="lotNumber" value={formData.lotNumber} readOnly required /></td>
                        <td><label>SHIFT:</label></td>
                        <td>
                            <select name="shift" value={formData.shift} onChange={handleInputChange} required>
                                <option value="">Select Shift</option>
                                <option value="Shift 1">Shift 1</option>
                                <option value="Shift 2">Shift 2</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>BEST BY DATE:</label></td>
                        <td><input type="date" name="bestByDate" value={formData.bestByDate} onChange={handleInputChange} required /></td>
                        <td><label>SIZE:</label></td>
                        <td>
                            <select name="size" value={formData.size} onChange={handleInputChange} required>
                                <option value="">Select Size</option>
                                {sizes.map((size, index) => (
                                    <option key={index} value={size}>{size}</option>
                                ))}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>

            <h3>Verification</h3>
            <div className="elpq-verification-container">
                <table className="elpq-verification-table">
                    <thead>
                        <tr>
                            <th>Verify and Inspect the following</th>
                            <th>Times</th>
                            <th>Initials</th>
                        </tr>
                    </thead>
                    <tbody>
                        {verificationItems.map((item, itemIndex) => (
                            <tr key={itemIndex}>
                                <td>{item}</td>
                                <td>
                                    {Array.from({ length: 6 }).map((_, timeIndex) => (
                                        <div key={timeIndex} className="elpq-time-section">
                                            <input
                                                type="text"
                                                name={`time_${itemIndex}_${timeIndex}`}
                                                value={formData.verification[itemIndex][timeIndex].time}
                                                readOnly
                                                placeholder="Time"
                                            />
                                            <div className="elpq-radio-container">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={`verification_${itemIndex}_${timeIndex}`}
                                                        checked={formData.verification[itemIndex][timeIndex].yes}
                                                        onChange={() => handleVerificationChange(itemIndex, timeIndex, 'yes')}
                                                    /> Yes
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={`verification_${itemIndex}_${timeIndex}`}
                                                        checked={formData.verification[itemIndex][timeIndex].no}
                                                        onChange={() => handleVerificationChange(itemIndex, timeIndex, 'no')}
                                                    /> No
                                                </label>
                                            </div>
                                            {formData.verification[itemIndex][timeIndex].no && (
                                                <textarea
                                                    name={`comments_${itemIndex}_${timeIndex}`}
                                                    value={formData.verification[itemIndex][timeIndex].comments}
                                                    onChange={(e) => handleCommentsChange(itemIndex, timeIndex, e.target.value)}
                                                    placeholder="Comments"
                                                    className="elpq-comment-box"
                                                ></textarea>
                                            )}
                                        </div>
                                    ))}
                                </td>
                                <td>
                                    {Array.from({ length: 6 }).map((_, timeIndex) => (
                                        <div key={timeIndex} className="elpq-initials-section">
                                            <select
                                                name={`initials_${itemIndex}_${timeIndex}`}
                                                value={formData.verification[itemIndex][timeIndex].initials}
                                                onChange={(e) => handleInitialsChange(itemIndex, timeIndex, e.target.value)}
                                                required
                                            >
                                                <option value="">Select Initials</option>
                                                {names.map((name, index) => (
                                                    <option key={index} value={name}>{name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h3>Additional Comments</h3>
            <textarea
                name="additionalComments"
                value={formData.additionalComments}
                onChange={handleInputChange}
                placeholder="Enter any additional comments here..."
                className="elpq-comment-box"
            ></textarea>

            <button type="submit" className="elpq-submit-button">Submit</button>
        </form>
    );
};

export default EndLinePackageQualityForm;
