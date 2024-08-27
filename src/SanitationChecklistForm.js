import React, { useState, useEffect } from 'react';
import './SanitationChecklistForm.css';

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
    date: '',
    room: 'Main',
    rows: [
        { time: '', handsWashed: '', noContamination: '', hairNets: '', covered: '', washingHands: '', storedProperly: '', chemicals: '', stocked: '', initials: '' }
    ],
    notes: ''
};

const SanitationCheckListForm = () => {
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        // Auto-populate the date with the current date
        const currentDate = new Date().toISOString().slice(0, 10); // YYYY-MM-DD format
        setFormData(prevState => ({ ...prevState, date: currentDate }));
    }, []);

    const handleInputChange = (e, rowIndex, name) => {
        const updatedRows = [...formData.rows];
        updatedRows[rowIndex][name] = e.target.value;
        setFormData({ ...formData, rows: updatedRows });
    };

    const handleAddRow = () => {
        setFormData({
            ...formData,
            rows: [...formData.rows, { time: '', handsWashed: '', noContamination: '', hairNets: '', covered: '', washingHands: '', storedProperly: '', chemicals: '', stocked: '', initials: '' }]
        });
    };

    const handleDeleteRow = (index) => {
        const updatedRows = formData.rows.filter((_, rowIndex) => rowIndex !== index);
        setFormData({ ...formData, rows: updatedRows });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="sc-form-container">
            <h2 className="sc-form-title">Operational Sanitation Check List</h2>
            <form onSubmit={handleSubmit}>
                <div className="sc-form-row">
                    <div className="sc-form-group">
                        <label>DATE:</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            required
                        />
                    </div>
                    <div className="sc-form-group">
                        <label>ROOM:</label>
                        <select
                            name="room"
                            value={formData.room}
                            onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                            required
                        >
                            <option value="Main">Main</option>
                            <option value="BN">BN</option>
                        </select>
                    </div>
                </div>
                <table className="sc-form-table">
                    <thead>
                        <tr>
                            <th>TIME</th>
                            <th>Hands are being washed</th>
                            <th>No Direct or Indirect Product Contamination</th>
                            <th>Hair Nets are being worn</th>
                            <th>Products and Packaging are covered when not being used</th>
                            <th>Employees are washing their hands as required</th>
                            <th>Products are stored properly</th>
                            <th>All Chemicals are stored properly and labeled</th>
                            <th>Soap and towel dispensers are stocked</th>
                            <th>INITIALS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <td>
                                    <input
                                        type="time"
                                        name="time"
                                        value={row.time}
                                        onChange={(e) => handleInputChange(e, rowIndex, 'time')}
                                        required
                                    />
                                </td>
                                <td>
                                    <select
                                        name="handsWashed"
                                        value={row.handsWashed}
                                        onChange={(e) => handleInputChange(e, rowIndex, 'handsWashed')}
                                        required
                                    >
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select
                                        name="noContamination"
                                        value={row.noContamination}
                                        onChange={(e) => handleInputChange(e, rowIndex, 'noContamination')}
                                        required
                                    >
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select
                                        name="hairNets"
                                        value={row.hairNets}
                                        onChange={(e) => handleInputChange(e, rowIndex, 'hairNets')}
                                        required
                                    >
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select
                                        name="covered"
                                        value={row.covered}
                                        onChange={(e) => handleInputChange(e, rowIndex, 'covered')}
                                        required
                                    >
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select
                                        name="washingHands"
                                        value={row.washingHands}
                                        onChange={(e) => handleInputChange(e, rowIndex, 'washingHands')}
                                        required
                                    >
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select
                                        name="storedProperly"
                                        value={row.storedProperly}
                                        onChange={(e) => handleInputChange(e, rowIndex, 'storedProperly')}
                                        required
                                    >
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select
                                        name="chemicals"
                                        value={row.chemicals}
                                        onChange={(e) => handleInputChange(e, rowIndex, 'chemicals')}
                                        required
                                    >
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select
                                        name="stocked"
                                        value={row.stocked}
                                        onChange={(e) => handleInputChange(e, rowIndex, 'stocked')}
                                        required
                                    >
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select
                                        name="initials"
                                        value={row.initials}
                                        onChange={(e) => handleInputChange(e, rowIndex, 'initials')}
                                        required
                                    >
                                        <option value="">Select Initials</option>
                                        {names.map(name => (
                                            <option key={name} value={name}>{name}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="sc-notes-container">
                    <label>Notes:</label>
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    ></textarea>
                </div>
                <div className="sc-form-buttons">
                    <button type="button" className="sc-add-row-button" onClick={handleAddRow}>Add Row</button>
                    <button type="button" className="sc-delete-row-button" onClick={() => handleDeleteRow(formData.rows.length - 1)}>Delete Row</button>
                    <button type="submit" className="sc-submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default SanitationCheckListForm;
