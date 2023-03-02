import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Product.css"




const Product = () => {

    const navigate = useNavigate()


    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue]=useState('')
    const [name, setName] = useState('');
    const [Description, setDescription] = useState('');
    const [expDate, setExpDate] = useState('');
    const [stockunit, setStockunit] = useState('');
    const [img,setImg]= useState(null)




    // console.log(selectedValue,  name  , Description  , expDate,  stockunit )




    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("products")) || [];
        setData(storedData);
    }, []);





  

    const addProduct=(e)=>{

        e.preventDefault()


        if (name === "") {
            alert("name field is required")

        } else if (selectedValue === "") {
            alert("category field is required")

        } else if (Description==="") {
            alert("description field is required")

        }else if (expDate==="") {
            alert("date fiel is required")

        } 
        else if (stockunit==="") {
            alert("unit sold fiel is required")

        }  else {

            

        const setObj ={
            id:new Date().getTime(),
            category: selectedValue,
    
            name:name,
    
            stock:"550",
    
            unitSold:stockunit,
    
            expireDate: expDate,
    
          description : Description
        }

        console.log(setObj)
          
        

        const updatedData=[...data,setObj]


        localStorage.setItem("products",JSON.stringify(updatedData))

        console.log(updatedData)

        navigate('/product')

       
        
    }


    
       
    }

   


   const handleChange=(event)=>{

    const file=event.target.files[0];

    const size= file.size /1024 /1024;
    const type =file.type;

    if(size <= 1 && (type==="image/jpeg" || type==="image/png" || type==="image/webp")) {
        setImg(URL.createObjectURL(file));

    } else {
        alert('File must be a JPG or PNG image and less than 1 MB in size');
    }


    
   }






    return (
    
    <>
    

        <div className='add-product-div'>
            <h1>Add Product</h1>
            <div className='add-product'>
                <div className='left-section'>

                    <div   >
                        <form className='form-input' >

                            <label>Product Name</label>
                            <input className='form-input-box' onChange={(e) => setName(e.target.value)} type="text" id="name" name="name"  />

                            <label>Description</label>
                            <textarea className='form-input-box' rows="3"  onChange={(e) => setDescription(e.target.value)}  style={{ height: "104px" }} type="textarea" name="password" />

                            <label>Category</label>
                            <select className='form-input-box selectbox' onChange={(e)=>setSelectedValue(e.target.value)} type="select" name="username" >
                                <option value=''>Select Category</option>
                                <option value='New Arrival'>New Arrival</option>
                                <option value='Most popular'>Most popular</option>
                                <option value='Trending'>Trending</option>

                            </select>



                            <div className='bottom-inputs'>
                                <div className='bottom-inputs-section'>
                                    <label>Expirydate</label>
                                    <input className='form-input-box'  onChange={(e) => setExpDate(e.target.value)}  type="date" id='date' name="date" />
                                </div>

                                <div className='bottom-inputs-section'>
                                    <label>Unit sold</label>
                                    <input className='form-input-box'  onChange={(e) => setStockunit(e.target.value)}  type="text" name="text" />
                                </div>





                            </div>




                        </form>

                    </div>




                </div>

                <div className='right-section'>

                    <div style={{backgroundImage:`url(${img})`}} className='pic-showbox'>
                    

                    </div>

                    <div className='form-input' >

                        
                     
                        
                        <input  style={{backgroundColor:'yellow'}} className='form-input-box' type="file" onChange={handleChange}  />
                        
                        
                       

                    </div>


                </div>





            </div>

            <div className='bottom-section'>
                <button onClick={addProduct} className='form-button' type="submit">ADD PRODUCT NOW</button>


            </div>

        </div>
    </>
    )
}

export default Product;
