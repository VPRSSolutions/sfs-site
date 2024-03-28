import "./Main.css";
import { useRef, useEffect } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Scroll from "../Scroll/Scroll";
import Top from "../Topscll/Top";
import { IoEarth } from "react-icons/io5";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import e1 from "../images/visit1.jpg";
import e2 from "../images/classday1.jpg";
import e3 from "../images/damu7.jpg";
import e4 from "../images/plastic1.jpg";
import { useTypewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import Aboutus from "../About/Aboutus";
import { FaWpforms } from "react-icons/fa";

import schl from "../images/schlll.jpeg";
import schl2 from "../images/school2.JPG";
import schl3 from "../images/school3.bmp";
import schl4 from "../images/schll.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Notice from "./Notice";

function Main() {
  var navigate = useNavigate();

  const [typewriter] = useTypewriter({
    words: ["Be a Desalite..."],
    loop: {},
    typeSpeed: 200,
    delaySpeed: 200,
  });

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    const interval = setInterval(() => {
      if (swiperInstance) {
        swiperInstance.slideNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main">
      <Notice/>
      <div className="register">
        <button
          onClick={() => {
            navigate("/RegisterForm");
          }}
        >
          <FaWpforms />
        </button>
        <p>Registration Form</p>
      </div>

      <Top />

      <div className="backtotop"></div>
      <div className="images">
        <div className="slide">
          <div className="slider">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              loop={true}
              autoplay={{ delay: 3000 }}
              className="swiperr"
            >
              <div className="image-container">
                <SwiperSlide className="swipe-image">
                  <img className="slider-image" src={schl} alt="" />
                  <div className="content">
                    <h1 data-aos="zoom-in">
                    To Excel,<br />
                      <span style={{ color: "#f6aa1c" }}>{typewriter}</span>
                    </h1>
                    <p data-aos="zoom-in">
                      <RiDoubleQuotesL /> Guiding through shadows, we ignite the
                      spark, transforming darkness into the light of wisdom.{" "}
                      <RiDoubleQuotesR />
                    </p>
                    <span data-aos="zoom-in">
                      Explore SFS School
                      <IoEarth className="earth" />
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="slider-image" src={schl2} alt="" />
                  <div className="content">
                    <h1 data-aos="zoom-in">
                    To Excel, <br />
                      <span style={{ color: "#f6aa1c" }}>{typewriter}</span>
                    </h1>
                    <p data-aos="zoom-in">
                      <RiDoubleQuotesL />
                      Nurturing the potential of each student to become
                      compassionate, responsiple and forward-thinking global
                      citizen equipped to positively impact and shape the
                      future.
                      <RiDoubleQuotesR />
                    </p>
                    <span data-aos="zoom-in">
                      Explore SFS School
                      <IoEarth className="earth" />
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="slider-image" src={schl3} alt="" />
                  <div className="content">
                    <h1 data-aos="zoom-in">
                    To Excel, <br />
                      <span style={{ color: "#f6aa1c" }}>{typewriter}</span>
                    </h1>
                    <p data-aos="zoom-in">
                      <RiDoubleQuotesL /> Empowering students at every level
                      through fostering communication and Celebrating
                      individuality
                      <RiDoubleQuotesR />
                    </p>
                    <span data-aos="zoom-in">
                      Explore SFS School
                      <IoEarth className="earth" />
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swipe-image">
                  <img className="slider-image" src={schl4} alt="" />
                  <div className="content">
                    <h1 data-aos="zoom-in">
                    To Excel, <br />
                      <span style={{ color: "#f6aa1c" }}>{typewriter}</span>
                    </h1>
                    <p data-aos="zoom-in">
                      <RiDoubleQuotesL />
                      "Discipline, Education, Proficiency in Spoken English:
                      Fostering Excellence in Every Student."
                      <RiDoubleQuotesR />
                    </p>
                    <span data-aos="zoom-in">
                      Explore SFS School
                      <IoEarth className="earth" />
                    </span>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>

          <Scroll />
        </div>
      </div>
      <Aboutus />
      <div className="event">
        <h1 data-aos="fade-right">
          Recent Events
          <span data-aos="fade-right" onClick={() => navigate("/Events")}>
            See More
            <BsArrowUpRightCircle />
          </span>
        </h1>
        <div className="eventss">
          <div
            className="banner"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            style={{ backgroundColor: "#621708" }}
          >
            <img src={e1} alt=""></img>
            <span>Study Tour For 1st Std</span>
            <p>
              Study Tour in SFS School is a Short Trip that enhances Students'
              Learning by providing real-field Experiences and they get new
              source of knowledge
            </p>
          </div>
          <div
            className="banner"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            style={{ backgroundColor: "#101010" }}
          >
            <img src={e2} alt=""></img>
            <span>Class Day</span>
            <p>
              "Everyone has talents. What is rare is the courage to showcase it
              ".
            </p>
          </div>
          <div
            className="banner"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            style={{ backgroundColor: "#023c40" }}
          >
            <img src={e3} alt=""></img>
            <span>Seminar</span>
            <p>
              Teachers are also learners. "Staying updated is the key to success
              in any field, especially in education.
            </p>
          </div>
          <div
            className="banner"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            style={{ backgroundColor: "#f6aa1c" }}
          >
            <img src={e4} alt=""></img>
            <span>Plastic Awareness Rally</span>
            <p>
              Marching for a cleaner Earth, in the rally of awareness, let's
              break free from plastic's curse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
