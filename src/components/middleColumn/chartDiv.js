import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio:false,
  plugins: {
    title: {
      display: true,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      beginAtZero:true,
      stacked: true,
      ticks:{
        stepSize:100
      }
    },
  },
};

const labels = ['20', '', '25', '', '30', '', '35', '', '40', '', '60', '', '65'];
let d1=5
let d2=5
let d3=15
export const data = {
  labels,
  datasets: [
    {
      label: 'Employer: K 73,500',
      data: labels.map(() => d1+=7),
      backgroundColor: 'darkBlue',
    },
    {
      label: 'Employee: K 52,500',
      data: labels.map(() => d2+=7),
      backgroundColor: 'blue',
    },
    {
      label: 'Total Interest: K 244,313',
      data: labels.map(() => d3+=7),
      backgroundColor: 'lightBlue',
    },
  ],
};

function chartDiv() {
  return (
  <div className="chartDiv">
    <h5>Contributions Overtime</h5>
      <Bar options={options} data={data} />
  </div>
);
}
export default chartDiv
