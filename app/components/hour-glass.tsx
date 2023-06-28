"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import hourglass from "@/public/pexels-cottonbro-6153883.jpg";
import {
  motionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { motion } from "framer-motion";
import getTimeDifference from "@/utils/get-time-difference";
import { randomArrayString } from "@/utils/random-string";
import useRandomArrayString from "@/hooks/useRandomArrayString";
import useStore from "@/store/useStore";

export default function HourGlass() {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const eventDay = useStore((state) => state.D_Day);

  useEffect(() => {
    const interval = setInterval(() => {
      const [day, hour, minute, second] = getTimeDifference(
        new Date(),
        eventDay
      );

      setDays(day.toString().padStart(2, "0"));
      setHours(hour.toString().padStart(2, "0"));
      setMinutes(minute.toString().padStart(2, "0"));
      setSeconds(second.toString().padStart(2, "0"));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [eventDay]);

  return (
    <section className="relative flex h-96 flex-col items-center justify-center space-y-3 bg-cover bg-center p-5 text-white ">
      <div className="absolute inset-0">
        <Image
          src={hourglass}
          style={{
            objectFit: "cover",
            filter: "brightness(0.4)",
          }}
          fill
          alt=""
        />
      </div>
      <p className="z-20 text-4xl font-semibold">Hitung Mundur</p>
      <div className="z-20 flex justify-between space-x-4">
        <div className="flex flex-col items-center justify-center">
          <span className="flex space-x-1 text-2xl font-bold">
            <div className="relative h-6 w-3 overflow-hidden">
              {useRandomArrayString(10).map((key, index) => (
                <Number mv={parseInt(days[0])} number={index} key={key} />
              ))}
            </div>
            <div className="relative h-6 w-3 overflow-hidden">
              {useRandomArrayString(10).map((key, index) => (
                <Number mv={parseInt(days[1])} number={index} key={key} />
              ))}
            </div>
          </span>
          <span className="text-lg">Hari</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="flex space-x-1 text-2xl font-bold">
            <div className="relative h-6 w-3 overflow-hidden">
              {useRandomArrayString(10).map((key, index) => (
                <Number mv={parseInt(hours[0])} number={index} key={key} />
              ))}
            </div>
            <div className="relative h-6 w-3 overflow-hidden">
              {useRandomArrayString(10).map((key, index) => (
                <Number mv={parseInt(hours[1])} number={index} key={key} />
              ))}
            </div>
          </span>
          <span className="text-lg">Jam</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="flex space-x-1 text-2xl font-bold">
            <div className="relative h-6 w-3 overflow-hidden">
              {useRandomArrayString(10).map((key, index) => (
                <Number mv={parseInt(minutes[0])} number={index} key={key} />
              ))}
            </div>
            <div className="relative h-6 w-3 overflow-hidden">
              {useRandomArrayString(10).map((key, index) => (
                <Number mv={parseInt(minutes[1])} number={index} key={key} />
              ))}
            </div>
          </span>
          <span className="text-lg">Menit</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="flex space-x-1 text-2xl font-bold">
            <div className="relative h-6 w-3 overflow-hidden">
              {useRandomArrayString(10).map((key, index) => (
                <Number mv={parseInt(seconds[0])} number={index} key={key} />
              ))}
            </div>
            <div className="relative h-6 w-3 overflow-hidden">
              {useRandomArrayString(10).map((key, index) => (
                <Number mv={parseInt(seconds[1])} number={index} key={key} />
              ))}
            </div>
          </span>
          <span className="text-lg">Detik</span>
        </div>
      </div>
    </section>
  );
}

function Number({ mv, number }: { mv: number; number: number }) {
  let animatedValue = useSpring(mv, { damping: 20 });
  useEffect(() => {
    animatedValue.set(mv);
  }, [animatedValue, mv]);
  let y = useTransform(animatedValue, (latest) => {
    let height = 24;
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span style={{ y }} className="absolute inset-0 flex justify-center">
      {number}
    </motion.span>
  );
}
