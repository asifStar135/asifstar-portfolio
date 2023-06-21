import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter 
      options={{
        strings: [
          "CSE Final Yr Student . .",
          "Software Developer . .",
          "MERN Stack Developer . . ",
          "Open Source Contributor . .",
          "Backend (NodeJs) Developer . .",
          "Competitive Programmer . .",
          "Problem Solver . ."
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
