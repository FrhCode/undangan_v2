"use client";
import React from "react";
import WeddingSvg from "./wedding-svg";
import RevealOpacity from "./reveal-opacity";
import { GiPartyHat } from "react-icons/gi";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import useStore from "@/store/useStore";
import dateFormat from "@/utils/date-format";
import Image from "next/image";
import akad from "@/public/akad image.png";
import resepsi from "@/public/resepsi-image.png";

export default function Event() {
  const {
    D_Day,
    D_DayLocation,
    D_DayTime,
    Reception,
    ReceptionLocation,
    ReceptionTime,
  } = useStore((state) => ({
    D_Day: state.D_Day,
    D_DayTime: state.D_DayTime,
    D_DayLocation: state.D_DayLocation,
    Reception: state.Reception,
    ReceptionTime: state.ReceptionTime,
    ReceptionLocation: state.ReceptionLocation,
  }));

  return (
    <section id="event" className="space-y-5 bg-teal-50 p-5 py-10">
      <div className="flex flex-col items-center justify-center  space-y-2 rounded-lg bg-teal-700 p-8 text-white shadow-md">
        <div style={{ width: "200px", height: "200px" }} className="relative">
          <Image src={akad} alt="" fill style={{ objectFit: "cover" }} />
        </div>
        <div className="flex flex-col space-y-1">
          <RevealOpacity>
            <p className="text-center font-dancing-script text-4xl font-semibold">
              Akad Nikah
            </p>
          </RevealOpacity>
          <RevealOpacity>
            <p className="text-center text-sm">{dateFormat(D_Day)}</p>
          </RevealOpacity>
        </div>

        <div className="flex flex-col items-center justify-center">
          <RevealOpacity>
            <p className="font-medium">Pukul</p>
          </RevealOpacity>
          <RevealOpacity>
            <p className="text-sm">{D_DayTime}</p>
          </RevealOpacity>
        </div>

        <div className="flex flex-col items-center justify-center">
          <RevealOpacity>
            <p className="font-medium">Lokasi</p>
          </RevealOpacity>
          <RevealOpacity>
            <p className="text-center text-sm" dangerouslySetInnerHTML={{__html:D_DayLocation}} />
          </RevealOpacity>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  space-y-2 rounded-lg bg-teal-700 p-8 text-white shadow-md">
        <div style={{ width: "200px", height: "200px" }} className="relative">
          <Image src={resepsi} alt="" fill style={{ objectFit: "cover" }} />
        </div>
        <div className="flex flex-col space-y-1">
          <RevealOpacity>
            <p className="text-center font-dancing-script text-4xl font-semibold">
              Resepsi Nikah
            </p>
          </RevealOpacity>
          <RevealOpacity>
            <p className="text-center text-sm">{dateFormat(Reception)}</p>
          </RevealOpacity>
        </div>
        <div className="flex flex-col items-center justify-center">
          <RevealOpacity>
            <p className="font-medium">Pukul</p>
          </RevealOpacity>
          <RevealOpacity>
            <p className="text-sm">{ReceptionTime}</p>
          </RevealOpacity>
        </div>
        <div className="flex flex-col items-center justify-center">
          <RevealOpacity>
            <p className="font-medium">Lokasi</p>
          </RevealOpacity>
          <RevealOpacity>
            <p className="text-center text-sm" dangerouslySetInnerHTML={{__html:ReceptionLocation}} />
          </RevealOpacity>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.975000346522!2d107.63335397464782!3d-6.893593593105561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7a5abc8e9c3%3A0x16dbc3cec4a648b!2sKanaya%20Food!5e0!3m2!1sid!2suk!4v1689135377208!5m2!1sid!2suk"
        style={{ border: "0", width: "100%", height: 300 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
