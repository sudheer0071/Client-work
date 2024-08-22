"use client"

import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { contactState, footerState, projectState, skillState } from "../recoilContextProvider"

export default function Sell(){
  const[footer, setFooter] = useRecoilState(footerState)
  const [skill, setSkill] = useRecoilState(skillState)
  const [project, setProject] = useRecoilState(projectState)
  const [contact, setContact] = useRecoilState(contactState)

  useEffect(()=>{
    console.log("setting footer");
    setSkill(false)
    setFooter(false)
    setProject(true)
    setContact(false)
    
  },[])
  return <div className=" relative h-[100vh] flex justify-center items-center z-10 bg-gradient-to-r from-slate-900 to-sky-400 ">
    <div className=" text-5xl  font-medium z-50">
     Under constructionsd
    </div>
  </div>
}

