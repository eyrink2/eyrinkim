import React from "react";
import Plate from "../components/Plate";

export default function Landing() {
  return (
    <div className="landing-wrap">
      <Plate variant="landing" />
      <p className="landing-note">
        This license plate was{" "}
        <a
          href="https://www.tn.gov/governor/news/2021/9/20/rate-the-plates--gov--lee-invites-tennesseans-to-pick-new-license-plate-design.html"
          target="_blank"
          rel="noreferrer"
        >
          one of four contenders
        </a>{" "}
        in 2021. Unfortunately, it didn&rsquo;t win, but I still think about it.
      </p>
    </div>
  );
}
