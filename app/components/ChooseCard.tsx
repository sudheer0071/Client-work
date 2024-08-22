"use client"
import React, { useEffect, useRef, useState } from "react";
import { Meteors } from "./ui/meteors";
import { motion, useScroll,useTransform } from "framer-motion";

export function ChooseCard({header, desc, image,i,range,progress, targetScale}:{header?:string, desc?:string, image?:string,i:number,range:any, progress:any, targetScale:any}) {
  
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target:container,
    offset:['start end','start start']
  })
   
  const imageScale = useTransform(scrollYProgress, [0,1], [2,1])
  const scale = useTransform(
    progress ?? scrollYProgress, // Use 0 as a fallback value for progress
    range ?? [0, 1], // Use [0, 1] as a fallback value for range
    [1, targetScale ?? 1] // Use 1 as a fallback value for targetScale
  );

  return ( 
    <div  ref={container}  className=" flex justify-center items-center h-screen sticky top-32">
      <motion.div  style={{ scale, top:`calc(-10% + ${i*35}px)`}} className=" relative mt-">
        <div className="   absolute h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.85] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-lg shadow-sky-800 w-full  bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex justify-center items-center">
         <div className=" w-full">

          <h1 className="font-bold justify-center flex text-4xl text-white mb-4 relative z-50"> 
            {header}
          </h1>
          <div className=" w-full flex ">
          <div className=" flex flex-col justify-center items-center">
          <div className="max-w-[820px]"> 
                <p className="text-3xl text-slate-400 font-semibold mb-4 relative z-50">
                  {desc} 
                </p>
              </div>

          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>
          </div>
      <motion.div style={{ scale:imageScale, opacity:scrollYProgress} } className=" w-full items-center flex justify-around p-4">
        <img className=" p-4 w-3/5 h- 3/6" src={`https://futcoinshop.com/images/${image}`} alt="" />
      </motion.div>
         </div>  
          </div>
          <Meteors number={40} />
        </div>
      </motion.div>
      </div>  
  );
}
