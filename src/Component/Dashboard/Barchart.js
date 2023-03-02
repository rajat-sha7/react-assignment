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


const Barchart = () => {


 


  // const options = {
  //   scales: {
  //     xAxes:  [{
  //       ticks: {
  //         fontColor: 'white'
  //       }
  //     }],
  //     yAxes:[{
  //       barThickness: 40,
  //       gridLines: {
  //         offsetGridLines: true
  //       },
  //       ticks: {
  //         fontColor: 'white'
  //       }
  //     }]

  //   }
  // };



 

  // data: [40,44,28,38,58,34,48]
  // const labels= ['Aqua', 'Blue', 'Green', 'Orange', 'Purple', 'Red', 'Yellow']

  const options = {
    indexAxis: 'y' ,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right' ,
      },
      title: {
        display: true,
        text: '',
      },
    },
  };
  

  
  const data = {
    labels: ['Aqua', 'Blue', 'Green', 'Orange', 'Purple', 'Red', 'Yellow'],
    datasets: [
      {
        label: '#Hits',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        data: [40,44,28,38,58,34,48]
      }
    ]
  };







  return (
   
   <Bar options={options} data={data} />

  
  
  )
}

export default Barchart
