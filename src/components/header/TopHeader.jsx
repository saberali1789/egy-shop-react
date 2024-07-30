const TopHeader = ({setToggle}) => {
  return (
    <div className="top-header">
      <div className="top-header-menu">
        <i onClick={() => setToggle(true)} className="bi bi-list"></i>
      </div>
      <div className="top-header-logo">
        <i className="bi bi-basket2"></i>
        إيجي شوب
      </div>
      <div className="top-header-text">أهلا وسهلا بكم</div>
      <div className="top-header-phone">
        123-456-789
        <i className="bi bi-telephone"></i>
      </div>
    </div>
  );
};

export default TopHeader;
