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
I spent my formative years in Singapore until the age of 15 before relocating to Shizuoka, Japan, where I pursued a degree in Computer Science at Nagoya University.
<br /><br />
Upon completing my studies, I earned a Master's degree in Computer Science and transitioned into a role as a full stack engineer. Throughout my professional journey, I have actively engaged with cutting-edge technologies such as Machine Learning and Blockchain. I prioritize collaborative teamwork in all my endeavors, recognizing its importance in achieving impactful outcomes.
<br /><br />
Thank you.
</p>
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
