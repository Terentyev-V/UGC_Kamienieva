import React from "react";
import PhotoMain from "../images/PhotoMain.jpg";
import { Link } from "react-scroll";

export default function Section1() {
  return (
    <section className="section1">
      <div className="section1Left">
        <h1> Hi, I am Tetiana,</h1>
        <h2>making ugc content for your brand</h2>
        <button className="section1Button">
          <Link to="aboutMe" smooth={true} duration={500} offset={-70}>
            Learn more about me
          </Link>
        </button>
      </div>
      <div className="section1Right">
        <img className="photoMain" src={PhotoMain} alt="UGC Creator Kamienieva Tetiana" />
      </div>
    </section>
  );
}
