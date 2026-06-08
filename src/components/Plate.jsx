import React from "react";

function Bolts() {
  return (
    <>
      <span className="back-bolt back-bolt--tl" aria-hidden="true" />
      <span className="back-bolt back-bolt--tr" aria-hidden="true" />
      <span className="back-bolt back-bolt--bl" aria-hidden="true" />
      <span className="back-bolt back-bolt--br" aria-hidden="true" />
    </>
  );
}

export default function Plate({ variant = "landing", children }) {
  if (variant === "landing") {
    return <div className="plate-landing">{children}</div>;
  }
  return (
    <div className="plate-back">
      <div className="plate-back__inner">
        <Bolts />
        {children}
      </div>
    </div>
  );
}
