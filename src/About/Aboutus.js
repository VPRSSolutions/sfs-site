import "./Aboutus.css";
import about from "../images/school.webp";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Aboutus() {
  var navigate = useNavigate();
  return (
    <div id="About" className="about">
      <h1 data-aos="fade-right"  data-aos-duration="2000">About School<span data-aos="fade-right" onClick={()=> navigate("/Aboutschool")}>See More<BsArrowUpRightCircle/></span></h1>
      <div className="about-content" style={{backgroundColor:"#f5f3f3"}}>
        <div  data-aos="zoom-in" className="about-left">
          <img src={about} alt=""></img>
        </div>
        <div  data-aos="zoom-in"  data-aos-duration="2000" className="about-rigth">
          <p>
            S.F.S Matriculation Higher Secondary School in Pudukkottai was
            founded on June 7, 1995, by Fr. Jose Puthiaparambil and Fr. Peter
            Chakkulickal. They bought 3 acres from Mr. Robert in 1982, initially
            for a seminary. This land, hosting Anbu Illam (Minor Seminary), was
            later repurposed for the school. Starting with 16 students in a
            thatched shed under Fr. C. Sebastin Raj, the school quickly
            expanded. By 1995, it added 1st Standard with a total of 44
            students. The school's first batch of 23 students graduated with
            First Class in their board exam in 2004, the same year the school
            advanced to a higher secondary level under the 8-year principalship
            of Fr. R. Mathias (1996-2004). The school's reputation and student
            body grew significantly over the years.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
