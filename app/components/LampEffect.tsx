"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { ServiceCard } from "./ServiceCard";
import { Boxes } from "lucide-react";

export function Services({header}:{header:string}) {
  return (
    <div className=" z-40">
    <LampContainer className="">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-200 to-slate-600 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
       Our <div className="bg-gradient-to-r text-sh transition-all duration-1000 from-sky-300 to-purple-400 dark:from-sky-500 dark:to-indigo-600 inline-block text-transparent bg-clip-text  ">Safe Trading Service</div>
      </motion.h1>
      {/* <div className="text-5xl justify-center flex font-bold">
        card
      </div> */}
    </LampContainer>
      <div className=" -mt-52">
        <ServiceCard/>
      </div>
    </div>
  );
}