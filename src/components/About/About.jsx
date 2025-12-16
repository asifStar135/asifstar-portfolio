import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import leetcode from "../../Assets/leetcode.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              My profile <strong className="purple">Highlights </strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img d-flex align-items-center"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Technical <strong className="purple">Skillset </strong>
        </h1>

        <Techstack isConcept={false} />

        <h1 className="project-heading">
          Software Engineering <strong className="purple">Concepts</strong>
        </h1>
        <Techstack isConcept />

        <Github />

        <span className="purple coding-top"> {" LeetCode "} </span>
        <img src={leetcode} className="leetcode" alt="Leetcode Streak" />
      </Container>
    </Container>
  );
}

export default About;
