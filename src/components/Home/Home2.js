import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { HiAcademicCap, HiMail } from "react-icons/hi";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandCpp, TbDeviceDesktopCode } from "react-icons/tb";
import { TbHexagonNumber2 } from "react-icons/tb";
import { LuHeartHandshake } from "react-icons/lu";
import { ImPointRight } from "react-icons/im";
import { MdWeb } from "react-icons/md";
import { IoLogoNodejs } from "react-icons/io";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              THINGS ABOUT{" "}
              <span className="purple">
                <u>ME</u>
              </span>
            </h1>
            <p className="home-about-body">
              Hi Everyone, I am <b className="purple">MD Asif Mondal </b>
              from <b className="purple"> Dankuni, West Bengal, IN.</b>
              <br /> As an aspiring Software Engineer, I love bringing ideas to
              life through code, with over{" "}
              <TbHexagonNumber2 size={25} className="purple" /> years of
              hands-on experience.
              {/* graduated in BTech @CSE from{" "}
              <b className="purple">
                <a href="https://aliah.ac.in/" style={{ color: "inherit" }}>
                  Aliah University
                </a>
              </b>
              , NewTown-Kolkata. */}
              <br />
              I am currently looking for new opportunities where I can add
              values based on my skillset and experience.
              <br />
              <br />
              <FaAngleDoubleRight size={35} className="purple" />
              Worked as a Fullstack MERN Developer at{" "}
              <b className="purple">
                <a href="https://ditinex.com/" style={{ color: "inherit" }}>
                  Ditinex Enterprise
                </a>
              </b>{" "}
              where I was responsible for developing optimised and functional
              full-stack web-apps. <MdWeb size={25} className="purple" />
              <br />
              <br />
              <FaAngleDoubleRight size={35} className="purple" />
              Also had been a part of the backend team of{" "}
              <b className="purple">
                <a href="https://nashbud.com/" style={{ color: "inherit" }}>
                  Nashbud Inc
                </a>
              </b>{" "}
              as an intern and developed RESTful APIs and worked closely with
              frontend developers. <IoLogoNodejs size={25} className="purple" />
              <br />
              <br />
              <FaAngleDoubleRight size={35} className="purple" /> I'm an
              Engineer in <b className="purple">Computer Science </b> graduated
              from{" "}
              <b className="purple">
                <a href="https://aliah.ac.in/" style={{ color: "inherit" }}>
                  Aliah University
                </a>
              </b>
              , where I build my strength in CS fundamentals like OOPs, DBMS,
              Networking etc.
              <HiAcademicCap size={25} className="purple" />
              <br />
              <br />
              <FaAngleDoubleRight size={35} className="purple" />
              When I'm not buried in "dev", you can find me on{" "}
              <a
                href="https://leetcode.com/asif_star_135"
                target="_blank"
                className="purple"
              >
                Leetcode
              </a>{" "}
              tackling <b className="purple">Data Structures and Algorithms </b>{" "}
              problems with my trusty{" "}
              <TbBrandCpp size={25} className="purple" />. It's like a puzzle to
              me - challenging, yet incredibly satisfying when I crack it.{" "}
              <SiLeetcode size={25} className="purple" />
              <br />
              <br />
              <FaAngleDoubleRight size={35} className="purple" />
              So, if you're looking for someone who's not just passionate about
              coding but loves a good challenge as well, you've come to the
              right place. Let's collaborate and make some digital magic
              together! <LuHeartHandshake size={25} className="purple" />
              <br />
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <li
                className="about-activity"
                style={{ fontSize: "20px", margin: "6px 0" }}
              >
                <ImPointRight
                  style={{ marginRight: "1rem" }}
                  className="purple"
                  size={27}
                />{" "}
                Photography
              </li>
              <li
                className="about-activity"
                style={{ fontSize: "20px", margin: "6px 0" }}
              >
                <ImPointRight
                  style={{ marginRight: "1rem" }}
                  className="purple"
                  size={27}
                />{" "}
                Listening to Music
              </li>
              <li
                className="about-activity"
                style={{ fontSize: "20px", margin: "6px 0" }}
              >
                <ImPointRight
                  style={{ marginRight: "1rem" }}
                  className="purple"
                  size={27}
                />{" "}
                Travelling
              </li>
            </ul>
            <br />

            <p style={{ color: "rgb(155 126 172)", fontSize: "22px" }}>
              "Planning to make <span className="purple"> REST </span> of my
              Life, the <span className="purple"> BEST </span> of my Life"{" "}
            </p>
            <footer className="blockquote-footer"> Me </footer>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
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
                  href="https://linkedin.com/in/md-asif-mondal-20555421b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_STAR_ASIF_786"
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
