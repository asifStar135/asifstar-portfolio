import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="FunMedia"
              description="A fullstack social app built using MERN with bootstrap, JWT authentication and bcrypt password hashing. A User can creat-read-update-delete his/her account as well as post images, like other posts and many more stuffs. For media stuffs, I've used cloudinary."
              ghLink="https://github.com/asifStar135/FunMedia_MERN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MERN - CRUD"
              description="This is my first MERN project which is built on the basic DB operatioins - Create-Read-Update-Delete. Here you can create yout account with profile picture and bio along with hashed password, update all these and find out other users in the network."
              ghLink="https://github.com/asifStar135/crud-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="User Authentication API"
              description="This is a well-structured (Node + Express).Js API collection for creating any user related application. This API contains forgot-password functionality that works with a verification link and changes the password. Also updating the details are also supported."
              ghLink="https://github.com/asifStar135/User-Authentication-API"    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="WeatherBuddy"
              description="A very simple but useful frontend UI for fetching the weather details like temperature, humidity, sunset, sunrise, wind etc. You can search any city to view its real time weather condition. I've user REST API for fetching weather data of specific city and bootstrap for designing."
              ghLink="https://github.com/asifStar135/weatherbuddy"
              demoLink="https://weatherbuddy-asifstar.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Food-Mart"
              description="This is a very basic React.Js UI for a restaurant specifying the different types of menu. I've used a static API and classified the items according to its category - Breakfast, Lunch, Evening and Dinner."
              ghLink="https://github.com/asifStar135/FoodMart"
              demoLink="https://foodmart-hacto.netlify.app/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
