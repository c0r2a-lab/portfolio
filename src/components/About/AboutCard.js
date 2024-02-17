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
            I was born between Ishihara Tadashi and Jalan Bayer in Singapore on July 5th 1998 and I grew up there until when I was 15.
            When I was 15, I came back to Shizuoka and studied Computer Science at Nagoya University after this move.
            I got Master's degree in Computer Science there and started working as a full stack engineer.
            During working in real world, I have practiced cutting-edge technologies like Machine Learning and Blockchain.
            I put priority to team-work.
            <br />
            I also have secondary works, they are:
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
            "Don't hesitate. Go forward fixing previous mistakes."{" "}
          </p>
          <footer className="blockquote-footer">Ishihara Yuudai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
