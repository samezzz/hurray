'use client';

import Image from 'next/image';
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="snap-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
        <h3 className="absolute top-12 md:top-32 uppercase tracking-[4px] md:tracking-[10px] text-gray-500 text-2xl pb-14 md:pl-96">
          CHARACTERIZATION
        </h3>

        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="/dzifa-06.png"
          alt=""
          className="md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] shadow-lg"
        />

        <div className="space-y-10 md:px-10">
          <h4 className="text-4xl font-semibold">
            Here is a <span className="underline decoration-[#F7Ab0A] animate-pulse">little</span> something
          </h4>
          <p className="text-base">Dzifa, with her shining smile, Brightens up the darkest mile. With her kind and gentle heart, She sets the world a brand new start. She&apos;s the kind of friend you can count on, To make a dull day suddenly fun. Her beauty, like a work of art, Is matched by her loving heart. She&apos;s got a heart as big as the moon, And a smile that shines like a dune. So here&apos;s to you, dear Dzifa, Thanks for being such a fun-loving diva!.</p>
        </div>
      </motion.div>
    </section>
  );
}