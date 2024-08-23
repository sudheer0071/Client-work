"use client"
import Image from "next/image";
import { Background } from "../Background";
import { SparkleText } from "../SparklText";
import { Boxes } from "../ui/background-boxes";
import { TextGenerate } from "../TextGenerate";
import { TypewriterEffect,  } from "../ui/typewriter-effect";
import { TypeWritter } from "../TypeWritter";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


export default function Home() {

  const galleryRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  

  const images = ["https://fcshopadmin.com/public/images/Current%20Rates%208-15.png",
    "https://fcshopadmin.com/public/images/Bulk%20Discount%20Codes.jpg",
    "https://fcshopadmin.com/public/images/FC25%20Rewards%20Program.jpg", 
    "https://fcshopadmin.com/public/images/FC25%20Rewards%20Program.jpg", 
    "https://fcshopadmin.com/public/images/Futties%2010%20Discount.jpg"]

  const Text="The safest, fastest, and most reliable place to buy FC 24 coins"
  const words = Text.split(' ').map((word)=>({
    text:word,
    className:`${word.includes('safest')|| word.includes('fastest')||word.includes('reliable')?'bg-gradient-to-r from-pink-300 to-indigo-400 inline-block text-transparent bg-clip-text font-medium anmt':word.includes('place')?'br':' bg-red-300'}`
  }))
  useEffect(() => {
 
    const gallery = galleryRef.current;
    if (!gallery) return;

     // @ts-ignore
    const images = gallery.querySelectorAll<HTMLImageElement>('img');
    const imageAngle = 360 / images.length;

    images.forEach((image:any, i:number) => {
      image.style.transform = `rotate3d(0,1,0,${(i + 1) * imageAngle}deg) translateZ(30rem)`;

      image.onclick = ()=> {
        // @ts-ignore
        gallery.style.transform= ` perspective(2000px) rotateX(-5deg) rotateY(-${(i + 1) * imageAngle}deg) `;
      }
    });
  }, []);
  return ( 
    <div className=" h-[120vh] relative w-full overflow-hidden pt-24 bg-[#150827] flex flex-col items-center justify-center rounded-lg">
    <div className="absolute inset-0 w-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" /> 
    <Boxes />
    <div className="flex justify-center ">
      <div className=" max-w-7xl z-50 w-full "> 
      <TypeWritter Text="The safest , fastest , and most reliable place to buy FC 24 coins"/>
      </div>
    
      </div>
      <div className=" flex justify-center h-screen -mt-8">
      <div ref={galleryRef} className=" gallery flex justify-center z-50 ">
        {images.map((img, idx)=>
           <img  
            className={` hover:shadow-lg, shadow-white hover:-mt-5 hover:shadow-white transition-all duration-500 cursor-pointer bg-white rounded-lg`} key={idx} src={img}  alt="" /> )} 
      </div>
      </div>
      {/* home */}
</div> 
  );
}
