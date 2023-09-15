import './App.css';
import Registration from './component/Registration';
import Login from './component/Login';
import Navbar from './component/Navbar'
import Nomatch from './component/Nomatch';
import { Routes, Route } from 'react-router-dom'
import Footer from './component/Footer';
import Cart from './component/Cart';
import Product from './component/Product';
import { useState } from 'react';
// import { useState } from 'react';

// import ResponsiveAppBar from './component/ResponsiveAppBar';

// import { Button } from 'react-bootstrap';

function App() {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (itemId) => {
    setCartItems((prevItems) => [...prevItems, itemId]);

  }


  return (
    <>

      {/* <ResponsiveAppBar /> */}
      <Navbar cartItemCount={cartItems} />
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='Login' element={<Login />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} />} />
        <Route path='/Product' element={<Product onAddToCart={addToCart} />} />
        <Route path='*' element={<Nomatch />} />    {/* '*' sign checks all path */}
      </Routes>
      <Footer />
    </>
  )
}

export default App;