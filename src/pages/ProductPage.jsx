import { createContext, useContext, useState } from "react";
import "../components/ProductPage.css";
import { items } from "../components/AllData";
import TrendingSlider from "../components/TrendingSlider";
import { useParams } from "react-router";

export const CartContext = createContext();

function ProductPage() {
  const { id } = useParams();
  const item = items.filter((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(item[0].img);

  const { addToCart } = useContext(CartContext);

  const changeImage = (e) => {
    setImage(e.target.src);
  };

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  

  const [notify, setNotify] = useState(false);

  const showNotify = () => {
    setNotify(!notify);
  };

  return (
    <>
      <div
        onAnimationEnd={() => setNotify(false)}
        className={`notify ${notify ? "slide-in" : ""}`}
      >
        <p>Item has been added to the cart &nbsp; ✅</p>
      </div>

      <div className="product-page-div">
        <div className="container">
          <div className="product-div">
            <div className="product-left">
              
              <div className="small-imgs">
                <img
                  onMouseOver={changeImage}
                  src={item[0].img}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].img}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[0]}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[1]}
                  alt="product"
                />
              </div>
              <div className="big-img">
                <img src={image} alt="product" />
              </div>
            </div>
            <div className="product-right">
            <div className="product-Name">
            <h1 className="Name">Name Of Product</h1>
            <span className='stars'> ★★★★★</span>
            </div>
            <div className="product-spec-And-Price">
              <div className="price">
                <p className="product-Price">{item[0].price[0]}EP</p>
                <p className="disPrice">{item[0].price[1]}EP</p>
              </div>
              </div>
              <p className="product-spec">{item[0].specs}</p>
              <div className="Product-size">
              <p className='Size'>size</p>
              <div className="sizes">
              <span className='size one'>{item[0].size[0]}</span>
              <span className='size two'>{item[0].size[1]}</span>
              <span className='size three'>{item[0].size[2]}</span>
              </div>
            </div>
              <div className="Product_collor">
            <p className='coll'>collor</p>
              <div className="colors">
              <span className='collor one' style={ {backgroundColor : item[0].colors[0]}}></span>
              <span className='collor two' style={{backgroundColor : item[0].colors [1]}}></span>
              <span className='collor three' style={{backgroundColor :item[0].colors [2]}}></span>
              <span className='collor fore' style={{backgroundColor : item[0].colors[3]}}></span>
              </div>
            </div>
              
              <div className="bottom">
              <div className="product-quant">
                
                <div className="product-btns">
                  <button onClick={decrease}>-</button>
                  <p className="quantity">{quantity}</p>
                  <button onClick={increase}>+</button>
                </div>
             
              </div>
              <div className="atc-buy">
                <button
                  onClick={() => {
                    addToCart(item[0]);
                    showNotify();
                  }}
                  className="atc-btn"
                >
                  add to cart
                </button>
                <button className="buy-btn">buy now</button>
              </div>
            </div>
            </div>
          </div>

         
        </div>
        <TrendingSlider />
      </div>
    </>
  );
}

export default ProductPage;
