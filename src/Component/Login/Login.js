import React, { useState } from 'react';
import "./Login.css"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { login } from '../../redux/action/action';




const Login = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch();


  
    const [inputv, setInputv] = useState({
        username: "",
        password: ""
    })


    const getdata = (e) => {
        e.preventDefault();
        const { value, name } = e.target;

        setInputv(() => {
            return {
                ...inputv,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();
        console.log(inputv)


        const { username, password } = inputv;

        if (username === "") {
            alert("username field is required")

        } else if (password === "") {
            alert("password field is required")

        } else if (password.length < 5) {
            alert("password length should be greater then 5")

        } else {

           alert(`Login Successful ${username}`)
              navigate("dashboard")
              dispatch(login());
              console.log("user login successfully")

        }
    }
















    return (
        <>
       
            <div className='login-box'>
                <h4>Welcome to Dashboard,Login</h4>


                <form className='form-input' >
                    <label>Username</label>
                    <input onChange={getdata} className='form-input-box' type="text" name="username" />

                    <label>password</label>
                    <input onChange={getdata} className='form-input-box' type="password"  name="password" />
                    <button onClick={addData} type="submit" className='form-button'>LOGIN</button>
                    <button className='form-button'>FORGET YOUR PASSWORD?</button>
                </form>


            </div>
        </>
    )
}

export default Login
