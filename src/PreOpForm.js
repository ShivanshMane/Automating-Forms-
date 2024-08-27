import React, { useState } from 'react';
import './PreOpForm.css';

const initialRow = {
  preop: '',
  deficiencyFound: '',
  correctiveActions: ''
};

const sections = [
  {
    title: "Main Production",
    items: [
      "Floor - Drain Main Production Floor",
      "Walls",
      "Ceiling - Lights",
      "Hand Wash Sink",
      "Garbage (empty and clean cans)",
      "Restroom - GMP Hall",
      "Meritech Hand Washing Station"
    ]
  },
  {
    title: "Storage Areas",
    items: [
      "Storage - Finished Products",
      "Storage - Ingredients",
      "Storage - Packaging",
      "Warehouse Floor"
    ]
  },
  {
    title: "Equipment & Utensils",
    subsections: [
      {
        title: "ZONE #1",
        items: [
          "Large Peanut Grinder",
          "Big Jar Filler",
          "Scales",
          "Stainless Steel Utensils",
          "Chester Jensen Kettle #1",
          "Chester Jensen Kettle #2"
        ]
      },
      {
        title: "ZONE #2",
        items: [
          "Label Machine",
          "Lid Machine Tightener",
          "Lid Sealer",
          "Dishwasher",
          "Stainless Steel Tables",
          "3 Compartment Sink",
          "Hand Wash Sink",
          "Utensil Racks",
          "Refrigerator"
        ]
      }
    ]
  },
  {
    title: "Office Area",
    items: [
      "Break - Lunch Room",
      "Restroom - Offices",
      "Garbage (empty and clean cans)",
      "Compartment Sink"
    ]
  }
];

const PreOpForm = () => {
  const [rows, setRows] = useState({});

  const handleInputChange = (event, sectionIndex, itemIndex, field) => {
    const { value } = event.target;
    const newRows = { ...rows };
    if (!newRows[sectionIndex]) {
      newRows[sectionIndex] = [];
    }
    if (!newRows[sectionIndex][itemIndex]) {
      newRows[sectionIndex][itemIndex] = { ...initialRow };
    }
    newRows[sectionIndex][itemIndex][field] = value;
    setRows(newRows);
  };

  const handlePreOpClick = (sectionIndex, itemIndex, value) => {
    const newRows = { ...rows };
    if (!newRows[sectionIndex]) {
      newRows[sectionIndex] = [];
    }
    if (!newRows[sectionIndex][itemIndex]) {
      newRows[sectionIndex][itemIndex] = { ...initialRow };
    }
    newRows[sectionIndex][itemIndex].preop = value;
    setRows(newRows);
  };

  const getPobuttonStyle = (sectionIndex, itemIndex, value) => {
    return rows[sectionIndex]?.[itemIndex]?.preop === value ? 'pobutton-selected' : '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", rows);
    // Add logic to send data to the backend
  };

  return (
    <div className="preop-form">
      <h2>PreOp Form</h2>
      <p className="instructions">
        Instructions: Under the column "PRE-OP" (observations made prior to the start of operations) record the following codes: "AC" = Acceptable, "DEF" = Deficient. If deficiency is found, write under that column the nature of deficiency. Then under the corrective actions column, write how the issue was eliminated.
      </p>
      <form onSubmit={handleSubmit}>
        <table className="preop-table">
          <thead>
            <tr>
              <th>Section</th>
              <th>Pre-Op</th>
              <th>Deficiency Found</th>
              <th>Corrective Actions</th>
            </tr>
          </thead>
          <tbody>
            {sections.map((section, sectionIndex) => (
              <>
                <tr key={section.title}>
                  <td colSpan="4" className="section-title">{section.title}</td>
                </tr>
                {section.items && section.items.map((item, itemIndex) => (
                  <tr key={item}>
                    <td>{item}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handlePreOpClick(sectionIndex, itemIndex, 'AC')}
                        className={`pobutton ${getPobuttonStyle(sectionIndex, itemIndex, 'AC')}`}
                      >
                        AC
                      </button>
                      <button
                        type="button"
                        onClick={() => handlePreOpClick(sectionIndex, itemIndex, 'DEF')}
                        className={`pobutton ${getPobuttonStyle(sectionIndex, itemIndex, 'DEF')}`}
                      >
                        DEF
                      </button>
                    </td>
                    <td>
                      <textarea
                        value={rows[sectionIndex]?.[itemIndex]?.deficiencyFound || ''}
                        onChange={(e) => handleInputChange(e, sectionIndex, itemIndex, 'deficiencyFound')}
                        rows="2"
                      />
                    </td>
                    <td>
                      <textarea
                        value={rows[sectionIndex]?.[itemIndex]?.correctiveActions || ''}
                        onChange={(e) => handleInputChange(e, sectionIndex, itemIndex, 'correctiveActions')}
                        rows="2"
                      />
                    </td>
                  </tr>
                ))}
                {section.subsections && section.subsections.map((subsection, subsectionIndex) => (
                  <>
                    <tr key={subsection.title}>
                      <td colSpan="4" className="subsection-title">{subsection.title}</td>
                    </tr>
                    {subsection.items.map((item, itemIndex) => (
                      <tr key={item}>
                        <td>{item}</td>
                        <td>
                          <button
                            type="button"
                            onClick={() => handlePreOpClick(sectionIndex + '-' + subsectionIndex, itemIndex, 'AC')}
                            className={`pobutton ${getPobuttonStyle(sectionIndex + '-' + subsectionIndex, itemIndex, 'AC')}`}
                          >
                            AC
                          </button>
                          <button
                            type="button"
                            onClick={() => handlePreOpClick(sectionIndex + '-' + subsectionIndex, itemIndex, 'DEF')}
                            className={`pobutton ${getPobuttonStyle(sectionIndex + '-' + subsectionIndex, itemIndex, 'DEF')}`}
                          >
                            DEF
                          </button>
                        </td>
                        <td>
                          <textarea
                            value={rows[sectionIndex + '-' + subsectionIndex]?.[itemIndex]?.deficiencyFound || ''}
                            onChange={(e) => handleInputChange(e, sectionIndex + '-' + subsectionIndex, itemIndex, 'deficiencyFound')}
                            rows="2"
                          />
                        </td>
                        <td>
                          <textarea
                            value={rows[sectionIndex + '-' + subsectionIndex]?.[itemIndex]?.correctiveActions || ''}
                            onChange={(e) => handleInputChange(e, sectionIndex + '-' + subsectionIndex, itemIndex, 'correctiveActions')}
                            rows="2"
                          />
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </>
            ))}
          </tbody>
        </table>
        <button type="submit" className="pobutton-submit">Submit</button>
      </form>
    </div>
  );
};

export default PreOpForm;
