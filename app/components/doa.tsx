import React from "react";
import RevealOpacity from "./reveal-opacity";

export default function Doa() {
  return (
    <section className="bg-teal-50 p-8" id="doa">
      <RevealOpacity>
        <p className="text-center text-teal-900">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga
          apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
          kepada kedua mempelai. Atas kehadiran serta doa restu, kami ucapkan
          terima kasih.
        </p>
      </RevealOpacity>
    </section>
  );
}
