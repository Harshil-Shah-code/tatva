import React from "react";
import Logo from "../static/logo192.png";

function Footer() {
    return (
        <>
            <footer style={{ width: "100%", backgroundColor: "grey", height: "130px", marginTop: "100px" }}>

                <img src={Logo} style={{
                    height: "50px", margin: "auto",
                    display: "block"
                }} alt="logo here" />
                <p style={{ textAlign: "center" }}>©2023 tatvasoft.com designed by <strong>Ziempire</strong></p>
            </footer>
        </>
    )
}

export default Footer;