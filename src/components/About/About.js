import React from "react";
import "./About.css";
import Img from "gatsby-image";

function About({ profileImg }) {
  console.log("profileImg", profileImg);
  return (
    <section id="about" className="section container">
      <h2 className="text-center">ABOUT ME</h2>
      <div className="section-content">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <Img
              title="Profile Image"
              alt="Image of Sachin Jadhav"
              fluid={profileImg.fluid}
              className="img-responsive image"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 ">
            <h4>What I hope to do</h4>
            <p>
              My mission as a developer is to contribute to applications that
              empower and improve lives. I believe that through code we can make
              the world a better place by building products that empower
              communities. Yes, let&apos;s change the world together!
            </p>
            <h4>What I'm doing</h4>
            <p>
              {" "}
              On my free time, I am building web applications through the{" "}
              <a
                href="https://www.freecodecamp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FreeCodeCamp
              </a>{" "}
              curriculum, an open source coding community. On top of
              FreeCodeCamp, I listen to engineering podcasts, read tech blogs,
              watch conference talks and take other online courses in order to
              help me develop a growth mindset and become a better developer.
              Throughout this journey, I have learned to accept failure and use
              it as an opportunity to learn and grow.
            </p>
          </div>
        </div>
        <div className="row">
          <div className=" col-12 col-md-6 col-lg-6 mx-auto">
            <div className="box">
              <h5>Tollbox</h5>
              <p>
                <b>Languages and Frameworks:</b> Javascript, HTML5, CSS3,
                ReactJS, Redux, Bootstrap, NodeJS, ExpressJS, MongoDB <br />
                <b>IDE:</b> Microsoft VS Code <br />
                <b>VCS:</b> Git/GitHub <br />
                <b>Debugger:</b> Chrome DevTools <br />
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 mx-auto">
            <div className="box">
              <h5>Learning</h5>
              <p>
                <b>Currently:</b> GatsbyJS, GraphQL
                <br />
                <b>On the Radar:</b> JEST, Next.js, Python <br />
                <b>Others: </b>TDD, a11y, i18n
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
