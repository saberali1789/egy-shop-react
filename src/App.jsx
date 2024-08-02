/* eslint-disable no-unused-vars */
import Banner from "./components/banner/Banner";
import Brands from "./components/brands/Brands";
import Category from "./components/category/Category";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeadingTitle from "./components/heading-title/HeadingTitle";
import Slider from "./components/slider/Slider";
import SpecialOffers from "./components/special-offers/SpecialOffers";
import { products } from "./data/products";

const App = () => {
  const laptops = products.filter((laptop) => laptop.isLaptop === true);
  const mobiles = products.filter((laptop) => laptop.isLaptop === false);
  return (
    <div>
      <Header />
      <Banner />
      <Category />
      <SpecialOffers />
      <HeadingTitle title="الجديد من اللاتوب" />
      <Slider data={laptops} />
      <HeadingTitle title=" الجديد من الموبايل" />
      <Slider data={mobiles} />
      <Brands />
      <Footer />
    </div>
  );
};

export default App;
