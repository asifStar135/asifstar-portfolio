import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import funmedia from "../../Assets/Projects/funmedia.png";
import crud from "../../Assets/Projects/crud.png";
import flavur from "../../Assets/Projects/flav-ur.png";
import MotoConnect from "../../Assets/Projects/motoConnect.png";
import quickDrive from "../../Assets/Projects/quickDrive.png";

const projectData = [
  {
    title: "MotoConnect - Used bike platform",
    image: MotoConnect,
    description:
      "A used vehicle marketplace developed using NextJs and Springboot. Helping users to find second hand bikes of their choice and owners to get the best deal for their vehicles. Features : Vehicle recommendation, Deal alerts, Price bidding and many more.",
    github: "https://github.com/asifStar135/MotoConnect",
    techstack: [
      "NextJs",
      "SpringBoot",
      "Typescript",
      "TailwindCSS",
      "JWT",
      "Postgresql",
      "AWS",
    ],
    live: null,
  },
  {
    title: "QuickDrive - Car Rental",
    image: quickDrive,
    description:
      "A car rental platform built using MERN helping tourists to rent cars for road trips in a hassle free way. This helps car owners monetize their cars by listing it. Feature : Concurent Booking, Search available cars based on location & date and lot more to come.",
    github: "https://github.com/asifStar135/QuickDrive---Car-rental",
    techstack: [
      "ReactJs",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "JWT",
      "TailwindCSS",
    ],
    live: "https://car-rental-mdasif.vercel.app/",
  },
  {
    title: "Flav-Ur - Recipe Companion",
    image: flavur,
    description:
      "Flav-ur is a full-stack recipe companion web-app dedicated to food enthusiasts.It allows users to search millions of recipes, build custom cookbook, and manage recipes while adding custom notes for a personalized cooking experience.",
    github: "https://github.com/asifStar135/flav-ur",
    techstack: ["NextJs", "Typescript", "Clerk-auth", "MongoDB", "TailwindCSS"],
    live: "https://flav-ur-asif.vercel.app/",
  },
  {
    title: "Funmedia - Social web-app",
    image: funmedia,
    description:
      "A full-stack social media application to share your thoughts and connect with new peoples. Feature : Like, comment, share and much more.",
    github: "https://github.com/asifStar135/FunMedia_MERN",
    techstack: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB", "Bootstrap"],
    live: null,
  },
  {
    title: "CRUD Application",
    image: crud,
    description:
      "This is my first MERN project which is built on the basic operatioins - Create-Read-Update-Delete. Here you can create yout account with profile picture and bio along with hashed password, update all these and find out other users in the network.",
    github: "https://github.com/asifStar135/crud-app",
    techstack: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB", "Bootstrap"],
    live: null,
  },
];

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
          {projectData.map((project, index) => (
            <Col md={4} className="project-card">
              <ProjectCard
                key={index}
                imgPath={project.image}
                title={project.title}
                description={project.description}
                github={project.github}
                live={project.live}
                techstack={project.techstack}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
