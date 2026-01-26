import React from "react";

const projects = [
  {
    id: 1,
    title: "Movie Search App",
    description: "React app using OMDb API with search and details view.",
    image: "/images/movie-app.png", // put sample images in public/images
    link: "https://nickaxzaar.github.io/Movies-Searching-App/",
    repo: "https://github.com/NickAxzaar/Movies-Searching-App",
  },
  {
    id: 2,
    title: "Shopping Cart",
    description:
      "Context + useReducer based cart with add, remove, and quantity updates.",
    image: "/images/cart-app.png",
    link: "https://nickaxzaar.github.io/Shopping-Cart-with-Context-and-Reducers/",
    repo: "https://github.com/NickAxzaar/Shopping-Cart-with-Context-and-Reducers",
  },
];

function Projects() {
  return (
    <section id="projects" style={{ marginBottom: "2rem" }}>
      <h2>Projects</h2>
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {projects.map((project) => (
          <article
            key={project.id}
            style={{
              borderRadius: "0.75rem",
              background: "#020617",
              padding: "1rem",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              style={{
                width: "100%",
                borderRadius: "0.5rem",
                marginBottom: "0.75rem",
              }}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.75rem" }}>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer">
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
