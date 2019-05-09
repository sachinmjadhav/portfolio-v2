import React from "react";
import Scrollchor from "react-scrollchor";
import Img from "gatsby-image";
import "./Cover.css";

function Cover({ coverImg }) {
  return (
    <div id="#top" className="cover animated">
      <Img
        fluid={coverImg.fluid}
        title="Cover Image"
        alt="Air Balloon in nature"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          filter: "invert(30%)",
        }}
      />
      <div className="overlay" />
      <div className="center">
        <h1 className="name">
          <b>HI, I&apos;M SACHIN</b>
        </h1>
        <p className="greetings">Web Developer</p>
        <div className="cover_buttons">
          <a
            href="https://github.com/sachinmjadhav"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-social-icon"
            title={`External Link to my Github account`}
          >
            <span
              className={`fa fa-github cover_contact_icon`}
              alt={`External Link to my Github account`}
            />
          </a>

          <a
            href="https://twitter.com/sachinmjadhav"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-social-icon"
            title={`External Link to my Twitter account`}
          >
            <span
              className={`fa fa-twitter cover_contact_icon`}
              alt={`External Link to my Twitter account`}
            />
          </a>
        </div>
      </div>

      <div className="arrow bounceInDown">
        <Scrollchor to="#about" className="btn">
          <i className="fa fa-chevron-down" />
        </Scrollchor>
      </div>
    </div>
  );
}

export default Cover;
