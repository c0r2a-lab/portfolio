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
            After my father was passed away, I came back to Shizuoka, my father's homeland, and studied Computer Science at Nagoya University after this move.
            I have got Master's degree in Computer Science and started working as a full stack engineer originally.
            During working in world, I have practiced some cutting-edge technologies such as Machine Learning and Blockchain technology and implemented them to real-life.
            I don't care how I was living before, I just focus on how I will work in the future since I believe I am still at starting point and have to learn more and more.
            <br />
            Also, what I am going to say is that I have secondary works, they are:
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
