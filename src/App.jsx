import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useScramble } from "use-scramble";
import SiteTitle from "./components/SiteTitle";
import Home from "./pages/Home";
import Interests from "./pages/Interests";

export default function App() {
  const { ref: workRef, replay: replayWork } = useScramble({
    text: "work",
    speed: 0.4,
    scramble: 4,
    playOnMount: true
  });

  const { ref: interestsRef, replay: replayInterests } = useScramble({
    text: "interests",
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
          <Link to="/interests" ref={interestsRef} onMouseEnter={replayInterests} />
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interests" element={<Interests />} />
        </Routes>
      </main>
      <footer>© {new Date().getFullYear()} eyrin kim</footer>
    </div>
  );
}
