import React, { useState } from 'react';
import './ProductReleaseDocumentForm.css';

const ProductReleaseDocumentForm = () => {
  const [formData, setFormData] = useState({
    workOrder: '',
    lotNumber: '',
    criticalControlPoints: '',
    qualityAccuracy: '',
    rawMaterialTraceability: '',
    finishedGoodTraceability: '',
    qualityManager: '',
    productionManager: '',
    conditions: {
      criticalControlPoints: null,
      qualityAccuracy: null,
      rawMaterialTraceability: null,
      finishedGoodTraceability: null
    },
    revisionHistory: [
      { reviewed: '3/3/2022', proposedChange: 'New Document' },
      { reviewed: '2/22/2023', proposedChange: 'Annual Review\nUpdated company logo\nAdded lot number' },
      { reviewed: '4/10/2024', proposedChange: 'Annual Review' }
    ]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleConditionChange = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      conditions: {
        ...prevState.conditions,
        [field]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="prd-container">
      <div className="prd-header">
        <div className="prd-logo">
          <img src="path-to-logo.png" alt="BNutty Logo" />
        </div>
        <div className="prd-title">
          <strong>Title:</strong> 2.4.7.1 Product Release Document
        </div>
        <div className="prd-meta">
          <div>
            <strong>Effective Date:</strong> 03/03/2022
          </div>
          <div>
            <strong>Revision Number:</strong> 1
          </div>
          <div>
            <strong>Version Number:</strong> 1
          </div>
        </div>
      </div>

      <div className="prd-body">
        <h3>1.0 PROCEDURE</h3>
        <p>All production runs are subject to this review of critical food safety and quality attributes.</p>

        <h3>2.0 RESPONSIBILITY</h3>
        <p>2.1. The Quality Manager is responsible for reviewing the critical to food safety attributes below.</p>
        <p>2.2. The Production Manager is responsible for the critical to operation attributes below.</p>

        <h3>3.0 The Document</h3>
        <p>The document shall be completed and attached to all production records relating to a specific work order / production run.</p>
        <p>3.1. Initial in the reviewed column of the document after verification of the documentation required.</p>

        <div className="prd-form-section">
          <label>Work Order#: <input type="text" name="workOrder" value={formData.workOrder} onChange={handleInputChange} /></label>
          <label>Lot#: <input type="text" name="lotNumber" value={formData.lotNumber} onChange={handleInputChange} /></label>
        </div>

        <div className="prd-form-section">
          <label>Critical Control Points: <input type="text" name="criticalControlPoints" value={formData.criticalControlPoints} onChange={handleInputChange} /></label>
          <div className="prd-yesno-buttons">
            <button
              type="button"
              className={`prd-yesno-button ${formData.conditions.criticalControlPoints === 'Yes' ? 'prd-yesno-button-selected' : ''}`}
              onClick={() => handleConditionChange('criticalControlPoints', 'Yes')}
            >
              Yes
            </button>
            <button
              type="button"
              className={`prd-yesno-button ${formData.conditions.criticalControlPoints === 'No' ? 'prd-yesno-button-selected' : ''}`}
              onClick={() => handleConditionChange('criticalControlPoints', 'No')}
            >
              No
            </button>
          </div>
        </div>

        <div className="prd-form-section">
          <label>Quality Accuracy: <input type="text" name="qualityAccuracy" value={formData.qualityAccuracy} onChange={handleInputChange} /></label>
          <div className="prd-yesno-buttons">
            <button
              type="button"
              className={`prd-yesno-button ${formData.conditions.qualityAccuracy === 'Yes' ? 'prd-yesno-button-selected' : ''}`}
              onClick={() => handleConditionChange('qualityAccuracy', 'Yes')}
            >
              Yes
            </button>
            <button
              type="button"
              className={`prd-yesno-button ${formData.conditions.qualityAccuracy === 'No' ? 'prd-yesno-button-selected' : ''}`}
              onClick={() => handleConditionChange('qualityAccuracy', 'No')}
            >
              No
            </button>
          </div>
        </div>

        <div className="prd-form-section">
          <label>Raw Material Traceability: <input type="text" name="rawMaterialTraceability" value={formData.rawMaterialTraceability} onChange={handleInputChange} /></label>
          <div className="prd-yesno-buttons">
            <button
              type="button"
              className={`prd-yesno-button ${formData.conditions.rawMaterialTraceability === 'Yes' ? 'prd-yesno-button-selected' : ''}`}
              onClick={() => handleConditionChange('rawMaterialTraceability', 'Yes')}
            >
              Yes
            </button>
            <button
              type="button"
              className={`prd-yesno-button ${formData.conditions.rawMaterialTraceability === 'No' ? 'prd-yesno-button-selected' : ''}`}
              onClick={() => handleConditionChange('rawMaterialTraceability', 'No')}
            >
              No
            </button>
          </div>
        </div>

        <div className="prd-form-section">
          <label>Finished Good Traceability: <input type="text" name="finishedGoodTraceability" value={formData.finishedGoodTraceability} onChange={handleInputChange} /></label>
          <div className="prd-yesno-buttons">
            <button
              type="button"
              className={`prd-yesno-button ${formData.conditions.finishedGoodTraceability === 'Yes' ? 'prd-yesno-button-selected' : ''}`}
              onClick={() => handleConditionChange('finishedGoodTraceability', 'Yes')}
            >
              Yes
            </button>
            <button
              type="button"
              className={`prd-yesno-button ${formData.conditions.finishedGoodTraceability === 'No' ? 'prd-yesno-button-selected' : ''}`}
              onClick={() => handleConditionChange('finishedGoodTraceability', 'No')}
            >
              No
            </button>
          </div>
        </div>

        <p>Product complies with company and customer requirements and all applicable regulatory requirements. Product is hereby released to ship.</p>

        <div className="prd-signatures">
          <label>Quality Manager: <input type="text" name="qualityManager" value={formData.qualityManager} onChange={handleInputChange} /></label>
          <label>Date: <input type="date" name="qualityManagerDate" onChange={handleInputChange} /></label>
        </div>

        <div className="prd-signatures">
          <label>Production Manager: <input type="text" name="productionManager" value={formData.productionManager} onChange={handleInputChange} /></label>
          <label>Date: <input type="date" name="productionManagerDate" onChange={handleInputChange} /></label>
        </div>

        <div className="prd-revision-history">
          <h3>4.0 DOCUMENT REVISION HISTORY</h3>
          <table>
            <thead>
              <tr>
                <th>REVIEWED</th>
                <th>PROPOSED CHANGE</th>
              </tr>
            </thead>
            <tbody>
              {formData.revisionHistory.map((item, index) => (
                <tr key={index}>
                  <td>{item.reviewed}</td>
                  <td>{item.proposedChange}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="prd-submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ProductReleaseDocumentForm;
