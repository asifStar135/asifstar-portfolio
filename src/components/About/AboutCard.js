import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">MD ASIF MONDAL </span>
            from <span className="purple"> Kolkata, India.</span>
            <br /> I am a final year student pursuing BTech in CSE
            at <span className="purple"><a href="https://aliah.ac.in/" style={{color: "inherit"}}>
              Aliah University</a> </span> , NewTown-Kolkata.
            <br />
            Additionally, I am currently employed as Backend developer intern at <span className="purple"><a href="https://nashbud.com" style={{color: "inherit"}}>Nashbud</a> </span>.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight style={{marginRight:"1rem"}}/>  Photography
            </li>
            <li className="about-activity">
              <ImPointRight style={{marginRight:"1rem"}} /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight style={{marginRight:"1rem"}} /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Planning to make <span className="purple"> REST </span> of my Life, the <span className="purple"> BEST </span> of my Life"{" "}
          </p>
          <footer className="blockquote-footer"> Me </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
