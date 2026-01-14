import { Steps } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import { FaTools } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { ImCalculator } from "react-icons/im";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { RiDiscountPercentFill } from "react-icons/ri";
const { Step } = Steps;

function AboutCard() {
  const [isAcademics, setIsAcademics] = useState(false);

  return (
    <Card className="quote-card-view">
      <Card.Body className="step-div">
        <div className="stepper">
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
        </div>
        <div className="step-parent">
          {isAcademics ? (
            <div>
              {/* BTech  */}
              <div style={{ marginTop: "2rem" }}>
                <div
                  style={{ display: "flex", gap: "1rem", textAlign: "left" }}
                >
                  <div>
                    <HiMiniSquares2X2 size={25} color="#c770f0" />
                  </div>
                  <div>
                    <h4 style={{ color: "#c770f0" }}>
                      BTech in CSE{" "}
                      <span
                        style={{
                          fontSize: 17,
                          color: "#bbbbbb",
                          marginLeft: 10,
                        }}
                      >
                        (2020 - 2024)
                      </span>
                    </h4>
                    <p style={{ color: "white", margin: "0.5rem" }}>
                      Aliah University{" "}
                      <a
                        href="https://aliah.ac.in"
                        target="_blank"
                        style={{ color: "#c770f0", margin: 10 }}
                      >
                        <FiExternalLink />
                      </a>
                    </p>
                    <p
                      style={{
                        color: "#bbbbbb",
                        margin: "0.5rem",
                        maxWidth: "75%",
                      }}
                    >
                      Completed my degree in Computer Science, build strong
                      foundation on core CS fundamentals like OS, DBMS, OOPs,
                      Algorithms etc.
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    color: "#c770f0",
                  }}
                >
                  <RiDiscountPercentFill
                    size={20}
                    style={{ margin: "0 .5rem" }}
                  />
                  <p>CGPA : 8.45</p>
                </div>
              </div>
              {/* Higher secondary  */}
              <div style={{ marginTop: "1rem" }}>
                <div
                  style={{ display: "flex", gap: "1rem", textAlign: "left" }}
                >
                  <div>
                    <HiMiniSquares2X2 size={25} color="#c770f0" />
                  </div>
                  <div>
                    <h4 style={{ color: "#c770f0" }}>
                      HS in PCM{" "}
                      <span
                        style={{
                          fontSize: 17,
                          color: "#bbbbbb",
                          marginLeft: 10,
                        }}
                      >
                        (2018 - 2020)
                      </span>
                    </h4>
                    <p style={{ color: "white", margin: "0.5rem" }}>
                      Dhaniakhali MH Vidyamandir
                    </p>
                    <p
                      style={{
                        color: "#bbbbbb",
                        margin: "0.5rem",
                        maxWidth: "75%",
                      }}
                    >
                      Studied Physics, Chemistry and Mathematics with strong
                      interest in problem-solving. Built a solid foundation in
                      analytical and logical thinking
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    color: "#c770f0",
                  }}
                >
                  <RiDiscountPercentFill
                    size={20}
                    style={{ margin: "0 .5rem" }}
                  />
                  <p>CGPA : 8.45</p>
                </div>
              </div>
              {/* Secondary  */}
              <div style={{ marginTop: "1rem" }}>
                <div
                  style={{ display: "flex", gap: "1rem", textAlign: "left" }}
                >
                  <div>
                    <HiMiniSquares2X2 size={25} color="#c770f0" />
                  </div>
                  <div>
                    <h4 style={{ color: "#c770f0" }}>
                      Secondary 10th{" "}
                      <span
                        style={{
                          fontSize: 17,
                          color: "#bbbbbb",
                          marginLeft: 10,
                        }}
                      >
                        (2018 )
                      </span>
                    </h4>
                    <p style={{ color: "white", margin: "0.5rem" }}>
                      Palasi HS Vidyamandir
                    </p>
                    <p
                      style={{
                        color: "#bbbbbb",
                        margin: "0.5rem",
                        maxWidth: "75%",
                      }}
                    >
                      Completed secondary education with a focus on science and
                      basic mathematics. Developed early interest in technology
                      and computers.
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    color: "#c770f0",
                  }}
                >
                  <RiDiscountPercentFill
                    size={20}
                    style={{ margin: "0 .5rem" }}
                  />
                  <p>CGPA : 8.45</p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {/* HASHEDIN  */}
              <div style={{ marginTop: "2rem" }}>
                <div
                  style={{ display: "flex", gap: "1rem", textAlign: "left" }}
                >
                  <div>
                    <HiMiniSquares2X2 size={25} color="#c770f0" />
                  </div>
                  <div>
                    <h4 style={{ color: "#c770f0" }}>
                      Software Engineer{" "}
                      <span
                        style={{
                          fontSize: 17,
                          color: "#bbbbbb",
                          marginLeft: 10,
                        }}
                      >
                        (Apr 2024 - Present)
                      </span>
                    </h4>
                    <p style={{ color: "white", margin: "0.5rem" }}>
                      HashedIn by Deloitte{" "}
                      <a
                        href="https://hashedin.com"
                        target="_blank"
                        style={{ color: "#c770f0", margin: 10 }}
                      >
                        <FiExternalLink />
                      </a>
                    </p>
                    <p
                      style={{
                        color: "#bbbbbb",
                        margin: "0.5rem",
                        maxWidth: "75%",
                      }}
                    >
                      Working as a Fullstack Cloud Engineer ensuring timely
                      delivery of scalable, feature-rich, secure and
                      user-friendly web applications using NextJs and Graphql.
                      Along with team collaboration and project management I've
                      implemented complex features including multiple services.
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginTop: "1rem",
                    color: "#c770f0",
                  }}
                >
                  <FaTools size={20} style={{ margin: "0 .5rem" }} />
                  <p>
                    NextJs | NodeJs | Typescript | GraphQL | AWS | PostgreSQL
                  </p>
                </div>
              </div>
              {/* DITINEX  */}
              <div style={{ marginTop: "1rem" }}>
                <div
                  style={{ display: "flex", gap: "1rem", textAlign: "left" }}
                >
                  <div>
                    <HiMiniSquares2X2 size={25} color="#c770f0" />
                  </div>
                  <div>
                    <h4 style={{ color: "#c770f0" }}>
                      Fullstack Developer{" "}
                      <span
                        style={{
                          fontSize: 17,
                          color: "#bbbbbb",
                          marginLeft: 10,
                        }}
                      >
                        (Dec 2023 - Sep 2024)
                      </span>
                    </h4>
                    <p style={{ color: "white", margin: "0.5rem" }}>
                      Ditinex Enterprise{" "}
                      <a
                        href="https://ditinex.com"
                        target="_blank"
                        style={{ color: "#c770f0", margin: 10 }}
                      >
                        <FiExternalLink />
                      </a>
                    </p>
                    <p
                      style={{
                        color: "#bbbbbb",
                        margin: "0.5rem",
                        maxWidth: "75%",
                      }}
                    >
                      As a Fullstack Developer, I've contributed to multiple
                      projects as part of multiple teams being flexible in both
                      front-end and back-end also in deployment. Improved my
                      teamwork and client delivery capability along with strong
                      development skills.
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginTop: "1rem",
                    color: "#c770f0",
                  }}
                >
                  <FaTools size={20} style={{ margin: "0 .5rem" }} />
                  <p>
                    ReactJs | NextJs | NodeJs | MongoDB | Stripe API |
                    TailwindCSS
                  </p>
                </div>
              </div>
              {/* NASHBUD */}
              <div style={{ marginTop: "1rem" }}>
                <div
                  style={{ display: "flex", gap: "1rem", textAlign: "left" }}
                >
                  <div>
                    <HiMiniSquares2X2 size={25} color="#c770f0" />
                  </div>
                  <div>
                    <h4 style={{ color: "#c770f0" }}>
                      Backend Developer Intern{" "}
                      <span
                        style={{
                          fontSize: 17,
                          color: "#bbbbbb",
                          marginLeft: 10,
                        }}
                      >
                        (Mar 2023 - July 2023)
                      </span>
                    </h4>
                    <p style={{ color: "white", margin: "0.5rem" }}>
                      Nashbud Inc{" "}
                      <a
                        href="https://linkedin.com/company/nashbud"
                        target="_blank"
                        style={{ color: "#c770f0", margin: 10 }}
                      >
                        <FiExternalLink />
                      </a>
                    </p>
                    <p
                      style={{
                        color: "#bbbbbb",
                        margin: "0.5rem",
                        maxWidth: "75%",
                      }}
                    >
                      Worked as the key Backend developer while developing and
                      deploying principle APIs, collaborating with Frontend
                      team. As my first position I've built my foundation in
                      software development.
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginTop: "1rem",
                    color: "#c770f0",
                  }}
                >
                  <FaTools size={20} style={{ margin: "0 .5rem" }} />
                  <p>NodeJs | ExpressJs | MongoDB | AWS - EC2 | JWT</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
