import React from "react";
import { BiSearch } from "react-icons/bi";
import Header from "../Header/Header";
import video from "./../../assets/maldivesVideo.mp4";
import "./Hero.css";
const Hero = ({ fixed }) => {
  return (
    <section id="hero">
      <Header fixed={fixed} />
      <video src={video} autoPlay muted loop></video>
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            First Class Travel <br /> Top 1% Location WorldWide
          </h1>
          <div className="input-group">
            <input
              type="search"
              id="search"
              placeholder="Search Your World.."
            />
            <button>
              <BiSearch />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
