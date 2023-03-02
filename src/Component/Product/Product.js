import React  from 'react'




import "./Product.css"
import ProductCategory from './ProductCategory'
import ProductName from './ProductName'

const Product = () => {
  


  return (<>


  
           
    <div className='product'>
      <div className='product-left-section'>
       <ProductName  />
      
      </div>
      <div className='product-right-section'>
      
    <ProductCategory /> 
      
      </div>
    </div> 
    </>
  )
}

export default Product
