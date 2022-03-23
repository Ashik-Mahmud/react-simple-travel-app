import React from "react";
import {
  bigImage,
  maldivies1,
  maldivies2,
  maldivies3,
  maldivies4,
} from "../../assets";
import "./Exclusive.css";
const Exclusive = () => {
  return (
    <section id="exclusive">
      <div className="container">
        <div className="title">
          <h2>All-Exclusive Resorts</h2>
          <p>On the carribian best beaches</p>
        </div>
        <div className="exclusive-content">
          <div className="item bigImage">
            <img src={bigImage} alt="maldives" />
          </div>
          <div className="item">
            <img src={maldivies1} alt="maldives" />
          </div>
          <div className="item">
            <img src={maldivies2} alt="maldives" />
          </div>
          <div className="item">
            <img src={maldivies3} alt="maldives" />
          </div>
          <div className="item">
            <img src={maldivies4} alt="maldives" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exclusive;
