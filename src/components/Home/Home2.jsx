import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaLinkedinIn,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", fontWeight: 300 }}>
              THINGS ABOUT{" "}
              <span className="purple" style={{ fontWeight: 700 }}>
                ME
              </span>
            </h1>
            <p className="home-about-body">
              Hi Everyone, I am <b className="purple">MD Asif Mondal </b>
              from <b className="purple"> Dankuni, West Bengal, IN.</b>
            </p>
            {/* SECTION ONE - MY JOURNEY */}
            <div>
              {/* HEADER GOES HERE */}
              <div
                style={{
                  display: "flex",
                  gap: ".5rem",
                  borderBottom: "2px solid #c770f0",
                  width: "50%",
                  margin: "2rem 0",
                }}
                className="purple"
              >
                <FaAngleDoubleRight size={35} />
                <h4>
                  <b> My journey </b>
                </h4>
              </div>

              {/* BULLETS GOES BELOW */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  margin: "0 1rem",
                  textAlign: "left",
                }}
              >
                <FaLongArrowAltRight size={20} className="purple" />
                <p>
                  CSE graudate from{" "}
                  <a
                    href="https://www.aliah.ac.in/"
                    className="purple"
                    target="_blank"
                  >
                    <b>Aliah University</b>
                  </a>{" "}
                  with a CGPA of 8.45.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  margin: "0 1rem",
                  textAlign: "left",
                }}
              >
                <FaLongArrowAltRight size={20} className="purple" />
                <p>
                  Knight Badge holder in{" "}
                  <a
                    href="https://leetcode.com/asif_star_135"
                    className="purple"
                    target="_blank"
                  >
                    <b>Leetcode.</b>
                  </a>{" "}
                  with 900+ questions and 2000+ global rating.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  margin: "0 1rem",
                  textAlign: "left",
                }}
              >
                <FaLongArrowAltRight size={20} className="purple" />
                <p>
                  Ex Fullstack Engineer at{" "}
                  <a
                    href="https://ditinex.com/"
                    className="purple"
                    target="_blank"
                  >
                    <b>Ditinex Enterprise</b>
                  </a>{" "}
                  along with few freelance works.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  margin: "0 1rem",
                  textAlign: "left",
                }}
              >
                <FaLongArrowAltRight size={20} className="purple" />
                <p>
                  Currently SWE at{" "}
                  <a
                    href="https://hashedin.com"
                    className="purple"
                    target="_blank"
                  >
                    <b>Hashedin by Deloitte</b>
                  </a>{" "}
                  developing scalable cloud-native systems.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  margin: "0 1rem",
                  textAlign: "left",
                }}
              >
                <FaLongArrowAltRight size={20} className="purple" />
                <p>
                  Still surfing in the tech-ocean for better places, let's
                  connect -{" "}
                  <a
                    href="https://www.linkedin.com/in/md-asif-mondal-20555421b/"
                    target="_blank"
                    className="purple"
                  >
                    <b>linkedin</b>
                  </a>
                </p>
              </div>
            </div>
            {/* SECTION TWO - WHAT I ENJOY */}
            <div>
              {/* HEADER GOES HERE */}
              <div
                style={{
                  display: "flex",
                  gap: ".5rem",
                  borderBottom: "2px solid #c770f0",
                  width: "50%",
                  margin: "2rem 0",
                }}
                className="purple"
              >
                <FaAngleDoubleRight size={35} />
                <h4>
                  <b> What I Enjoy </b>
                </h4>
              </div>

              {/* BULLETS GOES BELOW */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  margin: "0 1rem",
                  textAlign: "left",
                }}
              >
                <FaLongArrowAltRight size={20} className="purple" />
                <p>
                  Solve real world complex problems using programming magic.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  margin: "0 1rem",
                  textAlign: "left",
                }}
              >
                <FaLongArrowAltRight size={20} className="purple" />
                <p>
                  Building scalable, fast, responsive and secure applications.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  margin: "0 1rem",
                  textAlign: "left",
                }}
              >
                <FaLongArrowAltRight size={20} className="purple" />
                <p>
                  Learning new technologies and tools to grow as a Programmer &
                  Engineer.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
            <div>
              <h4 style={{ color: "white" }}>
                Want to know more about my{" "}
                <b className="purple">skills and experience </b> ?
              </h4>
              <a href="/about" className="about_section">
                <h4 className="purple">About Me</h4>
                <FaArrowUpRightFromSquare
                  size={20}
                  className="purple about_nav_icon"
                />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/asifstar135"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/asif_star_135"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/mdasif135"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_md_asif_135"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
