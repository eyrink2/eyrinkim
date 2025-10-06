import React from "react";
import { useScramble } from "use-scramble";
import { timeline } from "../data/timeline";
import TimelineItem from "../components/TimelineItem";

export default function Home() {
  const { ref: sectionRef } = useScramble({
    text: "work & experience",
    speed: 0.6,
    scramble: 6,
    playOnMount: true
  });

  return (
    <section>
      <h2 ref={sectionRef} className="section-head" />
      <div className="timeline">
        {timeline.map((item, i) => (
          <TimelineItem key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
