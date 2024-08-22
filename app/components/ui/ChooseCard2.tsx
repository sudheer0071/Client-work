"use client"
import React, { useEffect, useRef, useState } from "react";
import { Meteors } from "./meteors";
import { motion, useScroll,useTransform } from "framer-motion";
import { Check } from "lucide-react";

export function ChooseCard2({header, desc, desc2, image,i,range,progress, targetScale, stick, small,text,full}:{header?:string, desc?:string, desc2?:string,text?:string[], image?:string,i?:number,range?:any, progress?:any, targetScale?:any, stick?:boolean,full?:boolean, small?:boolean}) {
  
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
    <div  ref={container}  className={` ${!stick?'sticky h-screen flex justify-center items-center top-20':full?' mx-44':'flex'} `}>
      <motion.div  style={{ scale, top:`calc(-10% + ${i?i*35:''}px)`}} className=" relative mt-">
        <div className=" absolute h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.85] bg-red-500 rounded-full blur-3xl" />
        <div className=" relative shadow-lg shadow-sky-800 w-full  bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex justify-center items-center">
         <div className=" w-full">

          <h1 className="font-bold justify-center text-center flex text-4xl text-white mb-4 relative z-50"> 
            {header}
          </h1>
          <div className=" w-full flex ">
          <div className=" flex flex-col justify-center items-center">
          <div className={` ${!small?'max-w-[820px]':''} `}> 
                <p className={` ${!small?'text-3xl':' text-xl'}  text-slate-400 font-semibold mb-4 relative z-50`}>
                  {desc} <br /> {desc2}
                </p>
                {text?.map((text,idx)=><Requirements  key={idx} text={text} />)}
              </div>
      
          <button className={` ${stick?'hidden':''} border px-4 py-1 rounded-lg  border-gray-500 text-gray-300`}>
            Explore
          </button>
          </div>
      <motion.div style={{ scale:imageScale, opacity:scrollYProgress} } className={` ${stick?'hidden':''} w-full items-center flex justify-around p-4`}>
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

const Requirements = ({text}:{text:string})=>{
  return <div className=" mt-3">
    <Check className=" text-green-600 inline rounded-full border" /> <div className=" text-slate-300 ml-2 inline font-medium text-lg ">
  {text}
    </div>
  </div>
}