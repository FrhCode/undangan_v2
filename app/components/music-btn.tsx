"use client";
import React, { useState } from "react";
import { AiOutlinePause, AiOutlinePlayCircle } from "react-icons/ai";
import { AnimatePresence, motion, useTransform } from "framer-motion";
import useStore from "@/store/useStore";
import useBoundedScroll from "@/hooks/useBoundedScroll";

export default function MusicBtn() {
  const isInvitationOpen = useStore((store) => store.isInvitationOpen);
  const musicState = useStore((store) => store.musicState);
  const setMusicState = useStore((store) => store.setMusicState);
  const { scrollYBoundedProgress } = useBoundedScroll(500);
  const scrollYBoundedProgressTrottle = useTransform(
    scrollYBoundedProgress,
    [0, 0.5, 1],
    [0, 0, 1]
  );

  const x = useTransform(scrollYBoundedProgressTrottle, [0, 1], [0, 70]);
  return (
    <AnimatePresence>
      {isInvitationOpen && (
        <motion.section
          className={`fixed right-4 top-28 z-10 flex h-9 w-9 cursor-pointer select-none items-center justify-center rounded-full bg-teal-700 text-white`}
          onClick={() => {
            setMusicState(!musicState);
          }}
          whileTap={{ scale: 0.9, backgroundColor: "var(--teal-600)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            x,
          }}
        >
          {musicState ? (
            <AiOutlinePause size={20} />
          ) : (
            <AiOutlinePlayCircle size={20} />
          )}
        </motion.section>
      )}
    </AnimatePresence>
  );
}
