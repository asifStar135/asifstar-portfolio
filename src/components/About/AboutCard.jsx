import { Steps } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
const { Step } = Steps;

const desComponent = () => {
  return <p>Component</p>;
};

function AboutCard() {
  const [isAcademics, setIsAcademics] = useState(true);
  const academics = [
    {
      title: "Secondary - X",
      description: "Palasi HS Vidyamandir",
      subTitle: "2018",
    },
    {
      title: "HS - PCM",
      description: "Dhaniakhali MH Vidyamandir",
      subTitle: "2018-20",
    },
    {
      title: "BTech - CSE",
      description: "Aliah University",
      subTitle: "2020-24",
    },
  ];

  const experience = [
    {
      title: "Backend Developer Intern",
      subTitle: "March'23 - July'23",
      description: "Nashbud Inc.",
    },
    {
      title: "Full Stack Developer",
      subTitle: "Nov'23 - Current",
      description: "Ditinex Enterprise",
    },
  ];

  return (
    <Card className="quote-card-view">
      <Card.Body className="step-div">
        <div className="stepper">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: isAcademics && "#c770f0",
              gap: 4,
              margin: "0 2rem",
              cursor: "pointer",
            }}
            onClick={() => setIsAcademics(true)}
          >
            <HiOutlineAcademicCap size={30} />
            Academics
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: !isAcademics && "#c770f0",
              gap: 4,
              cursor: "pointer",
              margin: "0 2rem",
            }}
            onClick={() => setIsAcademics(false)}
          >
            <PiSuitcaseSimpleBold size={30} />
            Experience
          </div>
        </div>
        <div className="step-parent">
          <Steps
            direction="vertical"
            current={4}
            progressDot
            items={isAcademics ? academics : experience}
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
