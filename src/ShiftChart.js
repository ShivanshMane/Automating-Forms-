// src/ShiftChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ShiftChart = ({ data }) => {
    const chartData = {
        labels: ['Shift 1', 'Shift 2', 'Shift 3'],
        datasets: [
            {
                label: 'Jars Produced',
                data: data.jarsProduced,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Jars Lost',
                data: data.jarsLost,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
            {
                label: 'Jars Reworked',
                data: data.jarsReworked,
                backgroundColor: 'rgba(255, 206, 86, 0.6)',
            },
            {
                label: 'Pallet Ready',
                data: data.palletReady,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Shift Performance',
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default ShiftChart;
