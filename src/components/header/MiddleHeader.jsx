const MiddleHeader = () => {
  return (
    <div className="middle-header">
      <div className="middle-header-search-box">
        <input type="search" placeholder="ماذا تريد ؟" />
        <button className="search-box-btn">ابحث</button>
      </div>
      <div className="middle-header-shopping-cart">
          سلة التسوق
        <i className="bi bi-cart3"></i>
        <span className="cart-notification">1</span>
      </div>
    </div>
  );
};

export default MiddleHeader;
