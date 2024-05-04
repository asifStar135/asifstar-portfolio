import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
} from "react-icons/si";
import { DiLinux, DiWindows } from "react-icons/di";
import { FaAws } from "react-icons/fa";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux className="icon" />
        <p className="txt">Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode className="icon" />
        <p className="txt">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman className="icon" />
        <p className="txt">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWindows className="icon" />
        <p className="txt">Windows</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws className="icon" />
        <p className="txt">AWS</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
