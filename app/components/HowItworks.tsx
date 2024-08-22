"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "1. Login and Search",
    description:
      "We log into your account and search the market for undervalued cards.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://futcoinshop.com/images/image-1.png"
          // width={200} 
          className=" w-2/3 object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "2. Find and Buy",
    description:
      "When we find an undervalued card, we buy it.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://futcoinshop.com/images/image-2.png"
          // width={200} 
          className=" w-2/3 object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "3. Sell and Make Profit",
    description:
      "We sell the card and you get to keep the profit.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <img
        src="https://futcoinshop.com/images/image-3.png"
        // width={200} 
        className=" w-2/3 object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://futcoinshop.com/images/image-1.png"
          // width={200} 
          className=" w-2/3 object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function HowitWorks() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
