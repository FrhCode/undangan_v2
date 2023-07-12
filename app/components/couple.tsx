import React from "react";
import Reveal from "./reveal";
import Image from "next/image";
import wanita from "@/public/wanita.png";
import pria from "@/public/pria.png";

export default function Couple() {
  return (
    <section id="couple" className="bg-teal-50 p-5 py-10">
      <div className="space-y-2">
        <Reveal className="bg-teal-700">
          <p className="text-center text-sm text-teal-700">
            Assalamu`alaikum Warahmatullaahi Wabarakaatuh
          </p>
        </Reveal>
        <Reveal className="bg-teal-700">
          <p className="text-center text-sm font-semibold text-emerald-700">
            Maha Suci Allah yang telah menciptakan makhluk-Nya
            berpasang-pasangan.
          </p>
        </Reveal>
      </div>
      <div className="mt-4 flex flex-col items-center justify-center space-y-1 rounded-lg bg-teal-700 p-8 text-white shadow-md">
        <div className="relative">
          <Image src={pria} alt="" fill style={{ objectFit: "cover" }} />
        </div>
        <Reveal>
          <p className="text-center text-sm">Rizqi Maulana S.KOM</p>
        </Reveal>
        <Reveal>
          <p className="text-center text-sm font-bold">Putra dari</p>
        </Reveal>
        <Reveal>
          <p className="text-center">Bapak Dedi Anton Hartono & Ibu juariah</p>
        </Reveal>
      </div>
      <div className="mt-4 flex flex-col items-center justify-center space-y-1 rounded-lg bg-teal-700 p-8 text-white shadow-md">
        <div className="relative">
          <Image src={wanita} alt="" fill style={{ objectFit: "cover" }} />
        </div>
        <Reveal>
          <p className="text-center text-sm">Intansha Rifani</p>
        </Reveal>
        <Reveal>
          <p className="text-center text-sm font-bold">Putri dari</p>
        </Reveal>
        <Reveal>
          <p className="text-center">
            Bapak Hendra Dwitya Talman & Ibu Arfiani
          </p>
        </Reveal>
      </div>
    </section>
  );
}
