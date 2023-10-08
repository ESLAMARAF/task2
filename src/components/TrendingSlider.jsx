import "./TrendingSlider.css";
import TrendingItem from "./TrendingItem";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

function TrendingSlider() {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };

  return (
    <div className="trending">
      
        <div className="title-btns">
          <h3>Trending Now</h3>
        
        </div>
        <div className="grid-container" >
          <TrendingItem />
        </div>
    
    </div>
  );
}

export default TrendingSlider;
