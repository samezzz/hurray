import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%",],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] md:h-[200px] md:w-[200px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#333333] h-[150px] w-[150px] md:h-[300px] md:w-[300px] absolute mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[225px] w-[225px] md:h-[500px] md:w-[500px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[300px] w-[300px] md:h-[650px] md:w-[650px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#333333] h-[350px] w-[350px] md:h-[800px] md:w-[800px] absolute mt-52 animate-ping" />
    </motion.div>
  );
}

export default BackgroundCircles