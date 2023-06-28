"use client";
import React from "react";
import WeddingSvg from "./wedding-svg";
import RevealOpacity from "./reveal-opacity";
import { GiPartyHat } from "react-icons/gi";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import useStore from "@/store/useStore";

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
            <p className="text-center text-sm">
              {format(D_Day, "EEEE dd-MMMM-yyyy", { locale: id })}
            </p>
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
            <p className="text-center text-sm">
              {format(Reception, "EEEE dd-MMMM-yyyy", { locale: id })}
            </p>
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
        title="maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.033851043082!2d117.56896611470526!3d3.341800897567316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3214753dd1bb8707%3A0x405c6c8216c906a9!2sJl.%20Bakaru%2C%20Karang%20Harapan%2C%20Kec.%20Tarakan%20Bar.%2C%20Kota%20Tarakan%2C%20Kalimantan%20Utara!5e0!3m2!1sid!2sid!4v1661099445620!5m2!1sid!2sid"
        className="h-80 w-full shadow-2xl"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
