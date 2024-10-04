import BootScreen from "@/screens/BootScreen";
import Landing from "@/screens/Landing";
import React from "react";

const Home = () => {
  return (
    <>
      <BootScreen />
      <main className="bg-[#0A0A0A] h-full p-2">
        <Landing />
      </main>
    </>
  );
};

export default Home;
