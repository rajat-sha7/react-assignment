import React,{useEffect} from 'react'
import "../Header/Header.css"
import "./Dashboard.css"
import axios from 'axios'
import OrderList from './OrderList'
import Notifictaionlist from './Notifictaionlist'
import Linechart from './Linechart'
import Barchart from './Barchart'
import Piechart from './Piechart'





const Dashboard = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json');
        window.localStorage.setItem('apidata', JSON.stringify(res.data.dasbhoardPage));
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);



  



  const usedata=JSON.parse(localStorage.getItem('apidata'));
      console.log((usedata))



 
  return (
    
    <>
      
      
     
         

          



      <div className='dashboard' >

        {/* <p className='headingtext'>Welcome back, <h1>Admin</h1></p> */}



        <div className='first-section'>
          <div className='first-left-section'>
          LATEST HITS
             <Linechart   userdata={usedata}/>

          </div>


          <div className='first-right-section'>
          PERFORMANCE
            <Barchart  userdata={usedata} />
          </div>


        </div>





        <div className='second-section'>
          <div className='second-left-section'>
            STORAGE INFORMATION
                  <Piechart  userdata={usedata} />

          </div>


          <div className='second-right-section'>
      

            <Notifictaionlist />


          </div>


        </div>





        <div className='third-list-section'>

         <OrderList />


        </div>








      </div> 

    </>
  )
}

export default Dashboard
