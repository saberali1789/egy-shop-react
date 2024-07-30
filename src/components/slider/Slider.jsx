/* eslint-disable react/prop-types */
import Rating from "../rating/Rating";
import "./slider.css";

// eslint-disable-next-line no-unused-vars
const Slider = ({ data }) => {
  return (
    <div className="slider-container">
      <button className="bi bi-chevron-left arrow-left"></button>
      <div className="slider-wrapper">
        {data.map((item) => (
          <div className="slide" key={item.id}>
            <img src={item.image} alt={item.title} className="slide-image" />
            <h3 className="slide-title">{item.title}</h3>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="slide-price">{item.price}</div>
          </div>
        ))}
      </div>
      <button className="bi bi-chevron-right arrow-right"></button>
    </div>
  );
};

export default Slider;
