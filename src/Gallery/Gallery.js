import React, { useEffect, useState } from "react";
import Top from "../Topscll/Top";

import { Gallerydata } from "../gallery";
import "./Gallery.css";

import { IoImagesSharp } from "react-icons/io5";

import { BsCollectionFill } from "react-icons/bs";

import { PiMonitorPlayFill } from "react-icons/pi";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const App = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(Gallerydata);
    setCollection([...new Set(Gallerydata.map((item) => item.title))]);
  }, []);

  const galleryfilter = (itemdata) => {
    if (itemdata === "Videos") {
      const videoData = Gallerydata.filter((item) => item.title === "Videos");
      setData(videoData);
    } else {
      const filteredData = Gallerydata.filter(
        (item) => item.title === itemdata
      );
      setData(filteredData);
    }
  };

  return (
    <div>
      <Navbar />
      <Top />
      <h1 data-aos="fade-up-right" className="gal-head">
        <hr></hr>
        Our Gallery
        <hr></hr>
      </h1>
      <div className="gallery-wrapper">
        <div className="filteritem">
          <ul>
            <li onClick={() => setData(Gallerydata)}>
              <span className="log">
                <BsCollectionFill />
              </span>
              2023 - 2024
            </li>
            {collection.map((item) => (
              <li key={item} onClick={() => galleryfilter(item)}>
                <span className="log">
                  {/* Adjust icons according to your categories */}
                  {item === "Videos" ? (
                    <PiMonitorPlayFill />
                  ) : (
                    <IoImagesSharp />
                  )}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div data-aos="fade-up-right" className="gallery-container">
          {data.map((item) => (
            <div data-aos="fade-up-right" key={item.id} className="galleryitem">
              {item.title === "Videos" ? (
                <>
                  <div>
                    {item.video ? (
                      <iframe
                        className="vid"
                        src={item.video}
                        title="YouTube video player"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <a href={item.more} target="blank">
                        <div className="gallery-item">
                          <p>View all our videos on our YouTube channel.</p>
                        </div>
                      </a>
                    )}
                    <p className="vid-des">{item.description}</p>
                  </div>
                </>
              ) : (
                <img src={item.image} alt="" />
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
