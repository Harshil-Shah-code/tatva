import React from "react";
import Logo from "../static/logo192.png";
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa"
import './css/navbar.css'
import { useNavigate } from 'react-router-dom';
function Navbar({ size, cartItemCount = 0 }) {
    const navigate = useNavigate();
    const navigateCart = () => {
        // 👇️ navigate to /contacts
        navigate('/cart');
    };
    return (
        <>
            <div style={{ backgroundColor: "#f14d54", width: "100%", height: "0.52083333333333vh", marginTop: "3px" }}></div>
            <nav style={{ width: "100%" }}>  <div style={{ display: "flex", height: "20vh", columnGap: "1em", width: "100%" }}>
                <div style={{ display: "flex" }}><img src={Logo} style={{ height: "50px", margin: "10px 0px 0px 70px" }} alt="logo here" />
                    <NavLink to="/Product" style={{ marginLeft: "auto", font: "14px", fontFamily: "Roboto", color: "#f14d54", marginTop: "20px" }}>Product</NavLink>
                </div>
                <NavLink to="/Login" style={{ marginLeft: "auto", font: "14px", fontFamily: "Roboto", color: "#f14d54", marginTop: "20px" }}>Login</NavLink>
                <p style={{ marginTop: "15px" }}>|</p>
                <NavLink to="/" style={{ font: "14px", fontFamily: "Roboto", color: "#f14d54", marginTop: "20px" }}>Register</NavLink>
                <button onClick={navigateCart} style={{ backgroundColor: "#f14d54", height: "30px", width: "130px", color: "white", borderRadius: "3px", borderColor: "white", marginTop: "14px" }}><div style={{ display: "flex" }}><FaCartPlus style={{ marginTop: "4px", marginLeft: "5px" }} /><h2 style={{ font: "20px", fontFamily: "Roboto", color: "rgb(65,65,65)", marginLeft: "8px" }}>{cartItemCount.length} CART </h2></div></button>

            </div> </nav>
            <div style={{ height: "80px", backgroundColor: "grey", width: "100%" }}>
                <div style={{ display: "flex", justifyContent: "center", columnGap: "15px" }}>
                    <input type="text" style={{ width: "30vw", height: "40px", backgroundColor: "white", borderColor: "black", marginTop: "20px" }} placeholder="What are you looking for..." />
                    <button style={{ backgroundColor: "#80BD32", height: "40px", width: "10vw", color: "white", borderRadius: "3px", marginTop: "21px" }}><h2 className="button-size" style={{ font: "16px", fontFamily: "Roboto", color: "white" }}>Search</h2></button>
                    <button style={{ backgroundColor: "#f14d54", height: "40px", width: "10vw", color: "white", borderRadius: "3px", marginTop: "21px" }}><h2 className="button-size" style={{ font: "16px", fontFamily: "Roboto", color: "white" }}>Cancel</h2></button>
                </div>
            </div>
        </>
    )
}
export default Navbar;