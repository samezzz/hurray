'use client';

import React from 'react'
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { FaBirthdayCake } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-3 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5, 
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center">
        <FaBirthdayCake className="text-orange-400 text-4xl" />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5, 
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer">
        <MdCelebration className="text-pink-500 text-4xl" />
      <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in Touch</p>
      </motion.div>
    </header>
  );
}
