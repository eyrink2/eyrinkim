import React from "react";
import { useScramble } from "use-scramble";

export default function TimelineItem({ item }) {
  const { ref: dateRef } = useScramble({
    text: item.date,
    speed: 0.3,
    scramble: 3,
    playOnMount: true
  });

  const { ref: titleRef } = useScramble({
    text: item.title,
    speed: 0.4,
    scramble: 4,
    playOnMount: true
  });

  const { ref: orgRef } = useScramble({
    text: item.org || "",
    speed: 0.3,
    scramble: 3,
    playOnMount: true
  });


  return (
    <div className="timeline-item">
      <div className="timeline-dot" />
      <div className="timeline-content">
        <div ref={dateRef} className="timeline-date" />
        <div className="timeline-role">
          <strong ref={titleRef} />
          {item.org && (
            <>
              {" "}@{" "}
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer" className="org-link">
                  <em ref={orgRef} />
                </a>
              ) : (
                <em ref={orgRef} />
              )}
            </>
          )}
        </div>
        {item.desc && <p>{item.desc}</p>}
        {item.skills && <p className="skills">{item.skills}</p>}
      </div>
    </div>
  );
}
