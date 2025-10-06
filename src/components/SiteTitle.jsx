import React from "react";
import { useScramble } from "use-scramble";

export default function SiteTitle() {
  const { ref, replay } = useScramble({
    text: "eyrin kim",
    speed: 0.8,
    scramble: 8,
    playOnMount: true
  });

  return (
    <h1 ref={ref} onMouseEnter={replay} className="title" />
  );
}
