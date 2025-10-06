import React from "react";
import { useScramble } from "use-scramble";
import { timeline } from "../data/timeline";
import TimelineItem from "../components/TimelineItem";

const personalTimeline = [
  {
    date: "at Stanford",
    title: "organizing",
    org: "ASES, SSIG, Stanford Climate Week",
    desc: "building for and with a community of students interested in startups, climate, tech, and the markets that shape all three.",
  },
  {
    date: "summer 2025",
    title: "admin",
    org: "FR8",
    desc: "helped run the world's first hacker hotel. lots of polar plunges in the finnish sea.",
    link: "https://fr8manifes.to/",
  },
  {
    date: "the summer before Stanford",
    title: "backpacking in the Monongahela National Forest",
    desc: "loved being off the grid.",
  },
  {
    date: "my childhood",
    title: "growing up in the backyard of the Smoky Montains",
    desc: "primarily quarry hopping and playing kickball barefoot. wrote a little, read a lot.",
  }
];

export default function Home() {
  return (
    <section>
      <div className="dual-timeline">
        <div className="timeline-main">
          <h3 className="timeline-title">professional</h3>
          <div className="timeline">
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} />
            ))}
          </div>
        </div>
        <div className="timeline-personal">
          <h3 className="timeline-title">personal</h3>
          <div className="timeline timeline-half">
            {personalTimeline.map((item, i) => (
              <TimelineItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
