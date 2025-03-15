import "./banner.css";
import { banner } from "../../data/banner";


const Banner = () => {
  // const {title, image} = banner
  return (
    <div className="banner">
      {banner.map((banner) => (
        <img
          key={banner.id}
          src={banner.image}
          alt={banner.title}
          className="banner-img"
        />
      ))}
    </div>
  );
};

export default Banner;
