import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import {SiLeetcode} from "react-icons/si"
import {HiMail} from "react-icons/hi"
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             THINGS ABOUT <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              I am passionate with programming & I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript, Java and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are &nbsp;
              <i>
                <b className="purple"> Fullstack Web development </b> and
                also in areas related to{" "}
                <b className="purple">
                  Cloud Computing
                </b>
              </i>
              <br />
              <br />
              My technical strengths are <b className="purple">C++</b> - in general problem solving, Javascript libraries like {" "}
              <b className="purple">Node.js, React.Js and Next.Js </b> - in Web-Dev and <b className="purple">MongoDb</b> for no-sql Database.
              <br/> <br/>
              I practice <b className="purple"> DSA </b> on Leetcode, GFG in daily basis to improve my <b className="purple">problem solving skills</b> and <b className="purple">Data Structures & Algorithm</b> knowledge. Also appear in <b className="purple"> Coding Contests</b> to test myself in time-bounded situation.
            </p>
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
                  <SiLeetcode/>
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
