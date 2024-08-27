import React, { useState } from 'react';
import './JarsLidsTrackingForm.css';

const initialFormData = {
    date: '',
    jars: [{ lotNumber: '', numberOfCases: '' }],
    lids: [{ lotNumber: '', numberOfCases: '' }],
};

const JarsLidsTrackingForm = () => {
    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (event, index, section, name) => {
        const { value } = event.target;
        const sectionData = [...formData[section]];
        sectionData[index][name] = value;
        setFormData({ ...formData, [section]: sectionData });
    };

    const addRow = (section) => {
        setFormData({
            ...formData,
            [section]: [...formData[section], { lotNumber: '', numberOfCases: '' }],
        });
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Add logic to send data to backend
    };

    return (
        <div className="jlt-container">
            <h1>Jars & Lids Tracking Sheet</h1>
            <form onSubmit={handleSubmit}>
                <div className="jlt-header">
                    <label htmlFor="date">DATE:</label>
                    <input type="date" id="date" name="date" value={formData.date} onChange={handleFormChange} />
                </div>
                <div className="jlt-section">
                    <h2>JARS</h2>
                    <table className="jlt-table">
                        <thead>
                            <tr>
                                <th>LOT #</th>
                                <th># OF CASES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.jars.map((row, index) => (
                                <tr key={index}>
                                    <td>
                                        <input type="text" name="lotNumber" value={row.lotNumber} onChange={(event) => handleInputChange(event, index, 'jars', 'lotNumber')} />
                                    </td>
                                    <td>
                                        <input type="number" name="numberOfCases" value={row.numberOfCases} onChange={(event) => handleInputChange(event, index, 'jars', 'numberOfCases')} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className="jlt-add-row-button" onClick={() => addRow('jars')}>Add Row</button>
                </div>
                <div className="jlt-section">
                    <h2>LIDS</h2>
                    <table className="jlt-table">
                        <thead>
                            <tr>
                                <th>LOT #</th>
                                <th># OF CASES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.lids.map((row, index) => (
                                <tr key={index}>
                                    <td>
                                        <input type="text" name="lotNumber" value={row.lotNumber} onChange={(event) => handleInputChange(event, index, 'lids', 'lotNumber')} />
                                    </td>
                                    <td>
                                        <input type="number" name="numberOfCases" value={row.numberOfCases} onChange={(event) => handleInputChange(event, index, 'lids', 'numberOfCases')} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className="jlt-add-row-button" onClick={() => addRow('lids')}>Add Row</button>
                </div>
                <button type="submit" className="jlt-submit-button">Submit</button>
            </form>
        </div>
    );
};

export default JarsLidsTrackingForm;
