import React from "react";
import classes from "@/components/Custom.module.css";
import CarouselZoom from "@/components/CarouselZoom";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

function Home() {
  return (
    <div className="text-amber-950">
      <CarouselZoom />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default Home;
