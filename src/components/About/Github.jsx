import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      <span className="purple coding-top"> {" GitHub "} </span>

      <GitHubCalendar
        username="asifstar135"
        blockSize={22}
        blockMargin={4}
        color="#c084f5"
        fontSize={14}
      />
    </Row>
  );
}

export default Github;
