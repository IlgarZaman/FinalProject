import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Header = () => {
  return (
    <div id="header">
      <div className="main">
        <div className="containerr">
          <div className="logo">
            <Link to={"/"}>
              <h2>Floral Studio</h2>
            </Link>
          </div>
          <div className="ulandli">
            <ul>
              <Link to={"/"} className="activeLink">
                <li>Home</li>
              </Link>
              <li className="activeLink">About us</li>
              <li className="activeLink">PortFolio</li>
              <li className="activeLink">Pricing</li>
              <li className="activeLink">Contacts</li>
              <Link to={"/addFlower"} className="activeLink">
                <li>Add Flower</li>
              </Link>
              <li className=" unactive">
                <i className="fa-solid fa-bars"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
