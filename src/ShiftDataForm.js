import React, { useState } from 'react';

const ShiftDataForm = ({ onDataSubmit }) => {
    const [shiftData, setShiftData] = useState({
        jarsProduced: '',
        jarsLost: '',
        jarsReworked: '',
        palletReady: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShiftData({ ...shiftData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onDataSubmit(shiftData);
        setShiftData({
            jarsProduced: '',
            jarsLost: '',
            jarsReworked: '',
            palletReady: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Jars Produced:</label>
                <input
                    type="number"
                    name="jarsProduced"
                    value={shiftData.jarsProduced}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Jars Lost:</label>
                <input
                    type="number"
                    name="jarsLost"
                    value={shiftData.jarsLost}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Jars Reworked:</label>
                <input
                    type="number"
                    name="jarsReworked"
                    value={shiftData.jarsReworked}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Pallet Ready:</label>
                <input
                    type="number"
                    name="palletReady"
                    value={shiftData.palletReady}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ShiftDataForm;
