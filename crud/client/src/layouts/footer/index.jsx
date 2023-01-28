import { Input } from "@mui/material";
import React from "react";
import "./index.scss";
const Footer = () => {
  return (
    <div id="footer">
      <div className="mainDiv">
        <div className="container">
          <div className="leftDiv">
            <img
              src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png"
              alt=""
            />
            <div className="inputAndBtn">
              <Input type="text" placeholder="Your Email" className="footerInput" />
              <div className="footerbtn">
                <button>Send</button>
              </div>
            </div>
          </div>
          <div className="rightDiv">
            <div className="footersection">
              <h2>About</h2>
              <ul>
                <li>About Us </li>
                <li>Our Partners</li>
                <li>Our Services</li>
              </ul>
            </div>
            <div className="footersection">
              <h2>Contact</h2>
              <ul>
                <li>Contact Us</li>
                <li>FAQ Page</li>
                <li>About Me</li>
              </ul>
            </div>
            <div className="footersection">
              <h2>Follow Us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
