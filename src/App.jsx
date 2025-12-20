import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useScramble } from "use-scramble";
import SiteTitle from "./components/SiteTitle";
import Home from "./pages/Home";
import Interests from "./pages/Interests";
import Projects from "./pages/Projects";

function Footer() {
  const { ref: footerRef } = useScramble({
    text: `© ${new Date().getFullYear()} eyrin kim | eyrinkim@stanford.edu | `,
    speed: 0.3,
    scramble: 3,
    playOnMount: true
  });

  return (
    <footer>
      <span ref={footerRef} />
      <a href="https://www.linkedin.com/in/eyrin-kim/" target="_blank" rel="noreferrer">linkedin</a>
    </footer>
  );
}

export default function App() {
  const { ref: workRef, replay: replayWork } = useScramble({
    text: "timeline",
    speed: 0.4,
    scramble: 4,
    playOnMount: true
  });

  const { ref: interestsRef, replay: replayInterests } = useScramble({
    text: "anthology",
    speed: 0.4,
    scramble: 4,
    playOnMount: true
  });

  return (
    <div className="container">
      <header className="header">
        <SiteTitle />
        <nav>
          <Link to="/" ref={workRef} onMouseEnter={replayWork} />
          <Link to="/anthology" ref={interestsRef} onMouseEnter={replayInterests} />
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anthology" element={<Interests />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
