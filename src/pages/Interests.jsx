import React from "react";
import { useScramble } from "use-scramble";

const interests = {
  Books: [
    "The Overstory — Richard Powers",
    "Braiding Sweetgrass — Robin Wall Kimmerer"
  ],
  Music: [
    "Joni Mitchell — Blue",
    "Novo Amor — Birthplace"
  ],
  Films: [
    "Past Lives",
    "Moonlight"
  ],
  Other: [
    "Waterfall hiking",
    "Freestyle baking",
    "Classical violin",
    "Wikipedia racing"
  ]
};

export default function Interests() {
  const { ref: sectionRef } = useScramble({
    text: "interests & favorites",
    speed: 0.6,
    scramble: 6,
    playOnMount: true
  });

  return (
    <section>
      <h2 ref={sectionRef} className="section-head" />
      <div className="grid">
        {Object.entries(interests).map(([k, v]) => (
          <div className="card" key={k}>
            <h3>{k}</h3>
            <ul>
              {v.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
