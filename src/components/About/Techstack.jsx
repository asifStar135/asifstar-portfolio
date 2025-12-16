import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiBootstrap,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import {
  SiAntdesign,
  SiExpress,
  SiGraphql,
  SiJsonwebtokens,
  SiNextdotjs,
  SiNginx,
  SiPostman,
  SiReacthookform,
  SiRedux,
} from "react-icons/si";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { PiFileSqlDuotone } from "react-icons/pi";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws, FaDocker, FaJava, FaLinux, FaNodeJs } from "react-icons/fa";

const techData = [
  {
    title: "Languages",
    items: [
      {
        name: "C / C++",
        icon: <CgCPlusPlus className="icon" />,
      },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="icon" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="icon" />,
      },
      {
        name: "SQL",
        icon: <PiFileSqlDuotone className="icon" />,
      },
      {
        name: "GraphQL",
        icon: <SiGraphql className="icon" />,
      },
      {
        name: "Java",
        icon: <FaJava className="icon" />,
      },
    ],
  },
  {
    title: "Frontend",
    items: [
      {
        name: "React",
        icon: <DiReact className="icon" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="icon" />,
      },
      {
        name: "React Hook Form",
        icon: <SiReacthookform className="icon" />,
      },
      {
        name: "Redux",
        icon: <SiRedux className="icon" />,
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="icon" />,
      },
      {
        name: "Ant Design",
        icon: <SiAntdesign className="icon" />,
      },
    ],
  },
  {
    title: "Backend & DB",
    items: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="icon" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="icon" />,
      },
      {
        name: "MongoDB",
        icon: <DiMongodb className="icon" />,
      },
      {
        name: "PostgreSQL",
        icon: <BiLogoPostgresql className="icon" />,
      },
      {
        name: "GraphQL API",
        icon: <GrGraphQl className="icon" />,
      },
      {
        name: "JWT",
        icon: <SiJsonwebtokens className="icon" />,
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        name: "Git & Github",
        icon: <DiGit className="icon" />,
      },
      {
        name: "AWS",
        icon: <FaAws className="icon" />,
      },
      {
        name: "Docker",
        icon: <FaDocker className="icon" />,
      },
      {
        name: "NginX",
        icon: <SiNginx className="icon" />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="icon" />,
      },
      {
        name: "Linux",
        icon: <FaLinux className="icon" />,
      },
    ],
  },
];

const conceptData = [
  { name: "Data Structures & Algorithms" },
  { name: "Object-Oriented Programming" },
  { name: "High-Level System Design" },
  { name: "Building Cloud-native Applications" },
  { name: "API Design (REST & GraphQL)" },
  { name: "Authentication & Authorization" },
  { name: "Role-Based Access Control (RBAC)" },
  { name: "Database Management Systems" },
  { name: "Database Schema Design" },
  { name: "Caching & Performance Optimization" },
  { name: "Computer Networks" },
  { name: "Operating Systems" },
  { name: "Security Best Practices" },
];

function Techstack({ isConcept = false }) {
  return (
    <Row style={{ justifyContent: "space-around", paddingBottom: "50px" }}>
      {isConcept ? (
        <div className="d-flex flex-wrap justify-content-center">
          {conceptData.map((item) => {
            return (
              <div
                className="tech-icons"
                style={{
                  margin: "10px",
                }}
              >
                <h5>{item.name}</h5>
              </div>
            );
          })}
        </div>
      ) : (
        techData.map((tech) => {
          return (
            <Col md={5} xxl={5} className="tech-icons">
              <h2
                style={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {tech.title}
              </h2>
              <div className="d-flex flex-wrap gap-3 justify-content-center my-3">
                {tech.items.map((item) => {
                  return (
                    <div className="tech-card">
                      {item.icon}
                      <h4>{item.name}</h4>
                    </div>
                  );
                })}
              </div>
            </Col>
          );
        })
      )}
    </Row>
  );
}

export default Techstack;
