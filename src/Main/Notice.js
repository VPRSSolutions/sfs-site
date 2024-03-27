import React, { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import "./Notice.css";
import popup from "../Gallery_images/popup.jpg"
const Notice = () => {
  const [notice, setnotice] = useState(true);

  return (
    <div style={{ display: notice ? "block" : "none" }}>
      <div className="notice">
        <div>
          <img src={popup} alt="" />
          <span onClick={() => setnotice(false)}>
            <HiMiniXMark />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Notice;