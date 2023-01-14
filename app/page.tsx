import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../sections/Hero";
import About from "../sections/About";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />
      <Hero />
      <About />
    </div>
  );
};
