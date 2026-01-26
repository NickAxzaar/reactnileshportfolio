import React from "react";

function Resume() {
  return (
    <section id="resume" style={{ marginBottom: "2rem" }}>
      <h2>Resume</h2>
      <p>
        Download my resume as PDF{" "}
        <a
          href="/nilesh_kumar_ahirwar.pdf"
          download="nilesh_kumar_ahirwar.pdf"
        >
          View Resume
        </a>
      </p>
    </section>
  );
}

export default Resume;
