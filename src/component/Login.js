
import React, { useState } from 'react';
import './css/registration.css';
import TextField from '@mui/material/TextField';
// import {useNavigate} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import {FaCartPlus} from "react-icons/fa"
function Login() {
   const [email,setEmail]= useState('');
   const [password,setPassword]= useState('');
   const handleSubmit=(e)=>{
    e.preventDefault();
    alert(`The email you entered was: ${email}`)
    alert(`The password you entered was: ${password}`)
   }
    return (
        <div>
            <p style={{ fontSize: "18px", color: "#414141", fontFamily: "Roboto", marginTop: "50px", textAlign: "center" }}>Home &gt; <span style={{ color: "#f14d54" }}> Login</span></p>
            <h1 style={{ font: "32px", fontFamily: "Roboto", color: "#414141", textAlign: "center", marginTop: "50px" }}>Login Or Create an Account</h1>
            <div style={{ paddingLeft: "100px", paddingRight: "100px" }}>
                <div><h2 style={{ font: "20px", fontFamily: "Roboto", color: "#414141", paddingTop: "75px" }}>New Customer</h2>
                    <hr style={{ marginTop: "20px" }}></hr>
                    <p style={{ font: "15px", fontFamily: "Roboto-Light", color: "#838383", marginTop: "20px" }}>Registration is free and easy</p>
                    <ul style={{ marginTop: "20px", marginLeft: "20px", font: "15px", fontFamily: "Roboto", color: "212121" }}>
                        <li>Faster Checkout</li>
                        <li style={{ margin: "15px 0px 15px 0px" }}>Save multiple shipping address</li>
                        <li>View and track orders and more</li>
                    </ul>
                    < NavLink to='/'>  <button style={{ backgroundColor: "#f14d54", height: "45px", width: "220px", color: "white", marginTop: "165px", borderRadius: "3px", borderColor: "white" }}><h2 style={{ font: "20px", fontFamily: "Roboto", color: "white" }}>Create an Account</h2></button></NavLink>
                </div>
                <div><h2 style={{ font: "20px", fontFamily: "Roboto", color: "#414141", paddingTop: "75px" }}>Registered Customers</h2>
                    <hr style={{ marginTop: "20px" }}></hr>
                    <p style={{ font: "15px", fontFamily: "Roboto-Light", color: "#838383", marginTop: "20px" }}>If you have account with us,please log in</p>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginTop: "40px" }}><label style={{ font: "15px", fontFamily: "Roboto", color: "#414141" }}>Email Address:
                            <div style={{ marginTop: "15px" }}><div style={{ marginTop: "15px" }}><TextField style={{ width: "100%" }}
                                required
                              
                                id="outlined-disabled"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                label="Required"
                            /></div></div>
                        </label>
                        </div>
                        <div className="display-res" style={{ display: "flex", marginTop: "40px", height: "100px" }}>
                            <label style={{ font: "15px", fontFamily: "Roboto", color: "#414141" }}>Password:
                                <TextField style={{ width: "100%", marginTop: "15px" }}
                                    
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    autoComplete="current-password"
                                />
                            </label>
                        </div>
                        
                    <button type='submit' style={{ backgroundColor: "#f14d54", height: "45px", width: "100px", color: "white", marginTop: "49px", borderRadius: "3px", borderColor: "white" }}><h2 style={{ font: "20px", fontFamily: "Roboto", color: "white" }}>Login</h2></button>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Login;