"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function RevealOpacity({
  children,
  className = "bg-teal-50",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-150px",
  });

  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("show");
    }
    return () => {};
  }, [isInView, mainControl]);

  return (
    <div className="relative" ref={ref}>
      <motion.div
        initial="hidden"
        animate={mainControl}
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0 },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
