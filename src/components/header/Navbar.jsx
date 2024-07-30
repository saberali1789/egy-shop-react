/* eslint-disable react/prop-types */
const Navbar = ({setToggle, toggle}) => {
  return (
    <div>
      <nav style={{ right: toggle && 0 }} className="navbar">
        <div className="navbar-close-icon">
          <i onClick={() => setToggle(false)} className="bi bi-x-lg"></i>
        </div>
        <ul className="navbar-links">
          <li onClick={() => setToggle(false)} className="navbar-link">
            الرئيسية
          </li>
          <li onClick={() => setToggle(false)} className="navbar-link">
            إلكترونيات وموبايل
          </li>
          <li onClick={() => setToggle(false)} className="navbar-link">
            منزل ومطبخ
          </li>
          <li onClick={() => setToggle(false)} className="navbar-link">
            رجالي
          </li>
          <li onClick={() => setToggle(false)} className="navbar-link">
            نسائي
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
