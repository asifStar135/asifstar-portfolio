import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "CSE Final Year Student . . .",
          "Full Stack Developer . . .",
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
