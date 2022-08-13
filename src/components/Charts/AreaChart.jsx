import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
  elements: {
    line: {
      tension: 0, // disables bezier curves
    },
  },
};

const labels = ['20 Aug', '21 Aug', '22 Aug', '23 Aug', '24 Aug', '25 Aug'];

export const data = {
  labels,
  datasets: [
    {
      id: 1,
      fill: true,
      label: 'Dataset 2',
      data: [
        2300, 3800, 2100, 1500, 1800, 2800, 2500, 1900, 2700, 2600, 2700, 3200,
        2700, 2800,
      ],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const AreaChart = () => {
  return <Line options={options} data={data} />;
};

export default AreaChart;
