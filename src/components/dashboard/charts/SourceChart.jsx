import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

ChartJS.register(ArcElement, Tooltip, Legend);

export function SourceChart() {
  const series = [44, 55, 41, 17, 15];
  const options = {
    chart: {
      type: 'donut',
      width: '100%',
    },
    labels: ['Direct', 'Social', 'Email', 'Other', 'Referrals'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: '100%',
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
    legend: {
      position: 'bottom',
      floating: false,
      fontSize: '14px',
    },
    dataLabels: {
      enabled: true,
    },
  };

  return (
    <div className='text-center w-full md:w-[60%] lg:w-full mb-2'>
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
}
