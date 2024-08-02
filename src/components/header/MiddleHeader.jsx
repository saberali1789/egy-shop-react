import { Link } from "react-router-dom";

const MiddleHeader = () => {
  return (
    <div className="middle-header">
      <div className="middle-header-search-box">
        <input type="search" placeholder="ماذا تريد ؟" />
        <button className="search-box-btn">ابحث</button>
      </div>
      <Link to='/cart' className="middle-header-shopping-cart">
          سلة التسوق
        <i className="bi bi-cart3"></i>
        <span className="cart-notification">1</span>
      </Link>
    </div>
  );
};

export default MiddleHeader;
