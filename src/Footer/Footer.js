import React from "react";
import "./Footer.css";


import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="contact-info">
      <h2 className="contact-info__name">
        Saint Francis De Sales Matriculation Higher Secondary School
      </h2>
      <div className="line-content">
        <p className="contact-info__address">
          East, 4th Street, Kalif Nagar, Diamond Nagar, Pudukkottai, Tamil Nadu
          622001
        </p>
        <hr></hr>
        <p className="contact-info__phone">04322 265 198</p>
        <hr></hr>
        <p className="contact-info__email">sfsschool2012@gmail.com</p>
      </div>
      <div className="s-mm">
        <hr></hr>
        <div className="s-m">
          <a href="https://www.facebook.com/profile.php?id=100069357991469&mibextid=ZbWKwL"><FaFacebookF className="ffff"/></a>
          <a href="https://www.instagram.com/sfspudukkottai?igsh=cHIyZzdtbTByaG5r"><FaInstagram className="ffff"/></a>
          <a href="https://www.youtube.com/@SFSPudukkottai"><FaYoutube className="ffff"/></a>
        </div>
        <hr></hr>
      </div>
      <div className="copy">
        <div>
        <p >@ copy rights sfs school pudukkottai</p>
        </div>
        <div>
          <a style={{textDecoration:"none", color:"white"}} href="https://www.vprssolutions.com/"><p>Developed by <span style={{color:"#f6aa1c"}}>VPRS Solutions</span></p></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;