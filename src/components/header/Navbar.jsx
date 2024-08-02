/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Navbar = ({setToggle, toggle}) => {
  return (
    <div>
      <nav style={{ right: toggle && 0 }} className="navbar">
        <div className="navbar-close-icon">
          <i onClick={() => setToggle(false)} className="bi bi-x-lg"></i>
        </div>
        <ul className="navbar-links">
          <Link to="/" onClick={() => setToggle(false)} className="navbar-link">
            الرئيسية
          </Link>
          <Link to="/products" onClick={() => setToggle(false)} className="navbar-link">
            إلكترونيات وموبايل
          </Link>
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
