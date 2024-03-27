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
    words: ["Admissions open for the Academics year 2024-2025","Qualitative education with High Statndard","Fluent Spoken English and Decipline","Artificial intelligence, coding and Robotics","Foundation Course for (JEE, Neet) Std VI to IX","JEE, NEET coaching for XI","Foreign Languages : German and French VI to IX"],
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
          </div> */}
          <div className="sliding-text">
          Admissions open for the Academics year 2024-2025
          </div>
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
        <p style={{color:"red", fontSize:"12px",  padding:"2px",borderRadius:"5px"}}>{typewriter}</p>
      </div>
    </div>
  );
}

export default Navbar;
