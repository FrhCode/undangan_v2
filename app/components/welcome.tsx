"use client";
import React, { useRef, useState, useEffect } from "react";

import pengantin from "@/public/pengantin.png";
import Image from "next/image";
import WelcomeImg from "@/public/pexels-pixabay-265856.jpg";
import { BsEnvelopeExclamation } from "react-icons/bs";
import { motion, AnimatePresence, Variants } from "framer-motion";
import useStore from "@/store/useStore";

const variants: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};
const childVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export default function Welcome() {
  const { isInvitationOpen, setIsInvitations, setMusicState } = useStore(
    (store) => ({
      isInvitationOpen: store.isInvitationOpen,
      setIsInvitations: store.setIsInvitations,
      setMusicState: store.setMusicState,
    })
  );

  const [isModalOpen, setIsModalOpen] = useState(true);

  const welcomeScreen = useRef<HTMLElement>(null);
  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsInvitations(true);
        document.body.style.overflow = "visible";
      }}
    >
      {isModalOpen && (
        <motion.section
          className="fixed inset-0 z-[100] h-full w-full overflow-hidden text-white"
          id="welcome"
          ref={welcomeScreen}
          exit={{ translateY: "100%" }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0">
            <Image
              src={WelcomeImg}
              alt=""
              fill
              style={{ objectFit: "cover", filter: "brightness(0.4)" }}
            />
          </div>
          <motion.div
            className="relative flex h-full w-full flex-col items-center justify-center bg-cover bg-center  px-4"
            variants={variants}
            initial="initial"
            animate="animate"
          >
            {/* <div className=" absolute top-0 left-0 h-screen w-screen opacity-70 backdrop-blur-lg"></div> */}
            <motion.div className="relative h-56 w-60" variants={childVariants}>
              <Image
                src={pengantin}
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </motion.div>
            <motion.div variants={childVariants}>
              <p className="font-dancing-script text-4xl font-semibold">
                Tiara & Rizky
              </p>
            </motion.div>
            <motion.div variants={childVariants}>
              <p className="mt-4">Undangan Spesial Untuk</p>
            </motion.div>
            <motion.div variants={childVariants}>
              <p className="font-semibold">{"Ervan"}</p>
            </motion.div>
            <motion.div variants={childVariants}>
              <p className="mt-1 w-64 text-center text-sm font-light">
                Mohon maaf apabila ada kesalahan penulisan nama dan gelar
              </p>
            </motion.div>
            <motion.button
              variants={childVariants}
              className="mt-2 flex origin-center items-center space-x-2 rounded bg-teal-800 px-4 py-2 text-white"
              onClick={() => {
                setIsModalOpen(false);
                setMusicState(true);
              }}
              whileTap={{ scale: 0.95, backgroundColor: "var(--teal-700)" }}
            >
              <BsEnvelopeExclamation />
              <span>Buka Undangan</span>
            </motion.button>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
