import React from "react";

function Navbar() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1.5rem",
      }}
    >
      <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>NILESH KUMAR AHIRWAR</div>
      <nav style={{ display: "flex", gap: "0.75rem", fontSize: "0.95rem" }}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
