import React from 'react';
import { Line } from 'react-chartjs-2';



import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const Linechart = () => {


  
const options = {
  scales: {
    xAxes: [
      {
        ticks: {
          fontColor: 'white'
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: 'white'
        }
      }
    ]
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
      color:'white'
    },
    title: {
      display: true,
      color:'white'
      // text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


const data = {
  labels,
  datasets: [
    {
      label: 'featured',
      data:  [
        43,
        20,
        39,
        46,
        86,
        66,
        80
     ],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      color:'white'
    },
    {
      label: 'latest',
      data:[
        88,
        70,
        79,
        56,
        50,
        55,
        72
     ],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      color:'white'
    },
    {
      label: 'popular',
      data:[
        32,
        47,
        38,
        21,
        55,
        75,
        70
     ],
      borderColor: 'rgb(53, 162, 135)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      color:'white'
    }
  ],
};

 

  // const linechartData=userdata.latestHits
  // console.log(linechartData, "latest hits")


  //   "latestHits":{
      // "featured":
      
      // [
      //    43,
      //    20,
      //    39,
      //    46,
      //    86,
      //    66,
      //    80
      // ],
      // "latest":[
      //    88,
      //    70,
      //    79,
      //    56,
      //    50,
      //    55,
      //    72
      // ],
  //     "months":[
  //        "January",
  //        "February",
  //        "March",
  //        "April",
  //        "May",
  //        "June",
  //        "July"
  //     ],
  //     "popular":[
  //        32,
  //        47,
  //        38,
  //        21,
  //        55,
  //        75,
  //        70
  //     ]
  //  },




  





  return (
    <div 
    
    // style={{
    //   width:'45vw',
    //   height:'100%',
    //   backgroundColor: '#435c70',
    //   color:"white"
    // }}  
    
     >
      <Line data={data} options={options}></Line>
    </div>
  )
}

export default Linechart
