import React from "react";

import "./Instructions.css";

export default function Instructions() {
  const instructionsData = [
    {
      number: 1,
      title: "What is Boldare’s Tech Radar?",
      content:
        "Tech Radar is a visual presentation of the technologies and methodologies used at Boldare to create digital products. It’s our technology portfolio based on Lean Startup development.",
    },
    {
      number: 2,
      title: "Matching technology to digital product maturity stage",
      content:
        "Each product maturity phase requires a different tech stack, frameworks and tools. The Radar shows which technologies are used for development in a particular product phase.",
    },
    {
      number: 3,
      title: "How can Boldare’s Tech Radar benefit your business?",
      content:
        "Tech Radar is the list of technologies that can be used for product development. It supports Boldare’s experts in making better-aligned tech decisions. Knowing the capabilities and limitations of various technologies, specialists are able to choose the right one for your product (depending on product type). This can determine the product's quality and scalability. It influences your product’s market future and helps you save valuable resources.",
    },
  ];

  const instructionsItems = instructionsData.map((instructionElement) => (
    <li key={instructionElement.number} className={"instructions__list-item"}>
      <span className={"instructions__list-item-number"}>
        {instructionElement.number}
      </span>
      <div className={"instructions__list-item-title"}>
        {instructionElement.title}
      </div>
      <div className={"instructions__list-item-content"}>
        {instructionElement.content}
      </div>
    </li>
  ));

  return (
    <section className={"instructions"} id={"instructions"}>
      <img
        src={"img/semicircle-empty.svg"}
        alt={"semicircle"}
        className={"instructions__img-semicircle-empty"}
      />
      <img
        src={"img/semicircle-striped.svg"}
        alt={"semicircle"}
        className={"instructions__img-semicircle-striped"}
      />
      <div className={"container"}>
        <ul className={"instructions__list"}>{instructionsItems}</ul>
      </div>
    </section>
  );
}
