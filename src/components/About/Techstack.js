import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiBootstrap,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiExpress, SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { PiFileSqlDuotone } from "react-icons/pi";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus className="icon" />
        <p className="txt">C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 className="icon" />
        <p className="txt">Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <PiFileSqlDuotone className="icon" />
        <p className="txt">SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact className="icon" />
        <p className="txt">React.Js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit className="icon" />
        <p className="txt">Git & Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs className="icon" />
        <p className="txt">Node.Js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress className="icon" />
        <p className="txt">Express.Js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap className="icon" />
        <p className="txt">Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb className="icon" />
        <p className="txt">MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux className="icon" />
        <p className="txt">Redux Storage</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 className="icon" />
        <p className="txt">HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 className="icon" />
        <p className="txt">CSS3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss className="icon" />
        <p className="txt">TailwindCSS</p>
      </Col>
    </Row>
  );
}

export default Techstack;
