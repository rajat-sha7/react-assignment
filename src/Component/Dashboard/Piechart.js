import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);


const Piechart = () => {


  const data = {
    labels: ["used storage(18.240GB)","available storage(9.5GB)","system storage(6.5GB)"],
    datasets: [
      {
        label: '',
        data: [18.24,9.5,6.5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        fontColor:'white',
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  

  const options = {
    legend: {
      labels: {
        fontColor: 'white'
      }
    }
  };






  return (<div style={{width:'100%',height:"100%",marginLeft:'10px'}}> 

    <Pie options={options} data={data} />
  </div>
  )
}

export default Piechart
