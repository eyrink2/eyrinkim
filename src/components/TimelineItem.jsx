import React from "react";

export default function TimelineItem({ item }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot" />
      <div className="timeline-content">
        <div className="timeline-date">{item.date}</div>
        <div className="timeline-role">
          <strong>{item.title}</strong>
          {item.org && <> @ <em>{item.org}</em></>}
        </div>
        {item.desc && <p>{item.desc}</p>}
        {item.skills && <p className="skills">{item.skills}</p>}
        {item.link && (
          <a href={item.link} target="_blank" rel="noreferrer">
            {item.link}
          </a>
        )}
      </div>
    </div>
  );
}
