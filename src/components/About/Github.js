import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="c0r2a-hub"
        blockSize={25}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
      <GitHubCalendar
        username="c0r2a-lab"
        blockSize={25}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
