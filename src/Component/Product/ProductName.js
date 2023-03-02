import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Product.css"


const ProductName = () => {
    const navigate=useNavigate()
    const [data, setData] = useState([]);

    const [checkedItems, setCheckedItems] = useState([]);



    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("products")) || [];
        setData(storedData);
      }, []);




      console.log(data)

    const   deleteProduct =(ITEMNAME)=>{

            console.log(ITEMNAME)

        const updatedData=data.filter((elm)=>{
            return  elm.name !== ITEMNAME
        })

        setData(updatedData)

      }


      useEffect(()=>{

        localStorage.setItem('products',JSON.stringify(data))
       },[data])








     function handleCheckboxChange(item) {
        if (checkedItems.includes(item)) {
          setCheckedItems(checkedItems.filter(i => i !== item));
        } else {
          setCheckedItems([...checkedItems, item]);
        }
      }

      



        


     const alldelete=()=>{

        
     function removeItems(list,itemsToRemove){
        return list.filter(item => !itemsToRemove.includes(item));

     }

     const updatedList=removeItems(data,checkedItems)

     setData(updatedList)

     localStorage.setItem('products',JSON.stringify(data))



     }



   

     console.log(checkedItems)

    return (
        <div className='productlist'>
            <div className='product-table'>

                <table>
                <div className='product-head'>
                    <tr >
                        <th></th>
                        <th>PRODUCT NAME</th>
                        <th>UNIT SOLD</th>
                        <th>IN STOCK</th>
                        <th>EXPIRE DATE</th>
                        <th></th>
                    </tr>
                    </div>
                    <tbody>


                    {/* <span style={{backgroundColor:"gray",borderRadius:'50%',width:"100px"}}> <i className="fas fa-check"></i></span>  */}
                   



                        {
                            data.map((item,index) => {
                                return (
                                    <div className='product-data'>
                                    <tr key={index}>
                                        <td><input
                                        
                                        onChange={() => handleCheckboxChange(item)}
                                         checked={checkedItems.includes(item)} type="checkbox"  /></td>

                                        <td>{item.name}</td>
                                        <td>{item.unitSold}</td>
                                        <td>{item.stock}</td>
                                        <td>{item.expireDate}</td>
                                        <td>   <i  onClick={()=>{deleteProduct(item.name)}} className="fas fa-trash-alt"></i></td>

                                    </tr>
                                    </div>
                                )

                            })
                        }



                     


                    </tbody>
                </table>


            </div>

            <button onClick={()=>{navigate('/addProduct')}} className='Product-button'>ADD NEW PRODUCT</button>
            <button onClick={alldelete} className='Product-button'>DELETE SELECTED PRODUCT</button>

        </div>
    )
}

export default ProductName
