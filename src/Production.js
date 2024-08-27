import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Production.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faChartLine } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Production = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'BNutty Production',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(54, 162, 235, 0.4)', // Blue
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'Main Room Production',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(255, 159, 64, 0.4)', // Orange
                borderColor: 'rgba(255, 159, 64, 1)',
                pointBorderColor: 'rgba(255, 159, 64, 1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(255, 159, 64, 1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    return (
        <div className="production-page">
            <h1 className="page-title"><FontAwesomeIcon icon={faIndustry} /> Production</h1>
            <div className="summary">
                <div className="summary-item">
                    <h2><FontAwesomeIcon icon={faChartLine} /> Total Production</h2>
                    <p>BNutty: 426 units</p>
                    <p>Main Room: 310 units</p>
                </div>
                <div className="summary-item">
                    <h2><FontAwesomeIcon icon={faChartLine} /> Average Monthly Production</h2>
                    <p>BNutty: 61 units</p>
                    <p>Main Room: 44 units</p>
                </div>
            </div>
            <div className="chart-container">
                <Line data={data} />
            </div>
        </div>
    );
};

export default Production;
