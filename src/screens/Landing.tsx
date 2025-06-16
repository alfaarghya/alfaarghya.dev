import AppBar from "@/components/ui/AppBar";
import Dock from "@/components/ui/Dock";
import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/Projects";
import Skills from "@/components/ui/Skills";
import React from "react";

const Landing = () => {
  return (
    <div className="flex flex-col">
      <AppBar isRoot />
      <Hero />
      <Skills />
      <Projects />
      <div className="h-screen flex justify-center items-center">
        <p className="text-[#c9c9c9] text-center">
          Website is Complete, But I Will add more things over the time, so stay
          tuned :)
        </p>
      </div>
      <Dock />
    </div>
  );
};

export default Landing;
