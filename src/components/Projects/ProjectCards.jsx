import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
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
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
