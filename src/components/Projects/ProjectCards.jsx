import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ paddingBottom: "5px" }}>
        <Card.Title style={{ fontWeight: 600, marginBottom: "1.5rem" }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.github} target="_blank">
          GitHub &nbsp; <BsGithub />
        </Button>
        {"\n"}
        {"\n"}

        <Button
          variant="primary"
          href={props.live}
          target="_blank"
          style={{ marginLeft: "10px" }}
          disabled={!props.live}
        >
          {props.live ? "Checkout" : "Live soon..."} &nbsp;
          <FiExternalLink />
        </Button>
        <div className="d-flex flex-wrap justify-content-center mt-3 gap-1">
          {props.techstack?.map((tech) => (
            <div
              className="tech-icons"
              style={{
                margin: "5px 0",
                padding: "2px 10px",
                fontSize: 14,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
