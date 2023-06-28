"use client";
import React from "react";
import { AiFillHome, AiFillCalendar, AiFillWechat } from "react-icons/ai";
import { FaUserFriends, FaImages } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-teal-700 px-3 py-4 shadow-lg">
      <ul className="flex justify-between">
        <a href="#home" className="text-sm">
          <motion.li
            whileTap={{ scale: 0.95 }}
            className="flex cursor-pointer flex-col items-center space-y-2 text-white"
          >
            <AiFillHome size={19} />
            Home
          </motion.li>
        </a>
        <a href="#couple" className="text-sm">
          <motion.li
            whileTap={{ scale: 0.95 }}
            className="flex cursor-pointer flex-col items-center space-y-2 text-white"
          >
            <FaUserFriends size={19} />
            Couple
          </motion.li>
        </a>
        <a href="#event" className="text-sm">
          <motion.li
            whileTap={{ scale: 0.95 }}
            className="flex cursor-pointer flex-col items-center space-y-2 text-white"
          >
            <AiFillCalendar size={19} />
            Event
          </motion.li>
        </a>
        <a href="#asd" className="text-sm">
          <motion.li
            whileTap={{ scale: 0.95 }}
            className="flex cursor-pointer flex-col items-center space-y-2 text-white"
          >
            <FaImages size={19} />
            Gallery
          </motion.li>
        </a>
        <a href="#wishes" className="text-sm">
          <motion.li
            whileTap={{ scale: 0.95 }}
            className="flex cursor-pointer flex-col items-center space-y-2 text-white"
          >
            <AiFillWechat size={19} />
            Wishes
          </motion.li>
        </a>
      </ul>
    </nav>
  );
}
