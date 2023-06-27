"use client";

import React, { useEffect, useRef, useState } from "react";
// import music from "@/public/emotional-cinematic-background-piano-inspirational-orchestral-music-115915.mp3";
import { GiPartyHat } from "react-icons/gi";

import { format } from "date-fns";
import Image from "next/image";
import Welcome from "./components/welcome";
import MusicBtn from "./components/music-btn";

import { motion } from "framer-motion";
import RingSection from "./components/ring-section";
import Reveal from "./components/reveal";
import WeddingSvg from "./components/wedding-svg";
import PraySection from "./components/pray-section";
import Leaf1 from "./components/leaf-1";
import Couple from "./components/couple";
import Leaf2 from "./components/leaf-2";
import Footer from "./components/footer";
import RevealOpacity from "./components/reveal-opacity";
import Event from "./components/event";
import HourGlass from "./components/hour-glass";
import Doa from "./components/doa";
import Reservation from "./components/reservation";

export default function App() {
  const [diffDate, setDiffDate] = useState([]);
  const [musicState, setMusicState] = useState(false);

  const [to, setTo] = useState("");

  const [messages, setMessages] = useState([
    {
      name: "Nurlaela Sari",
      message:
        "Alhamdulillah🥰🥰 ikut seneng Syida & Suami, shalihahku, akhirnya Allah pertemukan dg jodohnya, selamat yaa..terharu bgt, baarokallohulakuma, semoga lancar samai hari H ada dlm lindungan & ridho Allah, bahagia dunia akhirat.. aamiin 😍",
    },
    {
      name: "Indri ✨",
      message:
        "Barakallahu lakuma ✨Semoga Syida dan pasangan menjadi keluarga yang bisa mengarungi samudra Mawaddah dan meniti tangga Rohmah, supaya bermukim dipuncak Sakinah ✨🤍",
    },
  ]);

  const [message, setMessage] = useState({ name: "", message: "" });

  return (
    <>
      <Welcome setMusicState={setMusicState} />
      <MusicBtn musicState={musicState} setMusicState={setMusicState} />
      <RingSection />
      <PraySection />
      <Leaf1 />
      <Couple />
      <Leaf2 />
      <Event />
      <HourGlass />
      <Doa />
      <Reservation />

      <section
        id="wishes"
        className="mb-20 flex flex-col items-center justify-center space-y-4 bg-teal-50 p-8"
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="font-dancing-script text-3xl font-semibold text-teal-900">
            Kirimkan Pesan
          </p>
          <div className=" h-0 w-36 border-t-2 border-solid border-teal-900"></div>
        </div>
        <form
          action=""
          className="w-full space-y-2"
          onSubmit={(e) => {
            e.preventDefault();
            setMessages([message, ...messages]);
          }}
        >
          <div className="h-10">
            <input
              type="text"
              name="name"
              placeholder="Masukan nama anda"
              className="h-full w-full border-b-2 border-teal-700 bg-transparent px-2 text-teal-900 focus:outline-none"
            />
          </div>

          <div className="">
            <textarea
              name="message"
              id=""
              rows={3}
              className="w-full border-2 border-teal-700  bg-transparent px-2 leading-10 text-teal-900 focus:outline-none"
              placeholder="Masukan pesan anda"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Kirimkan pesan"
            className="rounded-sm bg-teal-700 p-2 text-white"
          />
        </form>
        <div className="w-full space-y-2">
          {messages.map(({ name, message }, index) => {
            return (
              <div
                className=" space-y-2 rounded-md bg-teal-700 p-3"
                key={index}
              >
                <p className="text-white">{name}</p>
                <p className="text-white">{message}</p>
              </div>
            );
          })}
        </div>
      </section>

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
