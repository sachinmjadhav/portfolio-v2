import React from 'react';
import Scrollchor from 'react-scrollchor';
import Img from 'gatsby-image';
import './Cover.css';

function Cover({ coverImg }) {
  console.log('coverImg', coverImg)
  return(
    <div id="#top" className="cover animated">
      <Img 
        fluid={coverImg.fluid}
        title="Cover Image"
        alt="Air Balloon in nature"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          filter: 'invert(30%)',
        }}

      />
      <div className="overlay">
      </div>
      <div className="center">
        <h1 className="name">
          <b>HI, I&apos;M SACHIN</b>
        </h1>
        <p className="greetings">Front-End Developer</p>
      </div>
      <div className="arrow animated bounceInDown">
        <Scrollchor to="#about" className="btn" animate={{ duration: 500}}>
          <i className="fa fa-chevron-down"></i>
        </Scrollchor>
      </div>
    </div>
  )
}

export default Cover;