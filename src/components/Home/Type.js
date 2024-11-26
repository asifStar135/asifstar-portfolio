import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack MERN Developer . . .",
          "Engineer in Computer Science . . .",
          "Data Structure & Algo expert . . .",
          "Problem Solving Engineer . . .",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
