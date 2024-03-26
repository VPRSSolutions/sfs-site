import React from "react";
import "./Facilities.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Top from "../Topscll/Top";


const Facilities = () => {
  return (  
<div>
  <Navbar/>
  <Top/>
<div className="faci">
      <h1 data-aos="fade-up-right"  className="fac-h1">
        <hr></hr>
        Facilities
        <hr></hr>
        </h1>
      {/* <div  data-aos="fade-up"
     data-aos-duration="2000"  className="facilities">
        <div className="faclities-inner">
          <div>
            <p id="inner-p">
              The state-of-the-art auditorium hosts diverse events, providing
              opportunities for talent showcase and collaborative learning
              experiences.
            </p>
          </div>
          <div>
            <h3 id="inner-h1">AUDITORIUM</h3>
          </div>
        </div>
      </div> */}
      <div className="second-facilities">
        <div className="second">
          <div  data-aos="fade-up"
     data-aos-duration="2000" className="digi">
            <div className="faclitiess-inner">
              <div>
                <p id="inner-p">
                  Our school integrates modern educational practices through
                  digital classes, multimedia-rich learning
                  experiences to enhance academic growth.
                </p>
              </div>
              <div>
                <h3 style={{ textWrap: "nowrap" }} id="inner-h1">DIGITAL CLASS</h3>
              </div>
            </div>
          </div>
          <div  data-aos="fade-up"
     data-aos-duration="2000" className="se">
            <div className="faclitiess-inner">
              <div>
                <p id="inner-p">
                SFS School has spacious laboratories where students can perform researches, experiments or even learn new things with the help of internet facility
                </p>
              </div>
              <div>
                <h3 id="inner-h1">LABORATORIES</h3>
              </div>
            </div>
          </div>
        </div>
        <div  data-aos="fade-up"
     data-aos-duration="2000" className="se2">
          <div className="faclitiesss-inner">
            <div>
              <p id="inner-p">
              A library is the delivery room for the birth of ideas, a place where history comes to life. Norman Cousins
              </p>
            </div>
            <div>
              <h3 id="inner-h1">LIABRARY</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="secondd">
        <div  data-aos="fade-up"
     data-aos-duration="2000"  className="se3">
          <div className="faclitiess-inner">
            <div>
              <p style={{ padding: "5px" }} id="inner-p">
              SFS has initiated spoken English programmed to facilitate learning English in a way to get access to a broader range of information, connections and opportunities.
              </p>
            </div>
            <div>
              <h3 style={{ textWrap: "nowrap" }} id="inner-h1">SPOKEN ENGLISH</h3>
            </div>
          </div>
        </div>
        <div  data-aos="fade-up"
     data-aos-duration="2000" className="se4">
          <div className="faclitiess-inner">
            <div>
              <p id="inner-p">
              Sports develop the physical as well as mental strength in students. SFS provides daily physical exercise for students because exercise not only helps students to stay healthy, but it also helps to improve their emotional fitness.
              </p>
            </div>
            <div>
              <h3 style={{ textWrap: "nowrap" }} id="inner-h1">SPORTS & GAMES</h3>
            </div>
          </div>
        </div>
      </div>

      
      <div  data-aos="fade-up"
     data-aos-duration="2000" className="facilitis">
        <div className="faclities-inner">
          <div>
            <p id="inner-p">
           "Embark on a journey of safety, reliablity, and comfort with our school transportation service!"
            </p>
          </div>
          <div>
            <h3 id="inner-h1">TRANSPORTATION</h3>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
</div>  );
};

export default Facilities;