import { useParams } from "react-router-dom";
import Rating from "../../components/rating/Rating";
import ProductDescription from "../special-offer-page/ProductDescription";
import './single-product.css'
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/apiCalls/productApiCalls";
import Spinner from "../../components/spinner/Spinner"

const SingleProduct = () => {
  const dispatch= useDispatch()
const {product, loading} = useSelector(state => state.product)
  
  const { id } = useParams();
  useEffect(() => {
dispatch(getProductById(id))
  }, [id]);

if(loading) return <Spinner />
  return <div className="single-product">
    <div className="product-wrapper">
      <div className="product-image-wrapper">
        <img src={product?.image} alt={product?.title} />
      </div>
      <div className="product-info">
        <h1 className="product-title">{product?.title}</h1>
        <Rating reviews={product?.reviews} rating={product?.rating} />
        <div className="product-price">{product?.price}</div>
        <div className="product-add-to-cart">
          <div>الكمية</div>
          <input type="number" min='1' max='10' />
          <button className="add-to-cart-btn">
            اضافة الى سلة التسوق
          </button>
        </div>
      </div>
    </div>
    <ProductDescription />
  </div>;
};

export default SingleProduct;
