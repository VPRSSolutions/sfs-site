import React from "react";
import "./Events.css";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Top from "../Topscll/Top";

// images
import classday from "../images/cd.jpg";
import dj from "../images/dj-min.jpg";
import dj2 from "../images/dj2-min.jpg";
import plastic from "../images/plastic.jpg";
// import jrc from "../images/jrc.jpg";
import seminor from "../images/damu7.jpg";
import plastic3 from "../images/plastic3.jpg";
import christmas from "../images/chrit2.jpg";
import kamaraj from "../images/kam2.jpg";
import kinder from "../images/kinder8.jpg";
import animator from "../images/animators4.jpg";
import best from "../images/beststudent.JPG";
import rank from "../images/rank.JPG";
import AI from "../images/AI.bmp";
import depart from "../images/depart2.png";
import yellow from "../images/yellow1.png";
import bookfree from "../images/bookfr11.jpeg"
import spk from "../images/sp4.jpeg"
import VII from "../images/7cld2.JPG"
import VI from "../images/clss4.JPG"
import tamil from "../images/td1.JPG"
import sprts from "../images/sprts.JPG"
import visit1 from "../images/visit1.jpg"


import { useNavigate } from "react-router-dom";

function Events(props) {
  var navigate = useNavigate();

  function eve(value) {
    props.setEventname(value);
    navigate("/EventDetails");
  }

  return (
    <div className="events-main">
      <Navbar />
      <Top />
      <div className="events">
        <hr></hr>
        <h1>Events</h1>
        <hr></hr>
      </div>
      <div className="event-card">
        {/* card1 */}
        <div className="m-card" data-aos="fade-up">
          <div className="cards">
            <img src={classday} alt="..." />
            <div className="card-body">
              <h3 className="card-title">Class Day</h3>
              <p className="card-text">
                "Everyone has talents. What is rare is the courage to showcase
                it ".
              </p>
              <button onClick={() => eve("Class Day")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
        {/* card2 */}
        <div className="m-card" data-aos="fade-up">
          <div className="cards">
            <img src={dj} alt="..." />
            <div className="card-body">
              <h3 className="card-title">Desalite Jubalates Annual Day</h3>
              <p className="card-text">
                Celebrate unity and talent at Desalite Jubalates Annual Day,
                where our students shine bright!
              </p>
              <button onClick={() => eve("Desalite Jubalates Annual Day")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
        {/* cards3 */}
        <div className="m-card" data-aos="fade-up">
          <div className="cards">
            <img src={dj2} alt="..." />
            <div className="card-body">
              <h3 className="card-title">Desalite Jubalates2.0 </h3>
              <p className="card-text">
                Celebrate unity and talent at Desalite Jubalates Annual Day,
                where our students shine bright!
              </p>
              <button onClick={() => eve("Desalite Jubalates2.0")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
        {/* card4 */}
        <div className="m-card" data-aos="fade-up">
          <div className="cards">
            <img src={yellow} alt="..." />
            <div className="card-body">
              <h3 className="card-title">Yellow Day</h3>
              <p className="card-text">
                Yellow day was celebrated on in SFS School poder Aug 5th to show
                the parents Row their little tots shine
              </p>
              <button onClick={() => eve("Yellow Day")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
        {/* card5 */}
        <div className="m-card" data-aos="fade-up">
          <div className="cards">
            <img src={plastic} alt="..." />
            <div className="card-body">
              <h3 className="card-title">Plastic Awareness Rally</h3>
              <p className="card-text">
                A Rally on "Say No to Plastic" was conducted by the students of
                SFS
              </p>
              <button onClick={() => eve("Plastic Awareness Rally")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>

        {/* cards7 */}
        <div className="m-card" data-aos="fade-up">
          <div className="cards">
            <img src={seminor} alt="..." />
            <div className="card-body">
              <h3 className="card-title">Seminar</h3>
              <p className="card-text">
                Teachers are also learners. "Staying updated is the key to
                success in any field, especially in education.
              </p>
              <button onClick={() => eve("Seminar")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
  
        <div className="m-card" data-aos="fade-up">
          <div className="cards">
            <img src={plastic3} alt="..." />
            <div className="card-body">
              <h3 className="card-title">J.R.C & Scout</h3>
              <p className="card-text">
                We learn to serve Mahatma Gandhi believed The best way to find
                yourself is to lose yourself in the service of others.
              </p>
              <button onClick={() => eve("J.R.C & Scout")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
        {/* card10 */}
        {/* cards11 */}
        <div className="m-card" data-aos="fade-up">
          <div className="cards">
            <img src={best} alt="..." />
            <div className="card-body">
              <h3 className="card-title">Best Student of The Month</h3>
              <p className="card-text">
                In the spotlight of excellence, our Student of the Month shines
                bright; A beacon of dedication, knowledge, and pure delight.
              </p>
              <button onClick={() => eve("Best Student of The Month")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
        {/* cards12 */}
        <div className="m-card" data-aos="fade-up">
          <div className="cards">
            <img src={rank} alt="..." />
            <div className="card-body">
              <h3 className="card-title">Scholorship for Rank Holders</h3>
              <p className="card-text">
                Celebrate academic excellence with scholarships awarded to
                top-performing Fransalians.
              </p>
              <button onClick={() => eve("Scholorship for Rank Holders")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
        {/* card13 */}
        <div className="m-card" data-aos="fade-up">
          <div className="cards">
            <img src={depart} alt="..." />
            <div className="card-body">
              <h3 className="card-title">English Department Day</h3>
              <p className="card-text">
                Fostering Academic Excellence and Cultural Diversity through
                Engaging Activities and Celebrations.
              </p>
              <button onClick={() => eve("English Department Day")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
        {/* card14 */}
        <div className="m-card"data-aos="fade-up">
          <div className="cards">
            <img src={AI} alt="..." />
            <div className="card-body">
              <h3 className="card-title">AI Class</h3>
              <p className="card-text">
                My SFS School proudly adds artificial intelligence in its
                educational curriculum.
              </p>
              <button onClick={() => eve("AI Class")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
        <div className="m-card"data-aos="fade-up">
          <div className="cards">
            <img src={christmas} alt="..." />
            <div className="card-body">
              <h3 className="card-title">Christmas Celebration</h3>
              <p className="card-text">
                School adorned festively, Minister Meyyanathan highlights caring
                and sharing essence.
              </p>
              <button onClick={() => eve("Christmas Celebration")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
        <div className="m-card"data-aos="fade-up">
          <div className="cards">
            <img src={kamaraj} alt="..." />
            <div className="card-body">
              <h3 className="card-title">Kamarajar Day</h3>
              <p className="card-text">
                Kamarajar Day was celebrated as Tamil Pepertunts say on 1ste
                July 2023.
              </p>
              <button onClick={() => eve("Kamarajar Day")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
        <div className="m-card"data-aos="fade-up">
          <div className="cards">
            <img src={sprts} alt="..." />
            <div className="card-body">
              <h3 className="card-title">Sports & Games</h3>
              <p className="card-text">
                Students have to participate in school sports to increase
                confidence, mental alertness, and self-esteem.
              </p>
              <button onClick={() => eve("Sports & Games")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
        <div className="m-card"data-aos="fade-up">
          <div className="cards">
            <img src={kinder} alt="..." />
            <div className="card-body">
              <h3 className="card-title">Kindergarten Inagural Day</h3>
              <p className="card-text">
                Kinder garden Inaugural Day was organised 5th of July 2023
                welcome the fertile seeds of to Frononcon the ofs garden.
              </p>
              <button onClick={() => eve("Kindergarten Inagural Day")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
        <div className="m-card"data-aos="fade-up">
          <div className="cards">
            <img src={animator} alt="..." />
            <div className="card-body">
              <h3 className="card-title">Animator</h3>
              <p className="card-text">
                Group Animators and Captains appointed to lead and engage
                students effectively.
              </p>
              <button onClick={() => eve("Animator")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
        <div className="m-card"data-aos="fade-up">
          <div className="cards">
            <img src={bookfree} alt="..." />
            <div className="card-body">
              <h3 className="card-title">Book Free Saturday</h3>
              <p className="card-text">
                Group Animators and Captains appointed to lead and engage
                students effectively.
              </p>
              <button onClick={() => eve("Book Free Saturday")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
        <div className="m-card"data-aos="fade-up">
          <div className="cards">
            <img src={spk} alt="..." />
            <div className="card-body">
              <h3 className="card-title">Award For Sopken English</h3>
              <p className="card-text">
                Group Animators and Captains appointed to lead and engage
                students effectively.
              </p>
              <button onClick={() => eve("Award For Spoken English")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
        <div className="m-card"data-aos="fade-up">
          <div className="cards">
            <img src={VII} alt="..." />
            <div className="card-body">
              <h3 className="card-title">VII Class Day</h3>
              <p className="card-text">
                Group Animators and Captains appointed to lead and engage
                students effectively.
              </p>
              <button onClick={() => eve("VII Class Day")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
        <div className="m-card"data-aos="fade-up">
          <div className="cards">
            <img src={VI} alt="..." />
            <div className="card-body">
              <h3 className="card-title">VI Class Day</h3>
              <p className="card-text">
                Group Animators and Captains appointed to lead and engage
                students effectively.
              </p>
              <button onClick={() => eve("VI Class Day")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
     
        <div className="m-card"data-aos="fade-up">
          <div className="cards">
            <img src={tamil} alt="..." />
            <div className="card-body">
              <h3 className="card-title">Tamil Department Day</h3>
              <p className="card-text">
                Group Animators and Captains appointed to lead and engage
                students effectively.
              </p>
              <button onClick={() => eve("Tamil Department Day")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
        <div className="m-card"data-aos="fade-up">
          <div className="cards">
            <img src={visit1} alt="..." />
            <div className="card-body">
              <h3 className="card-title">Study Tour For 1st Std</h3>
              <p className="card-text">
              Study Tour in SFS School is a Short Trip that enhances Students'
              Learning by providing real-field Experiences and they get new...
              </p>
              <button onClick={() => eve("Study Tour For 1st Std")}>
                <span>Read More</span> <BsArrowUpRightCircle className="read" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
