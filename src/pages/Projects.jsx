import React from "react";
import proj1 from "./projects/project1.jpg";
import proj2 from "./projects/project2.png";
import proj3 from "./projects/project3.png";
import proj4 from "./projects/project4.png";
import proj5 from "./projects/project5.png";
import proj6 from "./projects/project6.jpg";

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
    paperLink: "/papers/customnudge.pdf",
    image: proj2
  },
  {
    title: "Quantifying the Alignment Tax",
    description: "The alignment tax is the tradeoff between increasing performance on safety and degradation of other benchmarks like loss of output diversity. We attempt to identify its origin by quantifying and pinpointing where this degradation occurs. Built for CS120.",
    paperLink: "/papers/alignment-tax.pdf",
    image: proj3
  },
  {
    title: "Flood Control using RL",
    description: "Reinforcement Learning framework that evaluates dam operation strategies by training Q-learning agents with distinct reward structures. Demonstrates RL as a policy analysis tool for quantifying flood control vs. water supply trade-offs. Built for CS238.",
    paperLink: "/papers/flood-control-rl.pdf",
    image: proj4
  },
  {
    title: "3D Scene Generation with Infinigen",
    description: "System that enables natural language control over procedural 3D content generation. Instead of relying on predefined templates, we directly accesse geometric primitive functions within Infinigen to construct arbitrary 3D assets from scratch. Built for CS231n.",
    paperLink: "/papers/infinigen.pdf",
    image: proj5
  },
  {
    title: "Eyrin's Newsletter Service",
    description: "Since everyone is going abroad, I'm creating a newsletter service that collects, compiles, and distributes responses to custom questions each month. Work in progress.",
    image: proj6
  }
];

function ProjectCard({ project }) {
  return (
    <article className="proj-card">
      <div className="proj-card__image-wrap">
        <img src={project.image} alt={project.title} className="proj-card__image" />
      </div>
      <div className="proj-card__body">
        <h3 className="proj-card__title">{project.title}</h3>
        <p className="proj-card__desc">{project.description}</p>
        <div className="proj-card__links">
          {project.paperLink && (
            <a href={project.paperLink} className="proj-card__link" target="_blank" rel="noreferrer">
              view paper
            </a>
          )}
          {project.videoLink && (
            <a href={project.videoLink} className="proj-card__link" target="_blank" rel="noreferrer">
              view video
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="proj-page">
      <h1 className="proj-page__title">PAST PROJECTS</h1>
      <div className="proj-grid">
        {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
      </div>
    </section>
  );
}
