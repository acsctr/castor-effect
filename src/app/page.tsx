"use client"

import Reintroduction from "./reintroduction";
import Castormap from "./castormap";
import Barrages from "./barrages";
import Zoneshumides from "./zoneshumides";
import Conflits from "./conflits";
import Fun from "./fun";
import Castorclic from "./castorclic";
import Intro from "./intro";

export default function Home() {
  return (
    <main>
      <h1>Le castor, roi du climat</h1>
      <Intro />
      <h2>C'est quoi, un castor ?</h2>
      <Castorclic />
      <h2>Comparatif chats</h2>
      <Castormap />
      <h2>La réintroduction des castors, un succès</h2>
      <p>Pourcentage de réussite des réintroductions de castors en France</p>
      <Reintroduction />
      <h2>Les barrages, des puits de carbone</h2>
      <Barrages />
      <h2>Le castor et les zones humides</h2>
      <Zoneshumides />
      <h2>Le mal-aimé des agriculteurs ?</h2>
      <Conflits />
      <h2>Fun facts</h2>
      <Fun />
    </main>
  );
}
