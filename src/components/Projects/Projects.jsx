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
      "A platform for buying and selling used motorbikes build with Mordern technologies. Helping owners to sell their bikes and customers to buy their dream bike.",
    github: "https://github.com/asifStar135/MotoConnect",
    live: null,
  },
  {
    title: "Flav-Ur - Recipe Companion",
    image: flavur,
    description:
      "Flav-ur is a full-stack recipe discovery and cookbook app built using Next.js, TypeScript, Tailwind CSS, and MongoDB. It allows users to search, save, and manage recipes while adding custom notes for a personalized cooking experience.",
    github: "https://github.com/asifStar135/flav-ur",
    live: "https://flav-ur-asif.vercel.app/",
  },
  {
    title: "QuickDrive - Car Rental",
    image: quickDrive,
    description:
      "A fullstack car rental platform built using MERN. Helping tourists to book a car for fun trips and also helping car owners to find customers to rent their cars.",
    github: "https://github.com/asifStar135/QuickDrive---Car-rental",
    live: "https://car-rental-pi-amber.vercel.app/",
  },
  {
    title: "Funmedia - Social web-app",
    image: funmedia,
    description:
      "A fullstack social app built using MERN with bootstrap, JWT authentication and bcrypt password hashing. A User can creat-read-update-delete their account as well as post images, like on other posts and many more stuffs. For media stuff I've used cloudinary.",
    github: "https://github.com/asifStar135/FunMedia_MERN",
    live: null,
  },
  {
    title: "CRUD Application",
    image: crud,
    description:
      "This is my first MERN project which is built on the basic DB operatioins - Create-Read-Update-Delete. Here you can create yout account with profile picture and bio along with hashed password, update all these and find out other users in the network.",
    github: "https://github.com/asifStar135/crud-app",
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
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
