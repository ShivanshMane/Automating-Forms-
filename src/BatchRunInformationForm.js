import React, { useState } from 'react';
import './BatchRunInformationForm.css';

const BatchRunInformationForm = () => {
  const [formData, setFormData] = useState({
    batchControlNumber: '',
    batchProductName: '',
    actualBatchSize: '',
    expectedBatchSize: '',
    batchRunStatus: '',
    batchStart: '',
    batchEnd: '',
    notes: '',
    ingredients: [
      { name: '', actualQuantity: '', expectedQuantity: '', supplierLotDetails: { lotNumber: '', supplierName: '', quantity: '' } }
    ],
    monitoringLogs: ''
  });

  const handleInputChange = (e, index, field) => {
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients[index][field] = e.target.value;
    setFormData({ ...formData, ingredients: updatedIngredients });
  };

  const handleSupplierDetailsChange = (e, index, field) => {
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients[index].supplierLotDetails[field] = e.target.value;
    setFormData({ ...formData, ingredients: updatedIngredients });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [
        ...formData.ingredients,
        { name: '', actualQuantity: '', expectedQuantity: '', supplierLotDetails: { lotNumber: '', supplierName: '', quantity: '' } }
      ]
    });
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = formData.ingredients.filter((_, i) => i !== index);
    setFormData({ ...formData, ingredients: updatedIngredients });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="brf-wrapper">
      <form className="brf-container" onSubmit={handleSubmit}>
        <h2 className="brf-title">Batch Run Information</h2>
        
        <div className="brf-section">
          <label>Batch Control Number: 
            <input type="text" name="batchControlNumber" value={formData.batchControlNumber} onChange={handleFormChange} />
          </label>
          <label>Batch Product Name: 
            <input type="text" name="batchProductName" value={formData.batchProductName} onChange={handleFormChange} />
          </label>
          <label>Actual Batch Run Size: 
            <input type="text" name="actualBatchSize" value={formData.actualBatchSize} onChange={handleFormChange} />
          </label>
          <label>Expected Batch Run Size: 
            <input type="text" name="expectedBatchSize" value={formData.expectedBatchSize} onChange={handleFormChange} />
          </label>
          <label>Batch Run Status: 
            <input type="text" name="batchRunStatus" value={formData.batchRunStatus} onChange={handleFormChange} />
          </label>
          <label>Batch Start: 
            <input type="text" name="batchStart" value={formData.batchStart} onChange={handleFormChange} />
          </label>
          <label>Batch End: 
            <input type="text" name="batchEnd" value={formData.batchEnd} onChange={handleFormChange} />
          </label>
          <label>Notes: 
            <textarea name="notes" value={formData.notes} onChange={handleFormChange}></textarea>
          </label>
        </div>

        <h3 className="brf-subtitle">Bill of Materials Information</h3>
        <div className="brf-ingredients">
          {formData.ingredients.map((ingredient, index) => (
            <div key={index} className="brf-ingredient">
              <h4>{index + 1}. Ingredient Name: 
                <input 
                  type="text" 
                  value={ingredient.name} 
                  onChange={(e) => handleInputChange(e, index, 'name')} 
                />
              </h4>
              <div className="brf-inputblocks">
                <label>Actual Quantity (lbs): 
                  <input 
                    className="brf-label"
                    type="number" 
                    value={ingredient.actualQuantity} 
                    onChange={(e) => handleInputChange(e, index, 'actualQuantity')} 
                  />
                </label>
                <label>Expected Quantity (lbs): 
                  <input 
                    className="brf-label"
                    type="number" 
                    value={ingredient.expectedQuantity} 
                    onChange={(e) => handleInputChange(e, index, 'expectedQuantity')} 
                  />
                </label>
              </div>
              <div className="brf-supplier-details">
                <h5>Supplier Lot Details:</h5>
                <div className="brf-supplier-inputblocks">
                  <label>Lot Number: 
                    <input 
                      className="brf-label"
                      type="text" 
                      value={ingredient.supplierLotDetails.lotNumber} 
                      onChange={(e) => handleSupplierDetailsChange(e, index, 'lotNumber')} 
                    />
                  </label>
                  <label>Supplier Name: 
                    <input 
                      className="brf-label"
                      type="text" 
                      value={ingredient.supplierLotDetails.supplierName} 
                      onChange={(e) => handleSupplierDetailsChange(e, index, 'supplierName')} 
                    />
                  </label>
                  <label>Quantity (lbs): 
                    <input 
                      className="brf-label"
                      type="number" 
                      value={ingredient.supplierLotDetails.quantity} 
                      onChange={(e) => handleSupplierDetailsChange(e, index, 'quantity')} 
                    />
                  </label>
                </div>
              </div>
              <button type="button" className="brf-remove-button" onClick={() => handleRemoveIngredient(index)}>
                Remove Ingredient
              </button>
            </div>
          ))}
        </div>

        <button type="button" onClick={handleAddIngredient} className="brf-add-button">Add Ingredient</button>

        <div className="brf-section">
          <h3>Monitoring Logs</h3>
          <textarea name="monitoringLogs" value={formData.monitoringLogs} onChange={handleFormChange}></textarea>
        </div>

        <button type="submit" className="brf-submit-button">Submit</button>
      </form>
    </div>
  );
};

export default BatchRunInformationForm;
