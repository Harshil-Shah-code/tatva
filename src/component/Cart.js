import React from "react";
import Logo from "../static/logo192.png";
function Cart() {
    // const [counter, setCounter] = useState(1);
    // const addQuantity = () =>{
    //     setCounter(counter + 1);

    // }
    // const removeQuantity = () =>{
    //     setCounter(counter - 1);
    //     if(counter < 1){
    //         //remove from cart page
    //     }
    // }
    return (
        <>
            <div>
                <h1 style={{ font: "32px", fontFamily: "Roboto", color: "#414141", textAlign: "center", marginTop: "50px" }}>Cart Page</h1>
                <div style={{ margin: "75px auto", width: "50%", padding: "10px" }}>
                    <div style={{ display: "flex" }}>
                        <h3 style={{ fontSize: "18px", fontFamily: "Roboto", color: "#414141" }}>My Shopping Bag(3 Items)</h3>
                        <h3 style={{ fontSize: "15px", fontFamily: "Roboto", color: "#414141", marginLeft: "auto" }}>Total price:3000</h3>
                    </div>
                    <div style={{ display: "flex", border: "1px solid black", marginTop: "30px" }}>
                        <img src={Logo} alt="img of item" style={{ width: "12vw", height: "15vh", marginTop: "15px" }} />
                        <div style={{ marginTop: "15px" }}>

                            <h4>Item-Name</h4>
                            <h4>Rs. 500</h4>
                            <div><button className="btn-bg" >+</button>
                                1
                                <button className="btn-bg" >-</button></div>
                            <button className="btn-bg btn-col">Remove</button>

                        </div>
                    </div>
                    <div style={{ display: "flex", border: "1px solid black", marginTop: "30px" }}>
                        <img src={Logo} alt="img of item" style={{ width: "12vw", height: "15vh", marginTop: "15px" }} />
                        <div style={{ marginTop: "15px" }}>

                            <h4>Item-Name</h4>
                            <h4>Rs. 500</h4>
                            <div><button className="btn-bg">+</button>
                                1
                                <button className="btn-bg">-</button></div>
                            <button className="btn-bg btn-col">Remove</button>

                        </div>
                    </div>
                    <div style={{ display: "flex", border: "1px solid black", marginTop: "30px" }}>
                        <img src={Logo} alt="img of item" style={{ width: "12vw", height: "15vh", marginTop: "15px" }} />
                        <div style={{ marginTop: "15px" }}>

                            <h4>Item-Name</h4>
                            <h4>Rs. 500</h4>
                            <div><button className="btn-bg">+</button>
                                1
                                <button className="btn-bg">-</button></div>
                            <button className="btn-bg btn-col">Remove</button>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Cart;