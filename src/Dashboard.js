import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse, faCheckCircle, faArrowRight, faChartLine, faList } from '@fortawesome/free-solid-svg-icons';
import ShiftChart from './ShiftChart';
import ShiftDataForm from './ShiftDataForm';

const MainContent = () => {
    const [shiftData, setShiftData] = useState({
        jarsProduced: [150, 200, 180],
        jarsLost: [5, 10, 7],
        jarsReworked: [3, 2, 4],
        palletReady: [2, 3, 2]
    });

    const handleDataSubmit = (newData) => {
        setShiftData(prevData => ({
            jarsProduced: [...prevData.jarsProduced, parseInt(newData.jarsProduced)],
            jarsLost: [...prevData.jarsLost, parseInt(newData.jarsLost)],
            jarsReworked: [...prevData.jarsReworked, parseInt(newData.jarsReworked)],
            palletReady: [...prevData.palletReady, parseInt(newData.palletReady)]
        }));
    };

    return (
        <div className="main-content">
            <h1 className="logo">T3N</h1>
            <div className="content-sections">
                <div className="card current-inventory">
                    <h2><FontAwesomeIcon icon={faWarehouse} /> Current Inventory</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Peanuts: XXX</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Jars: XXXX</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Lids: XXXX</li>
                    </ul>
                    <button onClick={() => window.location.href='/inventory'}>Go to Inventory Page <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                <div className="card production">
                    <h2><FontAwesomeIcon icon={faChartLine} /> Production</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> BNutty: XXXX</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Main Room: XXXXX</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Total: XXXXX</li>
                    </ul>
                    <button onClick={() => window.location.href='/production'}>Go to Production Page <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
            <div className="additional-sections">
                <div className="card summary-statistics">
                    <h2><FontAwesomeIcon icon={faList} /> Summary Statistics</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Total Inventory Items: 1000</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Total Production This Month: 500</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Average Daily Production: 20</li>
                    </ul>
                </div>
                <div className="card recent-activities">
                    <h2><FontAwesomeIcon icon={faList} /> Recent Activities</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Added 200 jars to inventory</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Completed 100 units of BNutty production</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Updated production schedule</li>
                    </ul>
                </div>
            </div>
            <div className="card shift-performance">
                <h2><FontAwesomeIcon icon={faChartLine} /> Shift Performance</h2>
                <ShiftChart data={shiftData} />
                <ShiftDataForm onDataSubmit={handleDataSubmit} />
            </div>
        </div>
    );
};

export default MainContent;
