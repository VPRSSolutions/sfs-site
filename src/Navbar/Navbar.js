import "./Navbar.css";
import { useTypewriter } from "react-simple-typewriter";
import logo from "../images/logo.png";
import { CiMenuKebab } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useState } from "react";

function Navbar() {
  var navigate = useNavigate();

  const [move, setmove] = useState("");

  const [typewriter] = useTypewriter({
    words: ["Admissions open for the Academics year 2024-2025"],
    loop: {},
    typeSpeed: 80,
    delaySpeed: 40,
  });

  function movenav(value){
    setmove(value)
  }

  return (
    <div className="navbar">
      <div className="side-nav" style={{marginLeft: move}}>
        <h2 onClick={()=> movenav("-85%")} className="back-icon">
          <ImCross />
        </h2>
        <ul>
          <li onClick={()=> navigate("/")}>Home</li>
          <li onClick={()=> navigate("/Aboutschool")}>About Us</li>
          <li onClick={()=> navigate("/Events")}>Events</li>
          <li onClick={()=> navigate("/Facilities")}>Facilities</li>
          <li onClick={()=> navigate("/Gallerys")}>Gallery</li>
          <li onClick={()=> navigate("/onlinepayments")}>Online Payments</li>
          <li onClick={()=> navigate("/Sports")}>Our Achivements</li>
          <li onClick={()=> navigate("/Achivements")}>Our Alumni</li>
          <li onClick={()=> navigate("/Contact")}>Contact Us</li>
        </ul>
      </div>

      <div className="top">
        <div className="sliding-text-container">
          {/* <div className="sliding-text">
            Study Tour for 2nd Std On 16th March
          </div>
          <div className="sliding-text">
            Industrial Visit for 4th and 9th Std On 23rd March
          </div> */}
          <div className="sliding-text">
          Annual exam begins on 2nd April
          </div>
        </div>
      </div>
      <div className="center">
        <div className="school-name">
          <img src={logo} alt=""></img>
        </div>
        <div className="list">
          <ul>
          <li  onClick={()=> navigate("/")}>Home</li>
          <li onClick={()=> navigate("/Aboutschool")}>About Us</li>
          <li onClick={()=> navigate("/Events")}>Events</li>
          <li onClick={()=> navigate("/Facilities")}>Facilities</li>
          <li onClick={()=> navigate("/Gallerys")}>Gallery</li>
          <li onClick={()=> navigate("/onlinepayments")}>Online Payments</li>
          <li onClick={()=> navigate("/Sports")}>Our Achivements</li>
          <li onClick={()=> navigate("/Achivements")}>Our Alumni</li>
          <li onClick={()=> navigate("/Contact")}>Contact Us</li>
          </ul>
        </div>
        <div className="search">
          <span onClick={()=> movenav("0px")}>
            <CiMenuKebab />
          </span>
        </div>
      </div>
      <div className="bottom">
        <p>{typewriter}</p>
      </div>
    </div>
  );
}

export default Navbar;
