import React, { useEffect, useState } from 'react'
import "../Header/Header.css"
import "../Product/Product.css"
import "./Account.css"







const Account = () => {


    const [data, setData] = useState([]);


    

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("accountsPage")) || [];
        setData(storedData);
    }, []);


    console.log(data)




 

   
    const [object,setObject] = useState({})


    const [selectedValue, setSelectedValue] = useState('');


    const [accName,setAccName] =useState('')
    const [password,setPassword] =useState('')
    const [phone,setPhone] =useState("")
    const [email,setEmail] =useState("")
    const [password2,setPassword2] =useState("")
    const [accpic, setAccpic] = useState("");

    const [obj, setObj]= useState({})


    // const obj={accName , password,phone,email,password2}


    // console.log(obj)



    

    

   







    const handleChange = (event) => {
       
            setSelectedValue(event.target.value);

    };
    console.log(selectedValue,  "iam here")


    
   
           


    let selectedData =data[selectedValue]

    console.log(selectedData)


  


    

  
const updateProfile=()=>{

    alert("profile updated successfullty")

}
 


    

   


   




  










    return (<>




      <div className='account-section'>
            <div className='uper-section'>
                <h2>List of Accounts</h2>
                <div className='upper-inputsection'>
                    <div><label>Accounts</label></div>
                    <div> <select className='form-input-box selectbox' value={selectedValue} onChange={handleChange} >
                    <option  value="" >Select</option>
                        <option  value='Admin'>Admin</option>
                        <option  value='Editor'>Editor</option>
                        <option  value='Merchant'>Merchant</option>
                        <option  value='Customer'>Customer</option>

                    </select></div>
                </div>



            </div>




 <div className='bottom-section'>
                <div className='bottomleft-section'>
               <div className='img-box'><img  style={{width:'100%',height:"100%"}} src={selectedValue? selectedData.profilePic
                    : 
"https://imgs.search.brave.com/WFgRJXhKYqmtAd3BDyphT_ANCUnztjqz7nWhyC4qgUc/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/QkZXdURJZjNCSmFw/QnRIekR6enJRQUFB/QSZwaWQ9QXBp"} alt='iamges' ></img></div>
                    <button className='form-button' type="submit">UPLOAD NEW PHOTO</button> 


                </div>




                <div className='bottomright-section'>
                    <div className='add-product-div'>
                        <h1>Account Setting</h1>
                        <div className='add-product'>
                            <div className='left-section'>

                                <div   >
                                    <div className='form-input' >

                                        <label>Account Name</label>
                                        <input className='form-input-box'
                                        
                                         value={accName.length>0 ? accName:selectedData !==undefined ? selectedData.name : ""}
                                        
                                          onChange={(e) => setAccName(e.target.value)} type="text" id="Accname" name="Accname"  />

                                        <label>Password</label>
                                        <input className='form-input-box'
                                        
                                         value={ password.length>0 ? password:selectedData !==undefined ?   selectedData.password : ""} 
                                        
                                         onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password"  />
                                        <label>Phone</label>
                                        <input className='form-input-box'
                                        
                                         value={phone.length>0 ? phone:selectedData !==undefined ? selectedData.phone : ""}
                                        
                                          onChange={(e) => setPhone(e.target.value)}  type="phone" id="phone" name="phone"  />


                                    </div>

                                </div>




                            </div>

                            <div className='right-section'>



                                <form className='form-input' >
                                
                                    <label>Account Email</label>
                                    <input className='form-input-box'
                                    
                                      value={email.length>0 ?email:selectedData !==undefined ? selectedData.email: ""}
                                    
                                     onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
                                    <label>Re-enter Password</label>
                                    <input className='form-input-box'
                                     value={password2.length>0 ? password2:selectedData !==undefined ? selectedData.password : ""}

                                    
                                     onChange={(e) => setPassword2(e.target.value)} type="re_password" id="re_password" name="re_password"  />
                                    <button onclick={updateProfile} className='form-button' type="submit">UPDATE YOUR PROFILE</button>



                                </form>


                            </div>





                        </div>

                        <div className='bottom-ssection'>
                            <button className='form-button' type="submit">DELETE YOUR ACCOUNT</button>


                        </div>

                    </div>


                </div>





            </div>  


        </div> 

    </>
    )
}

export default Account
