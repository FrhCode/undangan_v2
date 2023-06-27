import Image from "next/image";
import React from "react";
import flower from "@/public/flower.png";
import Reveal from "./reveal";

export default function PraySection() {
  return (
    <section className="space-y-5 bg-teal-50 p-5 py-10">
      <div className="flex flex-col items-center justify-between space-y-4 rounded-lg bg-teal-700 p-8 shadow-md">
        <div className="relative h-8 w-11">
          <Image
            src={flower}
            alt=""
            style={{
              filter:
                "invert(11%) sepia(66%) saturate(838%) hue-rotate(112deg) brightness(93%) contrast(63%)",
              objectFit: "cover",
            }}
            fill
          />
        </div>
        <Reveal>
          <p className="text-center text-sm font-light text-white">
            &quot;Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu
            pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan
            hati dan dijadikannya kasih sayang di antara kamu. Sesungguhnya yang
            demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang
            berpikir.&quot;
          </p>
        </Reveal>
        <Reveal>
          <p className="font-bold text-white ">Q.S Ar-Rum Ayat 21</p>
        </Reveal>
      </div>
    </section>
  );
}
