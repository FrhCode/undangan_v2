"use client";

import Image from "next/image";
import React from "react";
import { Variants, motion } from "framer-motion";
import ringImage from "@/public/pexels-karen-laårk-boshoff-7436111.jpg";
import useStore from "@/store/useStore";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import dateFormat from "@/utils/date-format";

const textVariants: Variants = {
  hide: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function RingSection() {
  const isInvitationOpen = useStore((state) => state.isInvitationOpen);
  const D_Day = useStore((state) => state.D_Day);

  return (
    <section
      id="home"
      className="relative flex h-[80vh] flex-col items-center justify-center space-y-3 bg-cover bg-center p-5 pt-48 text-white"
    >
      <div className="absolute inset-0">
        <Image
          src={ringImage}
          fill
          alt=""
          style={{ objectFit: "cover", filter: "brightness(0.5)" }}
        />
      </div>
      <motion.div
        variants={{
          hide: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        animate={isInvitationOpen ? "show" : "hide"}
        className="relative flex flex-col items-center"
      >
        <motion.div variants={textVariants}>
          <p className="text-xl font-semibold">We Are Getting Married</p>
        </motion.div>
        <motion.div className="mt-1" variants={textVariants}>
          <p className="font-dancing font-dancing-script text-5xl font-semibold">
            Rosyida & Rizky
          </p>
        </motion.div>
        <motion.div className="mt-3" variants={textVariants}>
          <p className="text-xl font-semibold">{dateFormat(D_Day)}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
