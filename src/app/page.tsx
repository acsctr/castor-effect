"use client"

import Image from "next/image";
import Barrages from "./barrages";
import Zoneshumides from "./zoneshumides";
import Conflits from "./conflits";
import Fun from "./fun";
import Castorclic from "./castorclic";
import Intro from "./intro";
import Expansion from "./expansion";
import Chat from "./chat";
import Footer from "./footer";

export default function Home() {
  return (
    <main>
      <div id="titraille">
        <h1 className="p-5 font-bold text-6xl absolute z-10">Le castor, roi du climat</h1>
        <Image
          src="/images/image_titre_mobile.png"
          className="absolute z-0"
          alt="castor"
          width={390}
          height={500}
        />
      </div>
      <div className="paddingLeft">
        <Intro />
        <h2>C&apos;est quoi, un castor ?</h2>
      </div>
      <Castorclic />
      <Chat />
      <div className="paddingLeft">
        <h2>Une espèce en pleine expansion</h2>
        <Expansion />
        <h2>Les éléments d&apos;un barrage</h2>
      </div>
      <Barrages />
      <div className="paddingLeft">
        <h2>Le castor et les zones humides</h2>
        <Zoneshumides />
        <h2>Le mal-aimé des agriculteurs ?</h2>
        <Conflits />
        <h2>Fun facts</h2>
        <Fun />
      </div>
      <Footer />
    </main>
  );
}
