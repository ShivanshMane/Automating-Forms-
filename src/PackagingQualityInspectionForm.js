import React, { useState } from 'react';
import './PackagingQualityInspectionForm.css';

const initialWeights = Array(12).fill().map(() => Array(5).fill(0)); // Initialize 12 columns, each with 5 weight slots
const initialTimes = Array(12).fill('07:00 AM'); // Initialize times for each column

const jarOunceOptions = ["2.0 oz", "9.0 oz", "12.0 oz", "16.0 oz", "19.0 oz"];

const PackagingQualityInspectionForm = () => {
    const [formData, setFormData] = useState({
        lotNumber: '',
        workOrder: '',
        productDescription: '',
        date: new Date().toLocaleDateString(), // Autopopulated date
        shift: '',
        inspectorName: '',
        fillerNumber: '',
        line: '',
        targetNetWeight: '',
        tareWeight: '',
        jarOunce: '',
        times: initialTimes,
        weights: initialWeights,
        bottleInspection: Array(4).fill().map(() => Array(12).fill('')),
        caseInspection: Array(4).fill().map(() => Array(12).fill('')),
        comments: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleWeightChange = (colIndex, rowIndex, value) => {
        const newWeights = [...formData.weights];
        newWeights[colIndex][rowIndex] = parseFloat(value) || 0;

        setFormData({ ...formData, weights: newWeights });
    };

    const handleYesNoClick = (timeIndex, type, rowIndex, value) => {
        const updatedSection = formData[type].map((row, rIndex) =>
            rIndex === rowIndex
                ? row.map((col, cIndex) =>
                    cIndex === timeIndex ? value : col
                )
                : row
        );

        setFormData({ ...formData, [type]: updatedSection });
    };

    const getYesNoButtonStyle = (timeIndex, type, rowIndex, value) => {
        return formData[type][rowIndex][timeIndex] === value ? 'pqi-yesno-button-selected' : '';
    };

    const handleTimeChange = (index, value) => {
        const newTimes = [...formData.times];
        newTimes[index] = value;
        setFormData({ ...formData, times: newTimes });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
        // Submit form data to the backend or handle accordingly
    };

    const timeOptions = [
        "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", 
        "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", 
        "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"
    ];
    
    return (
        <div className="pqi-form-container">
            <h2 className="pqi-form-title">SOP 2.5.4.3 Packaging Quality Inspection</h2>
            <form onSubmit={handleSubmit}>
                {/* Form Header Fields */}
                <div className="pqi-info-group">
                    <div className="pqi-info-row">
                        <label>Lot Number:</label>
                        <input type="text" name="lotNumber" value={formData.lotNumber} onChange={handleInputChange} />
                    </div>
                    <div className="pqi-info-row">
                        <label>Work Order #:</label>
                        <input type="text" name="workOrder" value={formData.workOrder} onChange={handleInputChange} />
                    </div>
                    <div className="pqi-info-row">
                        <label>Product Description:</label>
                        <input type="text" name="productDescription" value={formData.productDescription} onChange={handleInputChange} />
                    </div>
                    <div className="pqi-info-row">
                        <label>Date:</label>
                        <input type="text" name="date" value={formData.date} readOnly />
                    </div>
                    <div className="pqi-info-row">
                        <label>Shift:</label>
                        <input type="text" name="shift" value={formData.shift} onChange={handleInputChange} />
                    </div>
                    <div className="pqi-info-row">
                        <label>Inspector Name:</label>
                        <input type="text" name="inspectorName" value={formData.inspectorName} onChange={handleInputChange} />
                    </div>
                    <div className="pqi-info-row">
                        <label>Filler Number:</label>
                        <input type="text" name="fillerNumber" value={formData.fillerNumber} onChange={handleInputChange} />
                    </div>
                    <div className="pqi-info-row">
                        <label>Line:</label>
                        <input type="text" name="line" value={formData.line} onChange={handleInputChange} />
                    </div>
                    <div className="pqi-info-row">
                        <label>Target Net Weight:</label>
                        <input type="text" name="targetNetWeight" value={formData.targetNetWeight} onChange={handleInputChange} />
                    </div>
                    <div className="pqi-info-row">
                        <label>Tare Weight:</label>
                        <input type="text" name="tareWeight" value={formData.tareWeight} onChange={handleInputChange} />
                    </div>
                    <div className="pqi-info-row">
                        <label>Jar Ounce:</label>
                        <select name="jarOunce" value={formData.jarOunce} onChange={handleInputChange}>
                            {jarOunceOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Time and Weight Table */}
                <div className="pqi-table-container">
                    <table className="pqi-weight-table">
                        <thead>
                            <tr>
                                <th>Actual Time</th>
                                {formData.times.map((time, index) => (
                                    <th key={index}>
                                        <select value={time} onChange={(e) => handleTimeChange(index, e.target.value)}>
                                            {timeOptions.map((option, i) => (
                                                <option key={i} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {formData.weights[0].map((_, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td>Weight {rowIndex + 1}</td>
                                    {formData.weights.map((column, colIndex) => (
                                        <td key={colIndex}>
                                            <input
                                                type="number"
                                                value={column[rowIndex]}
                                                onChange={(e) => handleWeightChange(colIndex, rowIndex, e.target.value)}
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            <tr>
                                <td>Average</td>
                                {formData.weights.map((column, index) => (
                                    <td key={index}>{(column.reduce((a, b) => a + b, 0) / column.length).toFixed(2)}</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>

                    {/* Bottle Inspection Table */}
                    <table className="pqi-inspection-table">
                        <thead>
                            <tr>
                                <th colSpan="13">Bottle Inspection</th>
                            </tr>
                        </thead>
                        <tbody>
                            {['Jar Date Code Correct, legible', 'Cap is sufficiently torqued', 'Jar Induction Seal Intact', 'Jar temp is 98°F or less'].map((item, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td>{item}</td>
                                    {formData.bottleInspection[rowIndex].map((_, timeIndex) => (
                                        <td key={timeIndex}>
                                            <button
                                                type="button"
                                                onClick={() => handleYesNoClick(timeIndex, 'bottleInspection', rowIndex, 'Yes')}
                                                className={`pqi-yesno-button ${getYesNoButtonStyle(timeIndex, 'bottleInspection', rowIndex, 'Yes')}`}
                                            >
                                                Yes
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleYesNoClick(timeIndex, 'bottleInspection', rowIndex, 'No')}
                                                className={`pqi-yesno-button ${getYesNoButtonStyle(timeIndex, 'bottleInspection', rowIndex, 'No')}`}
                                            >
                                                No
                                            </button>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Case Inspection Table */}
                    <table className="pqi-inspection-table">
                        <thead>
                            <tr>
                                <th colSpan="13">Case Inspection</th>
                            </tr>
                        </thead>
                        <tbody>
                            {['Case is taped correctly', 'Case Count', 'Case label correct (Attach on Back)', 'Initials of Checker'].map((item, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td>{item}</td>
                                    {formData.caseInspection[rowIndex].map((_, timeIndex) => (
                                        <td key={timeIndex}>
                                            <button
                                                type="button"
                                                onClick={() => handleYesNoClick(timeIndex, 'caseInspection', rowIndex, 'Yes')}
                                                className={`pqi-yesno-button ${getYesNoButtonStyle(timeIndex, 'caseInspection', rowIndex, 'Yes')}`}
                                            >
                                                Yes
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleYesNoClick(timeIndex, 'caseInspection', rowIndex, 'No')}
                                                className={`pqi-yesno-button ${getYesNoButtonStyle(timeIndex, 'caseInspection', rowIndex, 'No')}`}
                                            >
                                                No
                                            </button>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Comments Section */}
                <div className="pqi-comments-section">
                    <label>Comments/Corrective Actions:</label>
                    <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit" className="pqi-submit-button">Submit</button>
            </form>
        </div>
    );
};

export default PackagingQualityInspectionForm;
