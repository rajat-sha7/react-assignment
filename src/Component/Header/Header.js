
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import "./Header.css";
import { useSelector } from 'react-redux';
// import Login from "../Login/Login";
import { useDispatch } from 'react-redux';
import { logout } from "../../redux/action/action";




const Header = () => {
  const navigate = useNavigate()
<<<<<<< HEAD
  
  const loggedIn = useSelector(state => state.loggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  
  
  
  
=======

  const [isMenuOpen, setIsMenuOpen] = useState(false);

>>>>>>> 6c95783f1abe39b0ca8f0948d6492a6c8be0508e

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


    }
    fetchdata()
  }, [])


    // let status= sessionStorage.getItem("status")

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(" toggel btn clicked")

  }


  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(" toggel btn clicked")

  }

 

   const logoutfun=()=>{
    dispatch(logout());
    navigate("/")
  
   
   }






  return (
    <>
      <div className='header'>
        <div className='left-side'>
          <h1>PRODUCT ADMIN </h1>
        </div>
        <div id="togglemenu" className={isMenuOpen?'right-side' :'right-side active'}>

          <div onClick={() => { navigate(loggedIn?'/dashboard':"#") }} className='link-tab'>
            <div>  <i className="fas fa-tachometer-alt"></i> </div>
            <div className="link-text">Dashboard</div>

          </div>


          <div className='link-tab'>
            <div>    <i className="fas fa-file-alt"></i></div>
            <div className="link-text">Reports</div>

          </div>


          <div onClick={() => { navigate(loggedIn?'/product':"#") }} className='link-tab'>
            <div> <i className="fas fa-shopping-cart"></i></div>
            <div className="link-text">Products</div>

          </div>

          <div onClick={() => { navigate(loggedIn?'/account':"#") }} className='link-tab'>
            <div>   <i className="fas fa-user"></i></div>
            <div className="link-text">Accounts</div>

          </div>



          <div className='link-tab'>
            <div><i className="fas fa-cog"></i></div>
            <div className="link-text">Setting</div>

          </div>

              
        
         

          
          <div id="mobileLogout" className='link-tab'>
<<<<<<< HEAD
            <div> <i  onClick={logoutfun} class="fas fa-sign-out-alt"></i></div>
          
          </div>
=======
            <div> <i  onClick={() => { navigate('/') }} class="fas fa-sign-out-alt"></i></div>
          
          </div>


        </div>







>>>>>>> 6c95783f1abe39b0ca8f0948d6492a6c8be0508e


        </div>









        <h3 className="logobtn" onClick={logoutfun} ><i class="fas fa-sign-out-alt"></i>ADMIN,LOGOUT</h3>

       
       
      </div>

      <div id="mobile" onClick={handleClick} >

        <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>

       
        {/* <button className="togglebtn" onClick={toggle}>MENU</button> */}
      </div>

<<<<<<< HEAD
=======
      <div id="mobile" onClick={handleClick} >

        <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>

      </div>

>>>>>>> 6c95783f1abe39b0ca8f0948d6492a6c8be0508e
    </>
  )
}

export default Header
