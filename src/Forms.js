import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css'; // Ensure this path is correct and the file exists

const Forms = () => {
  return (
    <div className="forms-container">
      <h1>Forms</h1>
      <ul>
        <li>
          <Link to="/forms/endline-package-quality">
            EndLine Package Quality
          </Link>
        </li>
        <li>
          <Link to="/forms/production-end-of-shift-count">
            Production End Of Shift Count
          </Link>
        </li>
        <li>
          <Link to="/forms/sanitation-checklist">
            Sanitation Checklist
          </Link>
        </li>
        <li>
          <Link to="/forms/jars-lids-tracking">
            Jars and Lids Tracking
          </Link>
        </li>
        <li>
          <Link to="/forms/product-organoleptic-inspection"> {/* Add this line */}
            Product Organoleptic Inspection {/* Add this line */}
          </Link> {/* Add this line */}
        </li> {/* Add this line */}
        <li>
          <Link to="/forms/daily-production-sheet">
          Daily Production Sheet
          </Link>
        </li>
        <li>
          <Link to="/forms/verification-form">
          Verification Form
          </Link>
        </li>
        <li>
          <Link to="/forms/maintenance">
          BNutty Maintenance Activity Form
          </Link>
        </li>
        <li>
          <Link to="/forms/package-quality-inspection">
          Packaging Quality Inspection Form
          </Link>
        </li>
        <li>
          <Link to="/forms/metal-detection-monitoring">
          Metal Detection Monitoring Form
          </Link>
        </li>
        <li>
          <Link to="/forms/preop">
          Pre Operation Form
          </Link>
        </li>
        <li>
          <Link to="/forms/product-release-document">
          Product Release Document Form
          </Link>
        </li>
        <li>
          <Link to="/forms/batch-run-information">
          Batch Run Information Form
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Forms;
