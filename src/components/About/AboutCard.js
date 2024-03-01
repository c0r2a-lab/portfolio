import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineFieldBinary } from "react-icons/ai";
import { SiSpyderide } from "react-icons/si";
import { FaVirus } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ishihara Yuudai </span>
            from <span className="purple"> Shizuoka, Japan.</span>
            <br />
            
            My formative years were spent in Singapore until the age of 15. At that point, I relocated to Shizuoka, Japan, where I pursued a degree in Computer Science at Nagoya University.
            <br />
            Upon completing my studies, I obtained a Master's degree in Computer Science and transitioned into a role as a full stack engineer. Throughout my professional journey, I have actively engaged with cutting-edge technologies such as Machine Learning and Blockchain. I prioritize collaborative teamwork in all my endeavors, recognizing its importance in achieving impactful outcomes.
            <br />
            I also have secondary skills, they are:
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineFieldBinary /> Reverse Engineering
            </li>
            <li className="about-activity">
              <SiSpyderide /> Vulnerability Research
            </li>
            <li className="about-activity">
              <FaVirus /> Malware/Spyware Research
            </li>
          </ul>
          <p style={{textAlign: "justify"}}>Thanks.</p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't hesitate. Don't relax."{" "}
          </p>
          <footer className="blockquote-footer">Ishihara Yuudai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
