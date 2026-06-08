import React from "react";
import Plate from "../components/Plate";

const categories = [
  {
    label: "WORK",
    items: [
      { role: "Energy & Infrastructure", org: "Crusoe", link: "https://www.crusoe.ai/"},
      { role: "Forward Deployed Engineer", org: "Unlimited Industries", link: "https://www.unlimitedindustries.com/"},
      { role: "R&D Software Engineer", org: "ICEYE", link: "https://www.iceye.com/"},
      { role: "Student Associate", org: "Ubiquity Ventures", link: "https://ubiquity.vc" }
    ]
  },
  {
    label: "STANFORD",
    items: [
      { role: "Fellow", org: "Mayfield Fellows Program", link: "https://stvp.stanford.edu/mayfield-fellows-program/" },
      { role: "VP", org: "Stanford Climate Week", link: "https://www.stanfordclimateweek.com/" },
      { role: "Frontier Fellowship Director", org: "Stanford Ventures", link: "https://svfund.stanford.edu/" },
      { role: "Partner", org: "Dorm Room Fund", link: "https://www.dormroomfund.com/" }
    ]
  },
  {
    label: "RESEARCH",
    items: [
      { role: "Student Researcher", org: "ECHO Lab", link: "https://www.stanfordecholab.com/" },
      { role: "Formerly", org: "Oak Ridge National Lab", link: "https://www.ornl.gov/" }
    ]
  },
  {
    label: "OTHER",
    items: [
      { role: "Polar plunges in the Finnish sea", org: "FR8", link: "https://fr8manifes.to/" },
      { role: null, org: null, plain: "Backpacking through Appalachia & California" },
    ]
  }
];

function Bullet({ item }) {
  if (item.plain) {
    return <li className="about-item about-item--plain">{item.plain}</li>;
  }
  const orgEl = item.link ? (
    <a href={item.link} target="_blank" rel="noreferrer" className="about-org">{item.org}</a>
  ) : (
    <span className="about-org">{item.org}</span>
  );
  if (!item.role) {
    return <li className="about-item">{orgEl}</li>;
  }
  return (
    <li className="about-item">
      <span className="about-role">{item.role}</span>{" @ "}{orgEl}
      {item.note && <span className="about-note"> ({item.note})</span>}
    </li>
  );
}

export default function About() {
  return (
    <Plate variant="back">
      <div className="about-grid">
        <div className="about-col about-col--left">
          <div className="about-photo-wrap">
            <img src="/headshot.jpg" alt="Eyrin Kim" className="about-photo" />
          </div>
          <p className="about-bio">
            Student learning about computation &amp; earth systems at Stanford, originally from Tennessee. 
            I&rsquo;m deeply interested America&rsquo;s energy stack and spend a lot of time thinking about earth observation, the electric
            grid, and entropy.
          </p>
          <p className="about-mosaic-intro">
            We are mosaics. In lieu of introducing you to those I love as
            an explanation of who I am, here is some media that underlies my
            personhood:
          </p>
          <ul className="about-mosaic-list">
            <li><em>A Gentleman in Moscow</em> by Amor Towles</li>
            <li><em>Beautiful World, Where Are You</em> by Sally Rooney</li>
            <li><em>Rilla of Ingleside</em> by Lucy Maud Montgomery</li>
            <li>
              <a href="https://substack.com/home/post/p-135048769" target="_blank" rel="noreferrer">
                <em>500 Sleepless Hours</em>
              </a>
            </li>
            <li><em>Sibelius Violin Concerto</em></li>
          </ul>
        </div>

        <div className="about-col about-col--right">
          <h2 className="about-heading">Recent Experiences:</h2>
          {categories.map((cat) => (
            <section key={cat.label} className="about-cat">
              <h3 className="about-cat__label">{cat.label}</h3>
              <ul className="about-list">
                {cat.items.map((item, i) => <Bullet key={i} item={item} />)}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </Plate>
  );
}
