import "./Navbar.css"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartWithItems from "./CartWithItems";
import EmptyCart from "./EmptyCart";
import { CartContext } from "../pages/ProductPage";
import { IconMenu2, IconShoppingCart, IconX ,IconUser,IconSearch } from "@tabler/icons-react";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [cart, setCart] = useState(false);

  const { cartItem } = useContext(CartContext);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const openCart = () => {
    setCart(!cart);
  };

  

  return (
    <>
      <div
        className={`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}
      >
        <IconX onClick={() => setMobileNav(!mobileNav)} className="x-mobile" />
        <div className="mobile-links">
          
          <Link
            onClick={() => setMobileNav(!mobileNav)}
            to="/ProductPage/product/1"
          >
            product page
          </Link>
          
        </div>
      </div>

      
      <div
        onClick={openCart}
        className={`page-overlay ${cart ? "open-flex" : "closed-flex"}`}
      ></div>

   
      <div className={`cart-div ${cart ? "open-cart" : "closed-cart"}`}>
        <div className="cart-title-btn">
          <h2 className="cart-full-h2">
            Your Shopping Cart ({cartItem.length})
          </h2>
          <IconX onClick={openCart} />
        </div>

        <div className="cart-body">
          {cartItem.length < 1 ? (
            <EmptyCart openCart={openCart} />
          ) : (
            <CartWithItems />
          )}
        </div>
      </div>

      <nav className="navbar">
        <div className="containe">
          <div className={`nav-container ${sticky ? "cont-sticky" : ""}`}>
            
           
            <div className="nav-links">
              <div className="logo">
                 <IconMenu2 />
              <span>logo</span>
                
              </div>
            

            <span>Home</span>
            <span>Home</span>
            <span>Home</span>
            <span>Home</span>
            <span>Home</span>
            <Link onLoad={() =>  window.scrollTo(0, 0)}
                to="/ProductPage/product/2">Products</Link>
            </div> 
            <div className="nav-icon">
              <IconSearch/>
            <i
                data-array-length={cartItem.length}
                onClick={openCart}
                className={`${
                  cartItem.length <1 ? "cart-icon" : "cart-icon with-items"
                }`}
              >
                <IconShoppingCart />
         </i>
         <IconUser/>
         
         </div>
              
             
           
            <div className="hamburger-menu">
              
              <i
                onClick={() => setMobileNav(!mobileNav)}
                className="hamburger-hamb"
              >
                <IconMenu2 />
              </i>
            </div>
          </div>
          <div className="nav-container2">

          <span>Home </span>
            <span>/ Home </span>
            <span>/ Home </span>
            <span>/ Home </span>
            <span>/ Home </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;