import { useState } from "react";
import "./header.css";
import MiddleHeader from "./MiddleHeader";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header">
      <TopHeader setToggle={setToggle} />
      <MiddleHeader />
      <Navbar setToggle={setToggle} toggle={toggle} />
    </div>
  );
};

export default Header;
