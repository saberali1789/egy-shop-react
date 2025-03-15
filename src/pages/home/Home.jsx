import { useEffect } from "react";
import Banner from "../../components/banner/Banner";
import Brands from "../../components/brands/Brands";
import Category from "../../components/category/Category";
import HeadingTitle from "../../components/heading-title/HeadingTitle";
import Slider from "../../components/slider/Slider";
import SpecialOffers from "../../components/special-offers/SpecialOffers";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/apiCalls/productApiCalls";
const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  },[] );

  const laptops = products.filter((laptop) => laptop.isLaptop === true);
  const mobiles = products.filter((laptop) => laptop.isLaptop === false);

  return (
    <div>
      <Banner />
      <Category />
      <SpecialOffers />
      <HeadingTitle title="الجديد من اللاتوب" />
      <Slider data={laptops} />
      <HeadingTitle title=" الجديد من الموبايل" />
      <Slider data={mobiles} />
      <Brands />
    </div>
  );
};

export default Home;
