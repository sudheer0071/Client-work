"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { SparkleText } from "./SparklText";

export function Background() {
   

  return (
    <div className=" h-screen relative w-full overflow-hidden bg-[#150827] flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" /> 
      <Boxes />  
    </div>
  );
}
