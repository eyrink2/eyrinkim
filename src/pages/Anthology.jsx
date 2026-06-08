import React from "react";
import { Link } from "react-router-dom";
import Plate from "../components/Plate";

const categories = [
  {
    name: "LITERATURE",
    items: [
      { text: "Beautiful World, Where Are You" },
      { text: "Speak, Okinawa" },
      { text: "A Gentleman in Moscow" },
      { text: "Klara and the Sun" },
      { text: "all of the Anne of Green Gables works, but specifically the 8th and last novel" }
    ]
  },
  {
    name: "ESSAYS",
    items: [
      { text: "The Ones who Walk Away from the Omelas", link: "https://shsdavisapes.pbworks.com/f/Omelas.pdf" },
      { text: "You don't need to work on hard problems", link: "https://www.benkuhn.net/hard/" },
      { text: "On Caring", link: "https://mindingourway.com/on-caring/" },
      { text: "No Good Alone", link: "https://internetprincess.substack.com/p/no-good-alone" }
    ]
  },
  {
    name: "PODCAST EPISODES",
    items: [
      { text: "Joscha Bach on intelligence", link: "https://www.youtube.com/watch?v=3MkJEGE9GRY" },
      { text: "Bo Burnham on art and culture", link: "https://open.spotify.com/episode/0tQrS3zvE0JDnmF8RIUv3S" },
      { text: "John Green on our capacity for wonder", link: "https://open.spotify.com/episode/1MD4QeoLUvvv2a093NuhOn?si=e3c6642530b4424f" }
    ]
  },
  {
    name: "RESEARCH THAT CHANGED MY BRAIN CHEMISTRY",
    items: [
      { text: "Micro-doppler work for SAR", link: "https://www.ieee.be/node/1192" },
      { text: "The original climate change paper", link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/1999gl900070" },
      { text: "In-context scheming", link: "https://arxiv.org/pdf/2412.04984" }
    ]
  },
  {
    name: "PAST PROJECTS",
    items: [
      { text: "some documentation & rough sketches", internal: "/projects" }
    ]
  }
];

function Item({ item }) {
  if (item.internal) {
    return (
      <li className="anth-item">
        <Link to={item.internal} className="anth-link">{item.text}</Link>
      </li>
    );
  }
  if (item.link) {
    return (
      <li className="anth-item">
        <a href={item.link} target="_blank" rel="noreferrer" className="anth-link">
          {item.text}
        </a>
      </li>
    );
  }
  return <li className="anth-item">{item.text}</li>;
}

export default function Anthology() {
  return (
    <Plate variant="content">
      <p className="anth-lead">
        Below is my personal multi-media anthology (that admittedly has little
        to do with the above and a lot to do with grappling with personhood).
        Shoot me recommendations at{" "}
        <a href="mailto:eyrinkim@stanford.edu" className="anth-link">
          eyrinkim@stanford.edu
        </a>!
      </p>
      <div className="anth-grid">
        {categories.map((cat) => (
          <section key={cat.name} className="anth-cat">
            <h2 className="anth-cat__title">{cat.name}</h2>
            <ul className="anth-list">
              {cat.items.map((item, i) => <Item key={i} item={item} />)}
            </ul>
          </section>
        ))}
      </div>
    </Plate>
  );
}
