import "./Scroll.css";

import row1 from "../images/animators1.jpg";
import row2 from "../images/annual6.jpg";
import row3 from "../images/annual9.jpg";
import row4 from "../images/annual13.jpg";
import row5 from "../images/desalite4.jpg";
import row6 from "../images/desalite9.jpg";
import row7 from "../images/kam1.jpg";
import row8 from "../images/kinder11.jpg";
import row9 from "../images/plastic3.jpg";
import row10 from "../images/desalite1.jpg";
import row11 from "../images/e4.jpg";
import row12 from "../images/kinder6.jpg";
import row13 from "../images/kinder8.jpg";
import row14 from "../images/plastic8.jpg";
import row15 from "../images/plastic1.jpg";

function Scroll() {
  return (
    <div className="main-scroll">
      <div className="scroll">
        <div>
          <img src={row1} alt=""></img>
          <img src={row2} alt=""></img>
          <img src={row3} alt=""></img>
          <img src={row4} alt=""></img>
          <img src={row5} alt=""></img>
          <img src={row1} alt=""></img>
          <img src={row2} alt=""></img>
          <img src={row3} alt=""></img>
          <img src={row4} alt=""></img>
          <img src={row5} alt=""></img>
        </div>
      </div>
      <div className="scroll-1">
        <div>
          <img src={row6} alt=""></img>
          <img src={row7} alt=""></img>
          <img src={row8} alt=""></img>
          <img src={row9} alt=""></img>
          <img src={row10} alt=""></img>
          <img src={row6} alt=""></img>
          <img src={row7} alt=""></img>
          <img src={row8} alt=""></img>
          <img src={row9} alt=""></img>
          <img src={row10} alt=""></img>
        </div>
      </div>
      <div className="scroll-2">
        <div>
          <img src={row11} alt=""></img>
          <img src={row12} alt=""></img>
          <img src={row13} alt=""></img>
          <img src={row14} alt=""></img>
          <img src={row15} alt=""></img>
          <img src={row11} alt=""></img>
          <img src={row12} alt=""></img>
          <img src={row13} alt=""></img>
          <img src={row14} alt=""></img>
          <img src={row15} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Scroll;
