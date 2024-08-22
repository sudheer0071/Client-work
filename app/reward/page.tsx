"use client"

import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { aboutState, contactState, footerState, projectState, skillState } from "../recoilContextProvider"

export default function Sell(){
  const[footer, setFooter] = useRecoilState(footerState)
  const [about, setAbout] = useRecoilState(aboutState)
  const [skill, setSkill] = useRecoilState(skillState)
  const [project, setProject] = useRecoilState(projectState)
  const [contact, setContact] = useRecoilState(contactState)

  useEffect(()=>{
    console.log("setting footer");
    setAbout(false)
    setSkill(false)
    setFooter(false)
    setProject(false)
    setContact(true)
    
  },[])
  return <div className=" relative h-[100vh] flex justify-center items-center z-10 bg-gradient-to-r from-slate-900 to-indigo-500 ">
    <div className=" text-5xl  font-medium z-50">
     Its also Under constructionsd :)
    </div>
  </div>
}

