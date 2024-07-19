import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import ReactApexChart from 'react-apexcharts';

ChartJS.register(ArcElement, Tooltip, Legend);

export function SourceChart() {
  const series = [44, 55, 41, 17, 15];
  const options = {
    chart: {
      type: 'donut',
      width: '100%',
      height: '100%'
    },
    labels: ['Direct', 'Social', 'Email', 'Other', 'Referrals'],
    maintainAspectRatio: false,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: '100%',
          height: '100%'
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
    legend: {
      position: 'bottom',
      floating: false,
      fontSize: '12px',
    },
    dataLabels: {
      enabled: true,
    },
    colors: ['rgb(64, 81, 137)', 'rgb(10, 179, 156)', 'rgb(247, 184, 75)', 'rgb(240, 101, 72)', 'rgb(41, 156, 219)'],
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
        },
        expandOnClick: true,
        dataLabels: {
          offset: -1,
        }
      }
    },
    stroke: {
      show: false
    }
  };

  return (
    <div className='text-center w-full h-full items-center'>
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
}
