import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
} from "reactstrap";
import ScrollchorItem from "../ScrollchorItem";
import Scrollspy from "react-scrollspy";
import Img from "gatsby-image";
import classNames from "classnames";
import "./Navigation.css";

function Navigation({ logoImg }) {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = e => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    let scrolledDownEnough = scrollTop > 75 ? true : false;
    setHasScrolledDown(scrolledDownEnough);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseCollapse = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whiteBackground = hasScrolledDown
    ? "white-background navbar-border"
    : "";
  const fontColor = hasScrolledDown ? "blue-font" : "white-font";

  return (
    <Navbar className={whiteBackground} fixed={"top"} expand="md">
      <div className="container">
        <NavbarBrand
          href="https://www.sachinjadhav.in"
          className={fontColor}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Img
            fluid={logoImg.fluid}
            title="Logo"
            alt="Sachin Jadhav logo"
            className={classNames("img-responsive scrolledLogo", {
              logo: !hasScrolledDown,
            })}
          />
          SACHIN JADHAV
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar}>
          <i className={`fa  fa-navicon ${fontColor}`} />
        </NavbarToggler>
        <Collapse isOpen={isOpen} className={`${fontColor}`} navbar>
          <Scrollspy
            items={["about", "projects", "contact"]}
            currentClassName="active"
            className={`${fontColor} ml-auto navbar-nav`}
            navbar
          >
            <NavItem onClick={handleCloseCollapse}>
              <ScrollchorItem to="#about" className="nav-link">
                <span className={`${fontColor}`}>ABOUT ME</span>
              </ScrollchorItem>
            </NavItem>
            <NavItem onClick={handleCloseCollapse}>
              <ScrollchorItem to="#projects" className="nav-link">
                <span className={`${fontColor}`}>PROJECTS</span>
              </ScrollchorItem>
            </NavItem>
            <NavItem onClick={handleCloseCollapse}>
              <ScrollchorItem to="#contact" className="nav-link">
                <span className={`${fontColor}`}>CONTACT</span>
              </ScrollchorItem>
            </NavItem>
          </Scrollspy>
        </Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;
