import React, { useState } from 'react';
import './MetalDetectionMonitoringForm.css';

const MetalDetectionMonitoringForm = () => {
    const [formData, setFormData] = useState({
        effectiveDate: '',
        revisionNumber: '',
        versionNumber: '',
        metalDetectorID: '',
        jobTraveler: '',
        productionLine: '',
        monitorName: '',
        verifierName: '',
        testStandards: {
            fe2mm: false,
            nfe2mm: false,
            ss2_5mm: false
        },
        standardsDetected: null,
        verifiedBy: '',
        verificationTime: '',
        monitoringEntries: Array(6).fill({
            time: '06:00 AM',
            criticalLimits: {
                fe2mm: '',
                nfe2mm: '',
                ss2_5mm: ''
            },
            productEjected: '',
            processingNotes: '',
            initials: ''
        }),
        endOfProduction: {
            standardsPresent: null,
            comments: '',
            monitorSignature: '',
            verifierSignature: '',
            supervisorSignature: ''
        }
    });

    const timeOptions = [
        "06:00 AM", "08:00 AM", "10:00 AM", 
        "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM"
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleStandardChange = (standard) => {
        setFormData(prevState => ({
            ...prevState,
            testStandards: {
                ...prevState.testStandards,
                [standard]: !prevState.testStandards[standard]
            }
        }));
    };

    const handleMonitoringEntryChange = (index, field, value) => {
        const newEntries = formData.monitoringEntries.map((entry, i) => (
            i === index ? { ...entry, [field]: value } : entry
        ));
        setFormData({ ...formData, monitoringEntries: newEntries });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
    };

    return (
        <div className="mdmf-container">
            <h2 className="mdmf-title">11.7.6.2 Metal Detection Monitoring Sheet</h2>

            <div className="mdmf-metadata">
                <div>Effective Date: <input type="date" name="effectiveDate" value={formData.effectiveDate} onChange={handleInputChange} /></div>
                <div>Revision Number: <input type="text" name="revisionNumber" value={formData.revisionNumber} onChange={handleInputChange} /></div>
                <div>Version Number: <input type="text" name="versionNumber" value={formData.versionNumber} onChange={handleInputChange} /></div>
            </div>

            <div className="mdmf-secondary-metadata">
                <div>Metal Detector ID: <input type="text" name="metalDetectorID" value={formData.metalDetectorID} onChange={handleInputChange} /></div>
                <div>Job Traveler #: <input type="text" name="jobTraveler" value={formData.jobTraveler} onChange={handleInputChange} /></div>
                <div>Production Packing Line: <input type="text" name="productionLine" value={formData.productionLine} onChange={handleInputChange} /></div>
                <div>Printed Name of Monitor: <input type="text" name="monitorName" value={formData.monitorName} onChange={handleInputChange} /></div>
                <div>Printed Name of Verifier: <input type="text" name="verifierName" value={formData.verifierName} onChange={handleInputChange} /></div>
            </div>

            <div className="mdmf-verification">
                <h3>Verification Instructions</h3>
                <div>
                    <label>Are the following test standards present? (Select all boxes of standards present)</label>
                    <div className="mdmf-standards-options">
                        <label>
                            <input type="checkbox" name="fe2mm" checked={formData.testStandards.fe2mm} onChange={() => handleStandardChange('fe2mm')} /> 2.0mm Fe
                        </label>
                        <label>
                            <input type="checkbox" name="nfe2mm" checked={formData.testStandards.nfe2mm} onChange={() => handleStandardChange('nfe2mm')} /> 2.0mm NFe
                        </label>
                        <label>
                            <input type="checkbox" name="ss2_5mm" checked={formData.testStandards.ss2_5mm} onChange={() => handleStandardChange('ss2_5mm')} /> 2.5mm Stainless Steel
                        </label>
                    </div>
                </div>

                <div className="mdmf-standards-detected">
                    <label>Has each standard been detected and rejected from the product stream?</label>
                    <div>
                        <button type="button" className={`mdmf-yesno-button ${formData.standardsDetected === 'Yes' ? 'mdmf-yesno-button-selected' : ''}`} onClick={() => setFormData({ ...formData, standardsDetected: 'Yes' })}>Yes</button>
                        <button type="button" className={`mdmf-yesno-button ${formData.standardsDetected === 'No' ? 'mdmf-yesno-button-selected' : ''}`} onClick={() => setFormData({ ...formData, standardsDetected: 'No' })}>No</button>
                    </div>
                    <div>
                        Verified By: <input type="text" name="verifiedBy" value={formData.verifiedBy} onChange={handleInputChange} />
                        Time: <input type="time" name="verificationTime" value={formData.verificationTime} onChange={handleInputChange} />
                    </div>
                </div>
            </div>

            <div className="mdmf-monitoring">
                <h3>Monitoring Section</h3>
                <table className="mdmf-table">
                    
                    
                    <tbody>
  {/* First Row with the "BEGINNING of your shift" question, moved above the header */}
  <tr>
    <td colSpan={6} style={{ textAlign: 'center'}}>
      Are all 3 metal types and sizes 2.0mm Fe, 2.0mm NFe, 2.5mm Stainless Steel present at the BEGINNING of your shift? (if the test standard is missing place the product on hold)
    </td>
    <td colSpan={1} >
      <button type="button" className={`mdmf-yesno-button ${formData.startOfProduction === 'Yes' ? 'mdmf-yesno-button-selected' : ''}`} onClick={() => setFormData({ ...formData, startOfProduction: 'Yes' })}>Yes</button>
      <button type="button" className={`mdmf-yesno-button ${formData.startOfProduction === 'No' ? 'mdmf-yesno-button-selected' : ''}`} onClick={() => setFormData({ ...formData, startOfProduction: 'No' })}>No</button>
    </td>
  </tr>

  {/* Header Row */}
  <tr>
    <th>Time (Military)</th>
    <th>2.0mm Fe</th>
    <th>2.0mm NFe</th>
    <th>2.5mm Stainless Steel</th>
    <th>Product Ejected Properly</th>
    <th>Processing Notes</th>
    <th>Initials Monitor/Verify</th>
  </tr>

  {/* Monitoring Entries */}
  {formData.monitoringEntries.map((entry, index) => (
    <tr key={index}>
      <td>
        <select value={entry.time} onChange={(e) => handleMonitoringEntryChange(index, 'time', e.target.value)}>
          {timeOptions.map((option, i) => (
            <option key={i} value={option}>{option}</option>
          ))}
        </select>
      </td>
      {['fe2mm', 'nfe2mm', 'ss2_5mm'].map((standard, i) => (
        <td key={i}>
          <button type="button" className={`mdmf-pf-button ${entry.criticalLimits[standard] === 'P' ? 'mdmf-pf-button-selected' : ''}`} onClick={() => handleMonitoringEntryChange(index, 'criticalLimits', { ...entry.criticalLimits, [standard]: 'P' })}>P</button>
          <button type="button" className={`mdmf-pf-button ${entry.criticalLimits[standard] === 'F' ? 'mdmf-pf-button-selected' : ''}`} onClick={() => handleMonitoringEntryChange(index, 'criticalLimits', { ...entry.criticalLimits, [standard]: 'F' })}>F</button>
        </td>
      ))}
      <td>
        <button type="button" className={`mdmf-pf-button ${entry.productEjected === 'P' ? 'mdmf-pf-button-selected' : ''}`} onClick={() => handleMonitoringEntryChange(index, 'productEjected', 'P')}>P</button>
        <button type="button" className={`mdmf-pf-button ${entry.productEjected === 'F' ? 'mdmf-pf-button-selected' : ''}`} onClick={() => handleMonitoringEntryChange(index, 'productEjected', 'F')}>F</button>
      </td>
      <td>
        <textarea value={entry.processingNotes} onChange={(e) => handleMonitoringEntryChange(index, 'processingNotes', e.target.value)} />
      </td>
      <td>
        <input type="text" value={entry.initials} onChange={(e) => handleMonitoringEntryChange(index, 'initials', e.target.value)} />
      </td>
    </tr>
  ))}

  {/* Row with merged cells for Close of Production Monitoring */}
  <tr>
    <td colSpan={6} style={{ textAlign: 'center', fontWeight: 'bold' }}>
      Close of Production Monitoring (all production complete)
    </td>
  </tr>

  {/* 7th Row (now becomes the 8th Row) */}
  <tr>
    <td>
      <select value={formData.endOfProduction.time} onChange={(e) => setFormData({ ...formData, endOfProduction: { ...formData.endOfProduction, time: e.target.value } })}>
        {timeOptions.map((option, i) => (
          <option key={i} value={option}>{option}</option>
        ))}
      </select>
    </td>
    {['fe2mm', 'nfe2mm', 'ss2_5mm'].map((standard, i) => (
      <td key={i}>
        <button type="button" className={`mdmf-pf-button ${formData.endOfProduction[standard] === 'P' ? 'mdmf-yesno-button-selected' : ''}`} onClick={() => setFormData({ ...formData, endOfProduction: { ...formData.endOfProduction, [standard]: 'P' } })}>P</button>
        <button type="button" className={`mdmf-pf-button ${formData.endOfProduction[standard] === 'F' ? 'mdmf-yesno-button-selected' : ''}`} onClick={() => setFormData({ ...formData, endOfProduction: { ...formData.endOfProduction, [standard]: 'F' } })}>F</button>
      </td>
    ))}
    <td>
      <button type="button" className={`mdmf-pf-button ${formData.endOfProduction.productEjected === 'P' ? 'mdmf-yesno-button-selected' : ''}`} onClick={() => setFormData({ ...formData, endOfProduction: { ...formData.endOfProduction, productEjected: 'P' } })}>P</button>
      <button type="button" className={`mdmf-pf-button ${formData.endOfProduction.productEjected === 'F' ? 'mdmf-yesno-button-selected' : ''}`} onClick={() => setFormData({ ...formData, endOfProduction: { ...formData.endOfProduction, productEjected: 'F' } })}>F</button>
    </td>
    <td>
      <textarea value={formData.endOfProduction.processingNotes} onChange={(e) => setFormData({ ...formData, endOfProduction: { ...formData.endOfProduction, processingNotes: e.target.value } })} />
    </td>
    <td>
      <input type="text" value={formData.endOfProduction.initials} onChange={(e) => setFormData({ ...formData, endOfProduction: { ...formData.endOfProduction, initials: e.target.value } })} />
    </td>
  </tr>

  {/* 9th Row with question and Yes/No buttons */}
  <tr>
    <td colSpan={6}>
      Are all 3 metal types and sizes 2.0mm Fe, 2.0mm NFe, 2.5mm Stainless Steel present at the End of your shift?
    </td>
    <td>
      <button type="button" className={`mdmf-yesno-button ${formData.endOfProduction.standardsPresent === 'Yes' ? 'mdmf-yesno-button-selected' : ''}`} onClick={() => setFormData({ ...formData, endOfProduction: { ...formData.endOfProduction, standardsPresent: 'Yes' } })}>Yes</button>
      <button type="button" className={`mdmf-yesno-button ${formData.endOfProduction.standardsPresent === 'No' ? 'mdmf-yesno-button-selected' : ''}`} onClick={() => setFormData({ ...formData, endOfProduction: { ...formData.endOfProduction, standardsPresent: 'No' } })}>No</button>
    </td>
  </tr>
</tbody>




                </table>
            </div>

            <div className="mdmf-end-of-production">
                
                <div>Comments:</div>
                <textarea name="comments" value={formData.endOfProduction.comments} onChange={handleInputChange} />

                <div className="mdmf-signatures">
                    <div className="mdmf-signature">Shift Monitor Signature: <input type="text" name="monitorSignature" value={formData.endOfProduction.monitorSignature} onChange={handleInputChange} /></div>
                    <div className="mdmf-signature">Shift Verifier Signature: <input type="text" name="verifierSignature" value={formData.endOfProduction.verifierSignature} onChange={handleInputChange} /></div>
                    <div className="mdmf-signature">Shift Supervisor Signature: <input type="text" name="supervisorSignature" value={formData.endOfProduction.supervisorSignature} onChange={handleInputChange} /></div>
                </div>
            </div>

            <button type="submit" className="mdmf-submit-button">Submit</button>
        </div>
    );
};

export default MetalDetectionMonitoringForm;
