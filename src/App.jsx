import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Timeline from "./pages/Timeline";
import Anthology from "./pages/Anthology";
import Projects from "./pages/Projects";
import PageToggle from "./components/PageToggle";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Footer() {
  return (
    <footer className="site-footer">
      <a href="mailto:eyrinkim@stanford.edu" className="site-footer__link">eyrinkim@stanford.edu</a>
      <span className="site-footer__sep" aria-hidden="true">·</span>
      <a href="https://www.linkedin.com/in/eyrin-kim/" target="_blank" rel="noreferrer" className="site-footer__link">linkedin</a>
      <span className="site-footer__sep" aria-hidden="true">·</span>
      <span className="site-footer__meta">© {new Date().getFullYear()}</span>
    </footer>
  );
}

function TogglePages() {
  const { pathname } = useLocation();
  if (pathname !== "/" && pathname !== "/about") return null;
  return <PageToggle />;
}

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/anthology" element={<Anthology />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <TogglePages />
      <Footer />
    </div>
  );
}
