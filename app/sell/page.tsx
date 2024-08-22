"use client"

import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { aboutState, contactState, footerState, projectState, skillState } from "../recoilContextProvider" 
import { Form } from "../components/Form" 
import { ChooseCard2 } from "../components/ui/ChooseCard2"

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
    setProject(true)
    setContact(false)
    
  },[])

 const text = [
  " Web App Transfer Market unlocked",
  " Minimum of 1M (1,000,000)",
  "Less than 5 unassigned items",
  " Must stay offline on console, web app, and companion app"
 ]

  return <div className=" pt-20 relative flex flex-col justify-center z-10 bg-gradient-to-r from-slate-900 to-sky-900 ">
    <div >
      <div className=" text-center">
    <div className=" text-7xl bg-gradient-to-r from-pink-300 to-indigo-400 inline-block text-transparent bg-clip-text font-bold z-50 text-center"> 
     Sell 
    </div>
      </div>
    <div className=" mt-10 flex justify-center gap-10">
      <ChooseCard2 small={true} stick={true} header={"Current seller rates:" } desc="[PS/XB] $0.55 USD/100k ≈ £0.43/100k ≈ €0.50/100k" desc2="[PC] $0.70 USD/100k ≈ £0.55/100k ≈ €0.64/100k"  />

      <ChooseCard2 small={true} stick={true} header={"Requirements to sell:" } text={text} />
       {/* <div className=" text-2xl font-bold">
        Current Seller rates:
        </div>
        <div>
        [PS/XB] $0.55 USD/100k ≈ £0.43/100k ≈ €0.50/100k
        [PC] $0.70 USD/100k ≈ £0.55/100k ≈ €0.64/100k
        </div> */}
    </div>
     <div className=" w-full mt-10">
        <ChooseCard2 full={true} small={true} stick={true} header={"How does it work?" } desc="You submit this form, and we do the rest. It usually takes 2 days to sell your coins and receive your payout. You must stay offline on console, web app, and companion app for the entire duration of the process. Once your coins are removed your payment is sent within 24 hours."    />
     </div>
    </div>
    <div className=" mt-20 mb-10">
      <Form/>
    </div>
  </div>
}

