import "./Sports.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Top from "../Topscll/Top";

import ach from "../images/ach1.jpeg";
import ach1 from "../images/ach2.jpeg.jpg";
import ach2 from "../images/ach3.jpg";
import ach3 from "../images/ach4.jpg";
import ach6 from "../images/ach6.jpg";

const Sports = () => {
  return (
    <div className="our-stud">
      <Navbar />
      <Top />
      <h1 data-aos="fade-up-right" className="achi">
        <hr></hr>
        Our Students Achievements
        <hr></hr>
      </h1>
      <div className="sport">
        <div data-aos="zoom-out-down" className="sports-container">
          <div className="sport-cont1">
            <img src={ach} alt="" />
            <div className="cont">
              <h3>Siddharthan T.V , Praveen.A , Ajay.V</h3>
              <p>
                <span>Sceintific Exhibition</span> - 2024
              </p>
              <h4>DISTRICT 2nd WINNER</h4>
            </div>
          </div>

          <div className="sports-cont2">
            <p>
              <RiDoubleQuotesL /> Fueling the future with AI brilliance! Our
              students shine bright, clinching 2nd prize at the district level
              in AI programming. Congratulations on your remarkable achievement!{" "}
              <RiDoubleQuotesR />
            </p>
          </div>
        </div>
        <div data-aos="zoom-out-down" className="sports-container">
          <div className="sport-cont1">
            <img src={ach1} alt="" />
            <div className="cont">
              <h3>Sanjay.C</h3>
              <p>
                <span>Basketball</span> - 2024
              </p>
              <h4>DISTRICT WINNER - STATE LEVEL PARTICIPANT</h4>
            </div>
          </div>
          <div className="sports-cont2">
            <p>
              <RiDoubleQuotesL /> Congratulations to Sanjay.C, our basketball
              ace, The District Winner for clinching the district title with
              exceptional skill and sportsmanship! and<br></br>
              Cheers to Sanjay.C representing us at the state level in
              basketball, showcasing remarkable talent and dedication!{" "}
              <RiDoubleQuotesR />
            </p>
          </div>
        </div>
        <div data-aos="zoom-out-down" className="sports-container">
          <div className="sport-cont1">
            <img src={ach2} alt="" />
          </div>
          <div className="sports-cont2">
            <div className="cont">
              <h3>Our School Junior Team</h3>
              <p>
                <span>Basketball</span> - 2024
              </p>
              <h4>DISTRICT WINNER</h4>
            </div>
            <p>
              <RiDoubleQuotesL /> Our junior basketball team has achieved the
              remarkable feat of claiming the title of district champions,
              showcasing exceptional talent, teamwork, and dedication. Their
              victory is a testament to their hard work and perseverance, and we
              are proud of their accomplishments. Congratulations to our young
              Players for their outstanding achievement! <RiDoubleQuotesR />
            </p>
          </div>
        </div>
        <div data-aos="zoom-out-down" className="sports-container">
          <div className="sport-cont1">
            <img src={ach3} alt="" />
          </div>
          <div className="sports-cont2">
            <div className="cont">
              <h3>Surenthar.D</h3>
              <p>
                <span>Net Ball</span> - 2024
              </p>
              <h4>
                PARTICIPATED IN NATIONAL LEVEL ON BEHALF OF NETBALL TAMILNADU
                TEAM
              </h4>
            </div>
            <p>
              <RiDoubleQuotesL /> Kudos to Surenthar.D the Perky Participant for
              representing the Netball Association of Tamil Nadu at the national
              level, demonstrating outstanding talent, and sportsmanship. His
              achievement is truly remarkable and serves as an inspiration to us
              all other students! <RiDoubleQuotesR />
            </p>
          </div>
        </div>
        <div data-aos="zoom-out-down" className="sports-container">
          <div className="sport-cont1">
            <img src={ach6} alt="" />
          </div>
          <div className="sports-cont2">
            <div className="cont">
              <h3>Merit Holders</h3>
              <p>
                <span>Abacus</span> - 2024
              </p>
              {/* <h4></h4> */}
            </div>
            <p>
              <RiDoubleQuotesL /> The abacus is a valuable tool for learning
              mathematics, aiding in developing number sense, arithmetic skills,
              and mental calculation abilities. It helps students grasp the
              base-10 system and fundamental arithmetic operations. Using an
              abacus can also improve concentration, memory, and overall
              mathematical proficiency.Our school students have excelled taking
              part in the competition.
              <RiDoubleQuotesR />
            </p>
          </div>
        </div>
        {/* <div data-aos="zoom-out-down" className="sports-container">
          <div className="sport-cont1">
            <img src={pers1} alt="" />
          </div>
          <div className="sports-cont2">
            <div className="cont">
              <h3>Nagaarjun.M</h3>
              <p>
                <span>Basketball</span> - 2020,2021,2023
              </p>
              <h4>NATIONALS WINNER</h4>
            </div>
            <p>
              <RiDoubleQuotesL /> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nisi quo libero natus, deserunt assumenda
              aperiam molestiae. Veniam hic aperiam tenetur iste quibusdam quae
              eos ipsam iure expedita dolorem, rerum nisi velit suscipit alias
              delectus, optio soluta quisquam totam, repellat voluptatum
              perspiciatis? Impedit quas laboriosam modi, a unde quibusdam
              autem. Odio? <RiDoubleQuotesR />
            </p>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Sports;
