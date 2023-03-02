
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import "./Header.css";




const Header = () => {
  const navigate = useNavigate()
  //  const [data,setData]=useState([]);


  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
      const res = await response.json();
      localStorage.setItem('data1', JSON.stringify(res))
      localStorage.setItem('accountsPage', JSON.stringify(res.accountsPage));
      localStorage.setItem("dashboardPage", JSON.stringify(res.dasbhoardPage));
      localStorage.setItem("notifications", JSON.stringify(res.dasbhoardPage.notifications));
      localStorage.setItem("orders", JSON.stringify(res.dasbhoardPage.orders));
      localStorage.setItem("productsPage", JSON.stringify(res.productsPage));
      localStorage.setItem("products", JSON.stringify(res.productsPage.products));
      localStorage.setItem("category", JSON.stringify(res.productsPage.categories)
      );
      // setData(res)

    }
    fetchdata()
  }, [])










  return (
    <>
      <div className='header'>
        <div className='left-side'>
          <h1>PRODUCT ADMIN </h1>
        </div>
        <div className='right-side'>

          <div onClick={() => { navigate('/dashboard') }} className='link-tab'>
            <div>  <i className="fas fa-tachometer-alt"></i> </div>
            <div>Dashboard</div>

          </div>


          <div className='link-tab'>
            <div>    <i className="fas fa-file-alt"></i></div>
            <div>Reports</div>

          </div>


          <div onClick={() => { navigate('/product') }} className='link-tab'>
            <div> <i className="fas fa-shopping-cart"></i></div>
            <div>Products</div>

          </div>

          <div onClick={() => { navigate('/account') }} className='link-tab'>
            <div>   <i className="fas fa-user"></i></div>
            <div>Accounts</div>

          </div>



          <div className='link-tab'>
            <div><i className="fas fa-cog"></i></div>
            <div>Setting</div>

          </div>





        </div>






        <div className='right-side2'>

          <div onClick={() => { navigate('/dashboard') }} className='link-tab'>
            <div>  <i className="fas fa-tachometer-alt"></i> </div>
            <div>Dashboard</div>

          </div>


          <div className='link-tab'>
            <div>    <i className="fas fa-file-alt"></i></div>
            <div>Reports</div>

          </div>


          <div onClick={() => { navigate('/product') }} className='link-tab'>
            <div> <i className="fas fa-shopping-cart"></i></div>
            <div>Products</div>

          </div>

          <div onClick={() => { navigate('/account') }} className='link-tab'>
            <div>   <i className="fas fa-user"></i></div>
            <div>Accounts</div>

          </div>

          <div className='link-tab'>
            <div><i className="fas fa-cog"></i></div>
            <div>Setting</div>

          </div>





        </div>

        


        <h3 className="logobtn" onClick={() => { navigate('/') }} >ADMIN,LOGOUT</h3>

      </div>
    </>
  )
}

export default Header
