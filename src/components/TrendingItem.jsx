import "./TrendingSlider.css";
import { items } from "./AllData";
import { Link } from "react-router-dom";

function TrendingItem() {
  const filteredItems = items.filter((item) => item.id >= 1);
  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className="row-item">
          <Link
            onClick={() => window.top(0, 0)}
            to={`/ProductPage/product/${item.id}`}
          >
            <div className="item-header">
              <img src={item.img} alt="product" />
            </div>
            <div className="item-description">
              <p className="product-name">{item.category}</p>
              <p className="product">{item.description}</p>
              <p className="item-price">{item.price}$</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
// categories
export default TrendingItem;
// categories