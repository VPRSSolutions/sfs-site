import "./Ourmission.css";
import mission from "../images/mission.jpg";
import vission from "../images/vission.jpg";

function Ourmission() {
  return (
    <div className="ourmission">
      <div data-aos="fade-up"className="container-main">
        <div className="card-main">
          <span>Fr.Peter Marie Mermier</span>
          <div className="imgBx">
            <img src={mission} alt="" />
          </div>
          <div className="contentBx">
            <h2>Our Mission</h2>
            <div className="size">
              <p>
                To provide a conducive atmosphere for intellectual development.
                <br></br>To facilitate conviction based spiritual formation.
                <br></br>To nurture a sense of the Divine and Transcendence.
                <br></br>To imbue the virtues of gentleness, Compassion and
                optimism.<br></br>To impart authentic leadership training.
                <br></br>To impart the wholesome professional ethics.<br></br>To
                encourage sports, games and work experince.<br></br>To inculcate
                healthy food habits<br></br>To promote environmental
                consciousness<br></br>To extend integral education to all
                <br></br>To Foster a caring and humane society meant to promote
                the marginalized and thus equip the young generation with needed
              </p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="container-main">
        <div className="card-main">
          <span>St.Francis De Sales</span>
          <div className="imgBx">
            <img src={vission} alt="" />
          </div>
          <div className="contentBx">
            <h2>Our Vision</h2>
            <div className="size">
              <p>
                A Holistic Society of Compassionately human, Spiritually
                enlightened, intellectually awakened, Professionally skilled,
                socially committed and culturally integrated persons based on
                the values as lived and taught by Jesus Christ and followed by
                saint Francis De sales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourmission;
