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

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Home() {
  return (
    <main>
      <div className="flex justify-center sm:pl-56 md:pl-72 lg:pl-80 xl:pl-96 2xl:pl-96" id="titraille">
        <h1 className="p-5 font-bold text-6xl absolute z-10">Le castor, roi du climat</h1>
        <Image
          src="/images/image_titre_mobile.png"
          className="absolute z-0"
          alt="castor"
          width={390}
          height={500}
        />
      </div>
      <div className="pl-36 pr-4 sm:pl-56 md:pl-72 lg:pl-80 xl:pl-96 2xl:pl-96">
        <Intro />
        <h2>C&apos;est quoi, un castor ?</h2>
      </div>
      <Castorclic />
      <div className="pl-28 pr-4 sm:pl-56 md:pl-72 lg:pl-80 xl:pl-96 2xl:pl-96">
        <h2>Les mensurations du castor</h2>
      </div>
      <Chat />
      <div className="pl-28 pr-4 sm:pl-56 md:pl-72 lg:pl-80 xl:pl-96 2xl:pl-96">
        <h2>Une espèce en pleine expansion</h2>
        <Expansion />
        <h2>Les éléments d&apos;un barrage</h2>
      </div>
      <Barrages />
      <div className="pl-28 pr-4 sm:pl-56 md:pl-72 lg:pl-80 xl:pl-96 2xl:pl-96">
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
