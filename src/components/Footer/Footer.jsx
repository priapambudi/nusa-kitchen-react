import React from "react";
import "./Footer.css";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import facebook from "../../assets/facebook.png";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer">
        <div className="footer-col">
          <Logo />
          <div className="socialmedia">
            <a href="">
              <img src={instagram} alt="" />
            </a>
            <a href="">
              <img src={youtube} alt="" />
            </a>
            <a href="">
              <img src={facebook} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h3>Open Hours</h3>
          <p>Mon-Fri</p>
          <p>10.00-21.00</p>
          <p>Sat-Sun</p>
          <p>10.00-23.00</p>
        </div>
        <div className="footer-col">
          <h3>Location</h3>
          <p>
            Jl. Raya Imam Bonjol No. 10A Denpasar Utara, Kota Denpasar Indonesia
          </p>
          <p>0251-7654321</p>
        </div>
      </div>
      <p className="copyright">
        Copyright ©2024 All rights reserved | Nusa Kitchen |
        <span> Pria Pambudi</span>
      </p>
    </>
  );
};

export default Footer;
