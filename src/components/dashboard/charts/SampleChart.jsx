import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, LineController } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, LineController);

const SampleChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        type: 'bar',
        label: 'Orders',
        data: [90, 80, 70, 100, 90, 80, 60, 70, 100, 90, 80, 50],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        type: 'line',
        label: 'Earnings',
        data: [60, 65, 60, 70, 60, 65, 60, 70, 80, 85, 70, 75],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        type: 'line',
        label: 'Refunds',
        data: [10, 15, 10, 20, 15, 10, 5, 10, 20, 15, 10, 5],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderDash: [5, 5],
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options}/>
    </div>
  );
};

export default SampleChart;
