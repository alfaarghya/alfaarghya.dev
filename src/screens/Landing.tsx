import Dock from "@/components/ui/Dock";
import Hero from "@/components/ui/Hero";
import React from "react";

const Landing = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="h-screen flex justify-center items-center">
        <p className="text-[#c9c9c9] text-center">
          Website is under Development, Will deploy the complete portfolio with
          even more cooler animations soon :)
        </p>
      </div>
      <Dock />
    </div>
  );
};

export default Landing;
