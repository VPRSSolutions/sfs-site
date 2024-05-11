import React, { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import "./Notice.css";
// import popup from "../Gallery_images/popup.jpg"
import popup2 from "../Gallery_images/popup2.jpg"
import popup3 from "../Gallery_images/popup3.jpg"
const Notice = () => {
  const [notice, setnotice] = useState(true);

  return (
    <div style={{ display: notice ? "block" : "none" }}>
      <div className="notice">
        <div>
          {/* <img src={popup2} alt="" /> */}
          <img src={popup3}/>
          <span onClick={() => setnotice(false)}>
            <HiMiniXMark />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Notice;