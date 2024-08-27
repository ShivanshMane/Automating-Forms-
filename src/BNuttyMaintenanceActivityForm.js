import React, { useState, useEffect } from "react";
import "./BNuttyMaintenanceActivityForm.css";

const initialRow = () => ({
  name: "",
  time: "",
  equipmentName: "",
  partsUsed: false,
  partsTakenBack: false,
  partsThrownAway: false,
  descriptionOfProblem: "",
  actionTaken: "",
  toolsReturned: "",
  contractorInitials: "",
  bNuttyInitials: "",
  releaseTime: "",
});

function BNuttyMaintenanceActivityForm() {
  const [rows, setRows] = useState([initialRow()]);
  const [productionDate, setProductionDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setProductionDate(today);
  }, []);

  const handleInputChange = (event, index, field) => {
    const { name, value, type, checked } = event.target;
    const newRows = [...rows];
    newRows[index][field || name] = type === "checkbox" ? checked : value;
    setRows(newRows);
  };

  const handleDateChange = (event) => {
    setProductionDate(event.target.value);
  };

  const addRow = () => {
    setRows([...rows, initialRow()]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", rows);
    // Add logic to send data to backend
  };

  return (
    <div className="maintenance-form">
      <h2>B.NUTTY MAINTENANCE ACTIVITY REPORT 11.2.10</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productionDate">Production Date:</label>
          <input
            type="date"
            id="productionDate"
            name="productionDate"
            value={productionDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productionLine">Production Line or Area:</label>
          <input type="text" id="productionLine" name="productionLine" />
        </div>
        <table className="report-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>TIME</th>
              <th>EQUIPMENT NAME</th>
              <th>PARTS</th>
              <th>DESCRIPTION OF PROBLEM</th>
              <th>ACTION TAKEN</th>
              <th>TOOLS RETURNED</th>
              <th>EQUIPMENT RELEASE</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td><input type="text" name="name" value={row.name} onChange={(e) => handleInputChange(e, index)} /></td>
                <td><input type="time" name="time" value={row.time} onChange={(e) => handleInputChange(e, index)} /></td>
                <td><input type="text" name="equipmentName" value={row.equipmentName} onChange={(e) => handleInputChange(e, index)} /></td>
                <td>
                  <div className="column-group">
                    <label>
                      <input type="checkbox" name="partsUsed" checked={row.partsUsed} onChange={(e) => handleInputChange(e, index, "partsUsed")} /> Used
                    </label>
                    <label>
                      <input type="checkbox" name="partsTakenBack" checked={row.partsTakenBack} onChange={(e) => handleInputChange(e, index, "partsTakenBack")} /> Taken Back
                    </label>
                    <label>
                      <input type="checkbox" name="partsThrownAway" checked={row.partsThrownAway} onChange={(e) => handleInputChange(e, index, "partsThrownAway")} /> Thrown Away
                    </label>
                  </div>
                </td>
                <td><input type="text" name="descriptionOfProblem" value={row.descriptionOfProblem} onChange={(e) => handleInputChange(e, index)} /></td>
                <td><input type="text" name="actionTaken" value={row.actionTaken} onChange={(e) => handleInputChange(e, index)} /></td>
                <td>
                  <div className="column-group">
                    <label>
                      <input type="radio" name={`toolsReturned_${index}`} value="yes" checked={row.toolsReturned === "yes"} onChange={(e) => handleInputChange(e, index, "toolsReturned")} /> Yes
                    </label>
                    <label>
                      <input type="radio" name={`toolsReturned_${index}`} value="no" checked={row.toolsReturned === "no"} onChange={(e) => handleInputChange(e, index, "toolsReturned")} /> No
                    </label>
                  </div>
                </td>
                <td>
                  <div className="column-group">
                    <input type="text" name="contractorInitials" placeholder="Contractor" value={row.contractorInitials} onChange={(e) => handleInputChange(e, index)} />
                    <input type="text" name="bNuttyInitials" placeholder="B.Nutty" value={row.bNuttyInitials} onChange={(e) => handleInputChange(e, index)} />
                    <input type="time" name="releaseTime" placeholder="Time" value={row.releaseTime} onChange={(e) => handleInputChange(e, index)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={addRow} className="add-row-button">Add Row</button>
        <div className="signatures">
          <div className="signature-group">
            <label>Reported By:</label>
            <input type="text" name="reportedBy" />
          </div>
          <div className="signature-group">
            <label>Maintenance Receipt by:</label>
            <input type="text" name="maintenanceReceiptBy" />
          </div>
          <div className="signature-group">
            <label>Temporary Fix by:</label>
            <input type="text" name="temporaryFixBy" />
          </div>
          <div className="signature-group">
            <label>Temporary Fix Date:</label>
            <input type="date" name="temporaryFixDate" />
          </div>
          <div className="signature-group">
            <label>Quality Manager Received:</label>
            <input type="text" name="qualityManagerReceived" />
          </div>
          <div className="signature-group">
            <label>Completion Date:</label>
            <input type="date" name="completionDate" />
          </div>
          <div className="signature-group">
            <label>Completed By:</label>
            <input type="text" name="completedBy" />
          </div>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default BNuttyMaintenanceActivityForm;
