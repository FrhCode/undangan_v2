"use client";
import React from "react";
import WeddingSvg from "./wedding-svg";
import RevealOpacity from "./reveal-opacity";
import { GiPartyHat } from "react-icons/gi";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import useStore from "@/store/useStore";
import dateFormat from "@/utils/date-format";

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
        <WeddingSvg width="200px" height="200px" />
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
            <p className="text-center text-sm">{D_DayLocation}</p>
          </RevealOpacity>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  space-y-2 rounded-lg bg-teal-700 p-8 text-white shadow-md">
        <GiPartyHat size={80} />
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
            <p className="text-center text-sm">{ReceptionLocation}</p>
          </RevealOpacity>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d995.7619507744432!2d117.58324226954117!3d3.3383619997897855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMjAnMTguMSJOIDExN8KwMzUnMDIuMCJF!5e0!3m2!1sid!2suk!4v1688202420543!5m2!1sid!2suk"
        style={{ border: "0", width: "100%", height: 300 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
