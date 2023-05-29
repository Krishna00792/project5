import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={2000}
      >
        <div style={{height:'380px'}}>
          <img src={img1} alt="Item1" style={{minHeight:'370px'}} />
          <p className="legend">Full Stack <Link to={"/contact"}>Contact</Link> </p>
          
        </div>
        <div style={{height:'380px'}}>
          <img src={img2} alt="Item3" style={{minHeight:'370px'}} />
          <p className="legend">Peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
