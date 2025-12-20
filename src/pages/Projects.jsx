import React from "react";
import { useScramble } from "use-scramble";
// Import project images:
import proj1 from "./projects/project1.jpg";
import proj2 from "./projects/project2.png";
import proj3 from "./projects/project3.png";
import proj4 from "./projects/project4.png";
import proj5 from "./projects/project5.png";
import proj6 from "./projects/project6.jpg";

// PDF files should be uploaded to: public/papers/
// Then reference them as: /papers/filename.pdf
// Example: /papers/customnudge.pdf

const projects = [
  {
    title: "Mercury",
    description: "HackMIT 2025 1st Place Fetch AI Prize and Final Panel Presenter. Built a smart home sustainability AI agent that automatically adjusts lighting, temperature, and more based on climate conditions.",
    paperLink: "https://medium.com/@karenvo/mercury-ai-agents-that-equip-your-home-81fa1f3abcdf",
    videoLink: "https://www.youtube.com/watch?v=3rIe4plbECU",
    image: proj1
  },
  {
    title: "CustomNudge",
    description: "CustomNudge transforms desktop activity into semantic behavioral signals, identifies meaningful drift, and employs a decision engine that refines its intervention policy through in-context learning informed by implicit behavioral feedback. Built for CS329x.",
    paperLink: "/papers/customnudge.pdf", // Upload PDF to public/papers/customnudge.pdf
    image: proj2
  },
  {
    title: "Quantifying the Alignment Tax",
    description: "The alignment tax is the tradeoff between increasing performance on safety and degradation of other benchmarks like loss of output diversity. We attempt to identify its origin by quantifying and pinpointing where this degradation occurs. Built for CS120.",
    paperLink: "/papers/alignment-tax.pdf", // Upload PDF to public/papers/alignment-tax.pdf
    image: proj3
  },
  {
    title: "Flood Control using RL",
    description: "Reinforcement Learning framework that evaluates dam operation strategies by training Q-learning agents with distinct reward structures. Demonstrates RL as a policy analysis tool for quantifying flood control vs. water supply trade-offs. Built for CS238.",
    paperLink: "/papers/flood-control-rl.pdf", // Upload PDF to public/papers/flood-control-rl.pdf
    image: proj4
  },
  {
    title: "3D Scene Generation with Infinigen",
    description: "System that enables natural language control over procedural 3D content generation. Instead of relying on predefined templates, we directly accesse geometric primitive functions within Infinigen to construct arbitrary 3D assets from scratch. Built for CS231n.",
    paperLink: "/papers/infinigen.pdf", // Upload PDF to public/papers/infinigen.pdf
    image: proj5
  },
  {
    title: "Eyrin's Newsletter Service",
    description: "Since everyone is going abroad, I'm creating a newsletter service that collects, compiles, and distributes responses to custom questions each month. Work in progress.",
    // No paper link for this project
    image: proj6
  }
];

export default function Projects() {
  const { ref: titleRef } = useScramble({
    text: "past projects",
    speed: 0.3,
    scramble: 4,
    playOnMount: true
  });

  return (
    <section className="projects-section">
      <h2 ref={titleRef} className="section-head" />
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          {project.paperLink && project.paperLink !== "#" && (
            <a href={project.paperLink} className="project-link" target="_blank" rel="noreferrer">
              view paper
            </a>
          )}
          {project.videoLink && (
            <a href={project.videoLink} className="project-link" target="_blank" rel="noreferrer">
              view video
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

