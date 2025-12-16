import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ marginBottom: "25px", fontSize: "1rem" }}>
      <Typewriter
        options={{
          strings: [
            "Software Engineer . . .",
            "Full-Stack Typescript Dev . . .",
            "DS & Algo Enthusiast . . .",
            "Scalable Systems Builder . . .",
            "Problem-Solving Engineer . . .",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
