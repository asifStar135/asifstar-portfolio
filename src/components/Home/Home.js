import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const [greet, setMsg] = useState("");
  const hr = new Date(Date.now()).getHours();

  useEffect(() => {
    if (hr >= 4 && hr < 12) {
      setMsg("Good Morning");
    } else if (hr >= 12 && hr < 18) {
      setMsg("Good Afternoon");
    } else if (hr >= 18 && hr < 22) {
      setMsg("Good Evening");
    } else {
      setMsg("Good Night");
    }
  }, [hr]);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {greet}. . .
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Md Asif Mondal</strong>
              </h1>

              <div style={{ paddingLeft: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
