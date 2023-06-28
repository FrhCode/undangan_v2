import React from "react";
// import music from "@/public/emotional-cinematic-background-piano-inspirational-orchestral-music-115915.mp3";

import Welcome from "./components/welcome";
import MusicBtn from "./components/music-btn";

import RingSection from "./components/ring-section";
import PraySection from "./components/pray-section";
import Leaf1 from "./components/leaf-1";
import Couple from "./components/couple";
import Leaf2 from "./components/leaf-2";
import Footer from "./components/footer";
import Event from "./components/event";
import HourGlass from "./components/hour-glass";
import Doa from "./components/doa";
import Message from "./components/message";
import Reservation from "./components/reservation";
import IMessages from "@/type/messages";

export default async function App(a: any) {
  const messages: IMessages[] = await fetch(
    "http://localhost:3000/api/messages"
  ).then((res) => res.json());

  return (
    <>
      <Welcome />
      <MusicBtn />
      <RingSection />
      <PraySection />
      <Leaf1 />
      <Couple />
      <Leaf2 />
      <Event />
      <HourGlass />
      <Doa />
      <Reservation />

      <Message messages={messages} />

      {/* <section className="mb-[71px] bg-teal-700 p-8 text-center text-white">
        <p>
          Made with Love ❤ by
          <a href="https://www.instagram.com/farhanfaj/" target="noopener">
            {" "}
            @farhanfaj
          </a>
        </p>
      </section> */}

      <Footer />
    </>
  );
}
