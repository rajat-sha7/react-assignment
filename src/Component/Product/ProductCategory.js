import React, { useState ,useEffect} from 'react'

import "./Product.css"



const ProductCategory = () => {


    const [ category , setCategory] =useState([]);


    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("category")) || [];
        setCategory(storedData);
      }, []);


      console.log(category)



   const deleteItem=(Item)=>{
  
      const newData= category.filter((elm)=>{
        return elm !==Item
      })


      setCategory(newData)
  
   }




   useEffect(()=>{

    localStorage.setItem('category',JSON.stringify(category))
   },[category])
    



   const addCategory=(e)=>{
    e.preventDefault()
     const categoryname= prompt("please add category name you want to add")
     if(categoryname===""){
        alert('please enter the category name if u want to add')
     }
        setCategory([...category,categoryname])

     localStorage.setItem("category",JSON.stringify(category))

   }



  return (
    <div className='productcategorylist'>
    <h2>PRODUCT CATEGORY</h2>
    <div className='productcategory-table'>
    <table>
                   
                    <tbody>

                        {
                            category.map((item,index) => {
                                return (
                                    <div className='category-list'>
                                    <tr key={item.id}>
                                       
                                        <td>{item}</td>
                                        <td> <i onClick={()=>{deleteItem(item)}} className="fas fa-trash-alt"></i></td>
                                    </tr>
                                    </div>
                                )

                            })
                        }






                    </tbody>
                </table>

       
    </div>

    <button  onClick={addCategory} type='submit' className='Product-button'>ADD NEW CATEGORY</button>
   
   </div>
  )
}


export default ProductCategory;
