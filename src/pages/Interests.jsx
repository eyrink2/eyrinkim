import React, { useEffect, useRef } from "react";
import { useScramble } from "use-scramble";
import { Link } from "react-router-dom";
import photoSrc from "./foto.jpg";

const interests = {
  Literature: [
    "Beautiful World, Where Are You",
    "Speak, Okinawa",
    "A Gentleman in Moscow",
    "Klara and the Sun",
    "all of the Anne of Green Gables works, but specifically the 8th and last novel"
  ],
  Essays: [
    { text: "The Ones who Walk Away from the Omelas", link: "https://shsdavisapes.pbworks.com/f/Omelas.pdf" },
    { text: "You don't need to work on hard problems", link: "https://www.benkuhn.net/hard/" },
    { text: "On Caring", link: "https://mindingourway.com/on-caring/" },
    { text: "No Good Alone", link: "https://internetprincess.substack.com/p/no-good-alone" }
  ],
  "Podcast episodes": [
    { text: "Joscha Bach on intelligence", link: "https://www.youtube.com/watch?v=3MkJEGE9GRY" },
    { text: "Bo Burnham on art and culture", link: "https://open.spotify.com/episode/0tQrS3zvE0JDnmF8RIUv3S" },
    { text: "John Green on our capacity for wonder", link: "https://open.spotify.com/episode/1MD4QeoLUvvv2a093NuhOn?si=e3c6642530b4424f" }
  ],
  "Research that changed my brain chemistry": [
    { text: "Micro-doppler work for SAR", link: "https://www.ieee.be/node/1192" },
    { text: "The original climate change paper", link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/1999gl900070" },
    { text: "In-context scheming", link: "https://arxiv.org/pdf/2412.04984" }
  ]
};

export default function Interests() {
  return (
    <section>
      <AboutSection />
      <div className="grid">
        {Object.entries(interests).map(([k, v]) => (
          <InterestCard key={k} category={k} items={v} />
        ))}
        <PastProjectsCard />
      </div>
    </section>
  );
}

function AboutSection() {
  const { ref: aboutRef } = useScramble({
    text: "about me",
    speed: 0.3,
    scramble: 6,
    playOnMount: true
  });
  const textBoxRef = useRef(null);
  const photoBoxRef = useRef(null);

  useEffect(() => {
    function syncHeights() {
      if (!textBoxRef.current || !photoBoxRef.current) return;
      const textHeight = textBoxRef.current.offsetHeight;
      photoBoxRef.current.style.height = `${textHeight}px`;
    }
    syncHeights();
    window.addEventListener('resize', syncHeights);
    return () => window.removeEventListener('resize', syncHeights);
  }, []);

  return (
    <div className="about-section">
      <h2 ref={aboutRef} className="section-head" />
      <div className="about-row">
        <div className="about-content" ref={textBoxRef}>
          <div className="about-text">
            <p>
              student learning about artificial intelligence & earth systems at Stanford and
              big fan of this planet. i'm deeply interested in the energy problem
              in america and believe it is the most critical issue of my generation. i love the conjunction
              between software & hardware, as reaffirmed by my most recent work with SAR satellites, and 
              also spend a lot of time thinking about green compute, the electric grid, and entropy. 
              in that vein, i'm perennially working to maximize my ability to solve interesting problems with interesting people.
            </p>
            <p>
              below is my personal multi-media anthology (that admittedly has little to do with the above
              and a lot to do with grappling with personhood). shoot me recommendations at eyrinkim@stanford.edu!
            </p>
          </div>
        </div>
        <div className="about-photo-outside" ref={photoBoxRef}>
          <img src={photoSrc} alt="about eyrin" />
        </div>
      </div>
    </div>
  );
}

function InterestCard({ category, items }) {
  const { ref: categoryRef } = useScramble({
    text: category,
    speed: 0.3,
    scramble: 4,
    playOnMount: true
  });

  return (
    <div className="interest-card">
      <h3 ref={categoryRef} className="interest-title" />
      <div className="card">
        <ul>
          {items.map((item, i) => (
            <InterestItem key={i} text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function InterestItem({ text }) {
  if (typeof text === 'string') {
    return <li>{text}</li>;
  } else if (text.link) {
    return (
      <li>
        <a href={text.link} target="_blank" rel="noreferrer" className="interest-link">
          {text.text}
        </a>
      </li>
    );
  }
  return <li>{text.text}</li>;
}

function PastProjectsCard() {
  const { ref: categoryRef } = useScramble({
    text: "past projects",
    speed: 0.3,
    scramble: 4,
    playOnMount: true
  });

  return (
    <div className="interest-card">
      <h3 ref={categoryRef} className="interest-title" />
      <div className="card">
        <ul>
          <li>
            <Link to="/projects" className="interest-link">
              some documentation & rough sketches
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
