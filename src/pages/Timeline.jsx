import React from "react";
import Plate from "../components/Plate";
import { timeline } from "../data/timeline";

const personalTimeline = [
  {
    date: "Nov 2025 – Present",
    title: "hanging out with folks way smarter than me",
    org: "Mayfield Fellows Program",
    link: "https://stvp.stanford.edu/mayfield-fellows-program/",
    desc: "according to the website: \"Founded in 1996, the MFP transforms 12 exceptional Stanford students annually into the entrepreneurs and leaders who shape the world.\""
  },
  {
    date: "at Stanford",
    title: "organizing",
    org: "Stanford Climate Week, Stanford Ventures, Dorm Room Fund",
    desc: "building for and with a community of students interested in startups, climate, tech, and the markets that shape all three."
  },
  {
    date: "Jun – Aug 2025",
    title: "admin",
    org: "FR8",
    desc: "helped run the world's first hacker hotel. lots of polar plunges into the finnish sea.",
    link: "https://fr8manifes.to/"
  },
  {
    date: "summer before college",
    title: "backpacking in the Monongahela National Forest",
    desc: "spent some time off the grid. \"west virginia, mountain mama\" took on new meaning."
  },
  {
    date: "my childhood",
    title: "growing up in the backyard of the Smoky Mountains",
    desc: "primarily quarry hopping and playing kickball barefoot. wrote a little, read a lot. the favicon for this website is a picture I took driving down foothills parkway."
  }
];

function Entry({ item }) {
  return (
    <li className="tl-entry">
      <div className="tl-entry__date">{item.date}</div>
      <div className="tl-entry__title">{item.title}</div>
      {item.org && (
        <div className="tl-entry__org">
          {item.link ? (
            <a href={item.link} target="_blank" rel="noreferrer">{item.org}</a>
          ) : (
            item.org
          )}
        </div>
      )}
      {item.desc && <p className="tl-entry__desc">{item.desc}</p>}
    </li>
  );
}

function Column({ label, items }) {
  return (
    <div className="tl-col">
      <h2 className="tl-col__label">{label}</h2>
      <ul className="tl-list">
        {items.map((item, i) => <Entry key={i} item={item} />)}
      </ul>
    </div>
  );
}

export default function Timeline() {
  return (
    <Plate variant="content">
      <div className="tl-grid">
        <Column label="PROFESSIONAL" items={timeline} />
        <div className="tl-divider" aria-hidden="true" />
        <Column label="PERSONAL" items={personalTimeline} />
      </div>
    </Plate>
  );
}
