import React from "react";

const skills = ["JavaScript (ES6+)", "React", "HTML5", "CSS3", "Git", "REST APIs"];

function Skills() {
  return (
    <section id="skills" style={{ marginBottom: "2rem" }}>
      <h2>Skills</h2>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          listStyle: "none",
          padding: 0,
        }}
      >
        {skills.map((skill) => (
          <li
            key={skill}
            style={{
              padding: "0.35rem 0.7rem",
              borderRadius: "999px",
              background: "#111827",
              fontSize: "0.9rem",
            }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
