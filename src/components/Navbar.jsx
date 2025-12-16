import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [path, setPath] = useState("/");

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <h1 className="glow"> {"<AsifStar/>"} </h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item onClick={() => setPath("/")}>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
                className={path == "/" ? "nav-active" : "not-active"}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item onClick={() => setPath("/about")}>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                className={path == "/about" ? "nav-active" : "not-active"}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item onClick={() => setPath("/project")}>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                className={path == "/project" ? "nav-active" : "not-active"}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                My works
              </Nav.Link>
            </Nav.Item>

            <Nav.Item onClick={() => setPath("/resume")}>
              <Nav.Link
                as={Link}
                target="_blank"
                to={
                  "https://drive.google.com/file/d/1WvLYD8iN3SL7AZKMBdtU71B4cejMWvDR/view?usp=sharing"
                }
                onClick={() => updateExpanded(false)}
                className={
                  window.location.pathname == "/resume"
                    ? "nav-active"
                    : "not-active"
                }
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/asifstar135"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
