import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiJava,
} from "react-icons/di";
import {
  SiSolidity,
} from "react-icons/si";
import { GiArtificialIntelligence } from 'react-icons/gi'
import { FaPython } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { GiWavyChains } from "react-icons/gi";
import { SlGraph } from "react-icons/sl";
import { BsGraphUpArrow } from "react-icons/bs";
import { SiOpencv } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <GiArtificialIntelligence />
        <h6>Machine Learning</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
        <h6>Computer Vision</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsGraphUpArrow />
        <h6>Statistics</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiWavyChains />
        <h6>LLM</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SlGraph />
        <h6>Graph Neural Network</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
        <h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h6>Java</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h6>C++</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRust />
        <h6>Rust</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHiveBlockchain />
        <h6>Blockchain</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>JavaScript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6>Node.js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
        <h6>Solidity</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h6>MongoDB</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <h6>MySQL</h6>
      </Col>
      
    </Row>
  );
}

export default Techstack;
