"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "🎂🎂🎂",
      "🎉🎉🎉",
      "Enjoy today🎈",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id="hero" className="snap-center">
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <Image src="/dzifa-06.png" alt="" width={200} height={0} className="w-36 h-36 object-cover relative rounded-full mx-auto" />
        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">DZIFA GLYMIN</h2>
        </div>
        <h1 className="text-5xl lg:text-6xl font-semibold px-2 md:px-10">
          <span className="mr-3 text-center items-center ">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5 text-start flex flex-col md:flex-row">
          <div className="heroButton"><span className="text-2xl font-bold">D</span>etermined</div>
          <div className="heroButton"><span className="text-2xl font-bold">Z</span>estful</div>
          <div className="heroButton"><span className="text-2xl font-bold">I</span>nspiring</div>
          <div className="heroButton"><span className="text-2xl font-bold">F</span>riendly</div>
          <div className="heroButton"><span className="text-2xl font-bold">A</span>dorable</div>
        </div>
      </div>
    </section>
  );
}
