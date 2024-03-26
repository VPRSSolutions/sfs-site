import "./Principal.css";
import { useNavigate } from "react-router-dom";
import prins from "../images/kinder12.jpg";
import { BsArrowUpRightCircle } from "react-icons/bs";
const Principal = () => {
  var navigate = useNavigate();
  return (
    <div>
      <div className="principal-container">
        <div
        data-aos="fade-up"
          className="right-principal"
        >
          <h1>Fr.J.B. John Thadews MSFS</h1>
          <p>
            Jesus gives the following commandment as the second greatest one to
            be followed in ones life, “Love your neighbor as you love yourself”
            (Matthew 22:37–39).
          </p>
          <br></br>
          <p>
            Many of us have read and heard variety of messages about self-love
            and how to cultivate it. We have been told by many motivational
            speakers that we “can't expect anyone to love us until we learn to
            love ourselves.” But for many of those who've experienced childhood
            trauma, difficult relationships, or any other painful experiences,
            learning to love oneself may not be as easy as it is said.
          </p>
          <br></br>
          <p>
            Self-love is actually a skill one can develop — much like
            self-confidence or self-trust.
          </p>{" "}
          <br></br>
          <div className="see">
            <p
              style={{ fontWeight: 600 }}
              onClick={() => navigate("/Principalmessage")}
            >
              See More{" "}
              <span>
                <BsArrowUpRightCircle />
              </span>
            </p>
          </div>
        </div>
        <div
        data-aos="fade-up"
          className="left-principal"
        >
          <img src={prins} alt="" ></img>
        </div>
      </div>
    </div>
  );
};

export default Principal;
