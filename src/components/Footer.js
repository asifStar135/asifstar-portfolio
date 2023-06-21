import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

import {HiMail} from "react-icons/hi"
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by AsifStar135</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} - AsifStar</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                  href="https://github.com/asifstar135"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://leetcode.com/asif_star_135"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiLeetcode/>
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://linkedin.com/in/md-asif-mondal-20555421b/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://www.instagram.com/_STAR_ASIF_786"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
