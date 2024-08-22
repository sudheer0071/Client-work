"use client";
import { HoverBorderGradient } from "./ui/Button";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Settings, ShoppingCart } from 'lucide-react'
export function TypeWritter({Text}:{Text:string}) {

  const words = Text.split(' ').map((word)=>({
    text:word,
    className:`${word.includes('safest')|| word.includes('fastest')||word.includes('reliable')?'bg-gradient-to-r from-pink-300 to-indigo-400 inline-block text-transparent bg-clip-text font-medium anmt':word.includes('place')?'br':''}`
  }))
  return (
    <div className=" ">
       <div className=" h-40">
      <TypewriterEffect words={words} />
       </div>
      <div className=" flex justify-center">
         <HoverBorderGradient className=" p-4 px-6">
          <a href=""> <ShoppingCart className=" inline"/> Buy</a>
         </HoverBorderGradient> 
         <div className=" ml-10  p-4 px-6 underline text-lg cursor-pointer">
         {/* <HoverBorderGradient className=" p-4 px-6">
          <a href=""> <ShoppingCart className=" inline"/> Buy</a>
         </HoverBorderGradient>  */}

         <Settings className=" inline mr-1" />How it works
         </div>
      </div>
    </div>
  );
}
