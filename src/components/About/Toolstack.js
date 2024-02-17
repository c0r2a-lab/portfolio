import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiMacos,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { FaLinux } from "react-icons/fa";
import { BsFileBinary } from "react-icons/bs";
import { VscDebugConsole } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { TbBrandSlack } from "react-icons/tb";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
        <h6>Microsoft Visual Studio</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>Microsoft Visual Studio Code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
        <h6>Linux</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <h6>MacOS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFileBinary />
        <h6>IDA Pro</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscDebugConsole />
        <h6>OllyICE</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
        <h6>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandSlack />
        <h6>Slack</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;
