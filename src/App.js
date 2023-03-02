import React from "react"
import "./App.css"
import Login from "./Component/Login/Login";
import {Routes, Route } from 'react-router-dom'
import Dashboard from "./Component/Dashboard/Dashboard";
import Product from "./Component/Product/Product";
 import AddProduct from "./Component/Product/AddProduct";
import Account from "./Component/Account/Account";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
// import 'bootstrap/dist/css/bootstrap.min.css';






function App() {
  return (
    <>
     <Header/>
    <Routes>

    <Route path="/" exact element={<Login/>}> </Route>
    <Route path="dashboard" element={<Dashboard />} />

    <Route path="product" element={<Product />} />

    <Route path="addProduct" exact element={<AddProduct/>}> </Route>
    <Route path="account" element={<Account />} />

    </Routes>
    <Footer />

      
      

    </>
  );
}

export default App;
