import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ProductPage, { CartContext } from "./pages/ProductPage";
import { useEffect, useState } from "react";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };

  
  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <Navbar />
      <Routes>
       
       <Route

        to='/ProductPage/product/1'
            path='/ProductPage/product/:id' element={<ProductPage />} />
     </Routes> 
    </CartContext.Provider>
  );
}

export default App;
 