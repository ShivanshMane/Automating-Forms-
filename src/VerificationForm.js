import React, { useState } from 'react';
import './VerificationForm.css'; // Make sure this path is correct

const VerificationForm = () => {
  const [pallets, setPallets] = useState(Array(20).fill({ pallet: '', time: '' }));

  const handleInputChange = (index, event) => {
    const values = [...pallets];
    values[index][event.target.name] = event.target.value;
    setPallets(values);
  };

  const handleAddPallet = () => {
    setPallets([...pallets, { pallet: '', time: '' }]);
  };

  const handleRemovePallet = (index) => {
    const values = [...pallets];
    values.splice(index, 1);
    setPallets(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { pallets });
  };

  return (
    <div className="vf-form-container">
      <h2>SOP Pallet Dock Door Verification Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="vf-form-group">
          <label>Today's LOT/LOTE HOY:</label>
          <input type="text" name="lot" className="vf-large-input" />
        </div>
        <div className="vf-form-row">
          <div className="vf-form-group">
            <label>Date/Fecha:</label>
            <input type="date" name="date" />
          </div>
          <div className="vf-form-group">
            <label>Time/Tiempo:</label>
            <input type="time" name="time" />
          </div>
        </div>
        <div className="vf-form-group">
          <label>Mixed Pallet/Paleta Mixta:</label>
          <input type="text" name="mixedPallet" className="vf-large-input" />
        </div>
        <div className="vf-form-group">
          <label>Previous Shift/Turno anterior:</label>
          <input type="text" name="previousShift" className="vf-large-input" />
        </div>
        <div className="vf-form-group">
          <label>Current Shift/Turno hoy:</label>
          <input type="text" name="currentShift" className="vf-large-input" />
        </div>
        {pallets.map((pallet, index) => (
          <div key={index} className="vf-form-row">
            <div className="vf-form-group">
              <label>Pallet #{index + 1}:</label>
              <input
                type="text"
                name="pallet"
                value={pallet.pallet}
                onChange={(event) => handleInputChange(index, event)}
              />
            </div>
            <div className="vf-form-group">
              <label>Time/Tiempo:</label>
              <input
                type="time"
                name="time"
                value={pallet.time}
                onChange={(event) => handleInputChange(index, event)}
              />
            </div>
            <button
              type="button"
              onClick={() => handleRemovePallet(index)}
              className="vf-remove-button"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="vf-form-group">
          <button
            type="button"
            onClick={handleAddPallet}
            className="vf-add-button"
          >
            Add Pallet
          </button>
        </div>
        <div className="vf-form-group">
          <label>Partial Ending Pallet Case Count/Paleta Parcial Termina:</label>
          <input type="text" name="partialEndingCount" className="vf-large-input" />
        </div>
        <div className="vf-form-group">
          <label>Verifier #1:</label>
          <input type="text" name="verifier1" className="vf-large-input" />
        </div>
        <button type="submit" className="vf-submit-button">Submit</button>
      </form>
    </div>
  );
};

export default VerificationForm;
