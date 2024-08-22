"use client"
import React, { useRef, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { aboutHoverState, aboutState, contactHoverState, contactState, onPageState,  projectHoverState, projectState, scrollState, skillHoverState, skillState } from "@/app/recoilContextProvider";
import { useRecoilState, useSetRecoilState } from "recoil";
import Link from "next/link";

export default function Navbar() {

  const [about, setAbout] = useRecoilState(aboutState)
  const [skill, setSkill] = useRecoilState(skillState)
  const [project, setProject] = useRecoilState(projectState)
  const [contact, setContact] = useRecoilState(contactState)

  const [aboutHover, setAboutHover] = useRecoilState(aboutHoverState)
  const [skillHover, setSkillHover] = useRecoilState(skillHoverState)
  const [projectHover, setProjectHover] = useRecoilState(projectHoverState)
  const [contactHover, setContactHover] = useRecoilState(contactHoverState)
  
  const setScrollState = useSetRecoilState(scrollState) 
  const [scrolling] = useRecoilState(scrollState)
 

  return (
    <div className=" flex justify-center">

      <div id="box" className=" w-full flex justify-center shadow-lg shadow-[#543e70] z-[999] fixed font-medium backdrop-brightness-75 backdrop-blur rounded-fll px-3 py-2">
        <div
        onClick={(event:React.SyntheticEvent)=>{  
          setScrollState(false)
          setTimeout(() => {
            setScrollState(true)
          }, 2000);
          console.log("scrolling: ");
          console.log(scrolling);
          
          event.preventDefault() 
          const target = event.target as HTMLAnchorElement
          console.log(target);
          
          const id = target.getAttribute('href')?.replace("/#",'')
          
          console.log("id = "+id);
          if(id=='About'){
            setAboutHover(true)
             
            setAbout(true)
          }
          else if (id=='Skills') {
            setContactHover(false)
            setProjectHover(false)
            setAboutHover(false)
            setSkillHover(true)
            setSkill(true)
            setAbout(false)
            setProject(false)
            setContact(false)
          }
          else if(id=='Projects'){
            setProjectHover(true)
            setProject(true)
          }
          else if(id == 'Contact'){
            setContactHover(true)
            setContact(true)
          }

          const element  = document.getElementById(String(id))
          element?.scrollIntoView({
            behavior:"smooth"
          })
        }}
        className="flex gap-32 ">
          <MotionConfig
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 10,
            }}
          >

            <motion.a
              onHoverStart={() => {

                setSkillHover(false);
                setProjectHover(false);
                setAboutHover(true);
                setContactHover(false)
              }}
              onHoverEnd={() => {
                setAboutHover(false);
              }}
              onClick={() => {
                console.log("about clicked");

                setSkill(false);
                setProject(false);
                setAbout(true);
                setContact(false)
              }}
 
              className="p-4 rounded-md text-sm lg:text-xl relative no-underline duration-300 ease-in bg-transparent text-zinc-100"
              href="/"
            > <Link href={'/'}>
              Home 
            </Link>
              <motion.div
                animate={about ? { x: contactHover ? 610 : projectHover ? 412 : skillHover ? 210 : 5, width: projectHover ? 70:contactHover?100 : 80 } : ''}

                transition={{
                  type: "spring",
                  stiffness: projectHover ? 120 : contactHover ? 120 : 90,
                  damping: projectHover ? 10 : contactHover ? 11 : 7,
                }}
                className={`absolute -z-10 bottom-0 left-0 h-2 ${about ? 'bg-[#93a5f3]/70' : ''} rounded-full`}
                aria-hidden="true"
                style={{ width: "100%", opacity: 1 }}
              />
            </motion.a>

            <motion.a
              onHoverStart={() => {
                setContactHover(false)
                setProjectHover(false);
                setSkillHover(true);
                setAboutHover(false);
              }}
              onHoverEnd={() => {
                setSkillHover(false);
              }}
              onClick={() => {
                console.log('skill clicked');
                setContact(false)
                setAbout(false);
                setProject(false);
                setSkill(true);
              }}
              className="p-4 rounded-md text-sm lg:text-xl relative no-underline duration-300 ease-in bg-transparent text-zinc-100"
              href="/#Buy"
            >
              <Link href={'/#Buy'}> 
               Buy 
            </Link>
              <motion.div
                animate={skill ? {
                  x: aboutHover ? -210 : projectHover ? 200 : contactHover ? 395 : 0,
                  width: aboutHover ? 80 : projectHover ? 66 : contactHover ? 100 : 70,
                } : ''}

                
                transition={{
                  type: "spring",
                  stiffness: projectHover ? 120 : contactHover ? 120 : 100,
                  damping: projectHover ? 10 : contactHover ? 9 : 6,
                }}
                className={` -z-10 absolute bottom-0 left-0 h-2 ${skill ? 'bg-[#93a5f3]/70' : ''} rounded-full`}
                aria-hidden="true"
                style={{ width: "100%", opacity: 1 }}
              />
            </motion.a>

            <motion.a
              onHoverStart={() => {
                setContactHover(false)
                setSkillHover(false);
                setProjectHover(true);
                setAboutHover(false);
              }}
              onHoverEnd={() => {
                setProjectHover(false);
              }}
              onClick={() => {
                console.log("project clicked");
                setContact(false)
                setAbout(false);
                setSkill(false);
                setProject(true);
              }}
              className="p-4 rounded-md text-sm lg:text-xl relative no-underline duration-300 ease-in bg-transparent text-zinc-100"
              href="/sell"
            > 
            <Link href={'/sell'}> 
              Sell 
            </Link>
              <motion.div
                animate={project ? {
                  x: aboutHover ? -410 : skillHover ? -195 : contactHover ? 200 : 0,
                  width: aboutHover ? 80 : skillHover ?65 : contactHover ? 100 : 70,
                } : ""}
                className={`absolute -z-10 bottom-0 left-0 h-2 ${project ? 'bg-[#93a5f3]/70' : ''} rounded-full`}
                aria-hidden="true"
                style={{ width: "100%", opacity: 1 }}
              />
            </motion.a>
            <motion.a  
             
              onHoverStart={() => {
                setContactHover(true)
                setSkillHover(false);
                setProjectHover(false);
                setAboutHover(false);
              }}
              onHoverEnd={() => {
                setContactHover(false);
              }}
              onClick={( ) => {
                
                setContact(true)
                setAbout(false);
                setSkill(false);
                setProject(false);
              }}
              className="p-4 rounded-md text-sm lg:text-xl relative no-underline duration-300 ease-in bg-transparent text-zinc-100" 
              href="/reward"
            >
              <Link href={'/reward'}>
              Reward 
            </Link>
              <motion.div
                animate={contact ? {
                  x: aboutHover ? -605 : skillHover ? -390 : projectHover ? -195 : 3,
                  width: aboutHover ? 80 : skillHover ? 70 : projectHover ? 70 : 100,
                } : ""}
                transition={{
                  type: "spring",
                  stiffness: aboutHover || skillHover ? 100 : 200,
                  damping: aboutHover || skillHover ? 12 : 10,
                }}
                className={`absolute -z-10 bottom-0 left-0 h-2 ${contact ? 'bg-[#93a5f3]/70' : ''} rounded-full`}
                aria-hidden="true"
                style={{ width: "100%", opacity: 1 }}
              />
            </motion.a>
          </MotionConfig>
        </div>

      </div>
    </div>
  );
}