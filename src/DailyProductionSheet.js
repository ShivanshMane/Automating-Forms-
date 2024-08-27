import React from 'react';
import './DailyProductionSheet.css';

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

const sizes = [
    "2oz", "4oz", "9oz" ,"12oz" ,"16oz" ,"19oz"
];

const stations = [
    "Blending", "Grinding", "Loading", "Roasting", "Sanitation", "Palletizing",
    "Shipping/Filler", "Helper/Floater", "Boxing", "Labeling", "Sealing",
    "Check Weigher", "Scalding", "Filling", "Ingredients", "Sample Jar"
];

const locations = ["Main", "BNutty"];

const DailyProductionSheet = () => {
    return (
        <div className="dps-form-container">
            <h2 className="dps-form-title">2.5.1.4.1 Daily Production Sheet</h2>
            <form>
                <div className="dps-form-row">
                    <div className="dps-form-group">
                        <label>Date:</label>
                        <input type="date" name="date" />
                    </div>
                    <div className="dps-form-group">
                        <label>Shift Leader:</label>
                        <select name="shiftLeader">
                            {names.map(name => (
                                <option key={name} value={name}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="dps-form-group">
                        <label>Size:</label>
                        <select name="size">
                            {sizes.map(size => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                    <div className="dps-form-group">
                        <label>Shift Leader Start Time:</label>
                        <input type="time" name="shiftLeaderStartTime" />
                    </div>
                    <div className="dps-form-group">
                        <label>Shift Leader End Time:</label>
                        <input type="time" name="shiftLeaderEndTime" />
                    </div>
                    <div className="dps-form-group">
                        <label>Delay/Break Time Start:</label>
                        <input type="time" name="delayStartTime" />
                    </div>
                    <div className="dps-form-group">
                        <label>Delay/Break Time End:</label>
                        <input type="time" name="delayEndTime" />
                    </div>
                    <div className="dps-form-group">
                        <label>Location:</label>
                        <select name="location">
                            {locations.map(location => (
                                <option key={location} value={location}>{location}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <table className="dps-form-table">
                    <thead>
                        <tr>
                            <th>Batch #</th>
                            <th>Flavor</th>
                            <th>Size</th>
                            <th>QTY</th>
                            <th>Station</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Delay/Break Time Start</th>
                            <th>Delay/Break Time End</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 20 }, (_, i) => (
                            <tr key={i}>
                                <td>Batch {i + 1}</td>
                                <td><input type="text" name={`flavor${i}`} /></td>
                                <td><select name={`size${i}`}>
                                    {sizes.map(size => (
                                        <option key={size} value={size}>{size}</option>
                                    ))}
                                </select></td>
                                <td><input type="text" name={`qty${i}`} /></td>
                                <td>
                                    <select name={`station${i}`}>
                                        {stations.map(station => (
                                            <option key={station} value={station}>{station}</option>
                                        ))}
                                    </select>
                                </td>
                                <td><input type="time" name={`startTime${i}`} /></td>
                                <td><input type="time" name={`endTime${i}`} /></td>
                                <td><input type="time" name={`delayStart${i}`} /></td>
                                <td><input type="time" name={`delayEnd${i}`} /></td>
                                <td><input type="text" name={`name${i}`} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="dps-form-row">
                    <div className="dps-form-group">
                        <label>Effective Date:</label>
                        <input type="date" name="effectiveDate" />
                    </div>
                    <div className="dps-form-group">
                        <label>Date Updated:</label>
                        <input type="date" name="dateUpdated" />
                    </div>
                    <div className="dps-form-group">
                        <label>Approved by:</label>
                        <input type="text" name="approvedBy" />
                    </div>
                    <div className="dps-form-group">
                        <label>Updated by:</label>
                        <input type="text" name="updatedBy" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default DailyProductionSheet;
