/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "./special-offer-page.css";
import { useParams } from "react-router-dom";
import { specialOffers } from "../../data/special-offers";
import { useState } from "react";
import Rating from "./../../components/rating/Rating";
import ProductDescription from "./ProductDescription";

const SpecialOfferPage = () => {
  const { id } = useParams();

  const product = specialOffers.find((product) => product.id === +id);
  console.log(product);
  const { images, title, rating, reviews, price, discount } = product;

  const [imageIndex, setImageIndex] = useState(0);

  const finalPrice = price - (discount * price) / 100;
  return (
    <>
      <div className="special-offer-page">
        <div className="special-offer-page-img-wrapper">
          <img
            src={images[imageIndex]}
            alt="image"
            className="special-offer-page-img"
          />
          <div className="special-offer-page-select-img">
            {images.map((source, index) => (
              <img
                onClick={() => setImageIndex(index)}
                key={index}
                alt=""
                src={source}
                className="select-img"
              />
            ))}
          </div>
        </div>
        <div className="special-offer-page-info">
          <h3 className="special-page-info-title">{title}</h3>
          <Rating rating={rating} reviews={reviews} />
          <div className="special-offer-page-price">
            <b className="special-offer-price-item">{price}</b>
            <b className="special-offer-final-price-item">{finalPrice}</b>
          </div>
          <div className="special-offer-page-add-to-cart">
            <p>الكمية</p>
            <input type="number" min="1" max="10" />
            <button className="add-to-cart-btn">اضافة الى سلة التسوق</button>
          </div>
        </div>
      </div>
      <ProductDescription />
    </>
  );
};

export default SpecialOfferPage;
