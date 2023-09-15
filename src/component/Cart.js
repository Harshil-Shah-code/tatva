import React, { useEffect, useState } from "react";

function Cart(props) {
    const [cartItemsDetails, setCartItemsDetails] = useState([]);

    useEffect(() => {

        fetch("https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyCCN1uWwyUQYpZ79P80p_HHu0AzK-dkdnQ").then(res => res.json()).then(data => {
            const { items } = data;
            const filterItem = items.filter(item => {
                return props.cartItems.includes(item.id)
            });
            setCartItemsDetails(filterItem)
        })
    }, [props.cartItems]);



    return (
        <>
            <div>
                <h1 style={{ font: "32px", fontFamily: "Roboto", color: "#414141", textAlign: "center", marginTop: "50px" }}>Cart Page</h1>
                <div style={{ margin: "75px auto", width: "50%", padding: "10px" }}>
                    <div style={{ display: "flex" }}>
                        <h3 style={{ fontSize: "18px", fontFamily: "Roboto", color: "#414141" }}>My Shopping Bag({props.cartItems.length} Items)</h3>
                        <h3 style={{ fontSize: "15px", fontFamily: "Roboto", color: "#414141", marginLeft: "auto" }}>Total price:{cartItemsDetails.reduce((acc, item) => { return item.volumeInfo.pageCount + acc }, 0)}</h3>
                    </div>
                    {props.cartItems.length === 0 && <p style={{ marginTop: "1rem" }}>No cart item found!🤔</p>}
                    {props.cartItems.length !== 0 && cartItemsDetails.map(item => {
                        return <div style={{
                            display: "flex",
                            border: "1px solid black",
                            marginTop: "30px",
                            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", // Box shadow
                            margin: "0 0 20px 0", // Margin (top, right, bottom, left)
                            padding: "20px" // Padding (top, right, bottom, left)
                        }} key={item.id}>
                            <img src={item.volumeInfo.imageLinks.thumbnail} alt="img of item" style={{ width: "12vw", height: "15vh", marginTop: "15px" }} />
                            <div style={{ marginTop: "15px" }}>

                                <h4> {item.volumeInfo.title}</h4>
                                <h4>Rs. {item.volumeInfo.pageCount}</h4>
                                <div><button className="btn-bg" >+</button>
                                    1
                                    <button className="btn-bg" >-</button></div>
                                <button className="btn-bg btn-col">Remove</button>

                            </div>
                        </div>
                    })}
                </div>
            </div>

        </>
    );
}

export default Cart;