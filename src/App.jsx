/* eslint-disable no-unused-vars */
import Banner from "./components/banner/Banner";
import Category from "./components/category/Category";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import SpecialOffers from "./components/special-offers/SpecialOffers";
import { products } from "./data/products";

const App = () => {
  const laptops = products.filter((laptop) => laptop.isLaptop === true);
  return (
    <div>
      <Header />
      <Banner />
      <Category />
      <SpecialOffers />
      <Slider data={laptops} />
    </div>
  );
};

export default App;
