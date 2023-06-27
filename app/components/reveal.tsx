"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  from?: "left" | "right";
  className?: string;
};

export default function Reveal({
  children,
  from = "right",
  className = "bg-teal-50",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  const mainControl = useAnimation();
  const divControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("show");
      divControl.start("show");
    }
    return () => {};
  }, [divControl, isInView, mainControl]);

  return (
    <div className="relative" ref={ref}>
      <motion.div
        initial="hidden"
        animate={mainControl}
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        initial="hidden"
        animate={divControl}
        variants={{
          hidden: { width: "100%" },
          show: { width: "0%" },
        }}
        className={clsx(
          "absolute top-0 h-full w-full rounded",
          {
            "right-0": from === "right",
            "left-0": from === "left",
          },
          className
        )}
      ></motion.div>
    </div>
  );
}
