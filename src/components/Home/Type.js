import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter 
      options={{
        strings: [
          "CSE Final Yr Student . .",
          "MERN Stack Developer . . ",
          "Competitive Programmer . .",
          "Open Source Contributor . .",
          "Backend (NodeJs) Developer . .",
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
