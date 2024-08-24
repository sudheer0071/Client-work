"use client"

import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { aboutState, contactState, footerState, projectState, skillState } from "../recoilContextProvider"
import { ChooseCard2 } from "../components/ui/ChooseCard2"
import { Meteors } from "../components/ui/meteors"

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
    // setFooter(false)
    setProject(false)
    setContact(true)
    
  },[])


  const text = [
    " Web App Transfer Market unlocked",
    " Minimum of 1M (1,000,000)",
    "Less than 5 unassigned items",
    " Must stay offline on console, web app, and companion app"
   ]
  
   const  requirements = [
    {
      name:"Platinum",
      points:'2000 ',
      free:" 400,000"
    },
    {
      name:"Elite",
      points:'1000 ',
      free:" 200,000"
    },
    {
      name:"Glod",
      points:'500 ',
      free:" 100,000"
    },
    {
      name:"Silver",
      points:'250 ',
      free:" 50,000"
    },
    {
      name:"Bronze",
      points:'100 ',
      free:" 20,000"
    },
   ]

  return <div className=" h-[100vh] pt-20 relative z-10 bg-gradient-to-r from-slate-900 to-sky-900 ">
  <div >
    <div className=" text-center">
  <div className=" text-7xl bg-gradient-to-r from-pink-300 to-indigo-400 inline-block text-transparent bg-clip-text font-bold z-50 text-center"> 
   Rewards 
  </div>
    </div>
  <div className=" mt-10 lg:flex justify-center gap-10">
    <div  className=" lg:max-w-lg px-5 md:px-14 lg:px-0 flex justify-center flex-col">
      <div className=" ">
    <ChooseCard2 small={true} stick={true} header={"How it works:" } desc="For every 1 USD spent you earn one point. Earn points to climb the tiers and claim your reward at checkout when the rewards period ends."   />
      </div>
    <div className=" mt-10">
    {/* <ChooseCard2 small={true} stick={true} header={"Current seller rates:" } desc="[PS/XB] $0.55 USD/100k ≈ £0.43/100k ≈ €0.50/100k" desc2="[PC] $0.70 USD/100k ≈ £0.55/100k ≈ €0.64/100k"  /> */}
    <RewardCard />
    </div>
    </div> 
    <div className=" ">
    <div className=" rounded-md p-1  bg-gradient-to-r from-slate-500 to-indigo-800  "> 
    {requirements.map((req ,idx)=>(
      <RequirementCard key={idx} name={req.name} points={req.points} i={idx} free={req.free} />
    ))}
    </div>
    <div className=" mt-9">
    <RewardCard2 />
    </div>
    
    {/* <ChooseCard2 desc="All rewards have a minimum purchase requirement and are valid for 30 days."/> */}


    </div>
     {/* <div className=" text-2xl font-bold">
      Current Seller rates:
      </div>
      <div>
      [PS/XB] $0.55 USD/100k ≈ £0.43/100k ≈ €0.50/100k
      [PC] $0.70 USD/100k ≈ £0.55/100k ≈ €0.64/100k
      </div> */}
  </div>
   {/* <div className=" w-full mt-10">
      <ChooseCard2 full={true} small={true} stick={true} header={"How does it work?" } desc="You submit this form, and we do the rest. It usually takes 2 days to sell your coins and receive your payout. You must stay offline on console, web app, and companion app for the entire duration of the process. Once your coins are removed your payment is sent within 24 hours."    />
   </div> */}
  </div>
  {/* <div className=" mt-20 mb-10">
    <Form/>
  </div> */}
</div>
}

const RewardCard = ( )=>{
  const reward = [
    {
      name:'Reward period end',
      value:'1 Month, 8 Days, 19 Hours, 5 Minutes'
    },
    {
      name:'Current reward',
      value:'-'
    },
    {
      name:'Next tier',
      value:'20 points away'
    },
  ]
  return <div>
      
        <div />
        <div className={` relative shadow-lg shadow-sky-800 w-full  bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl  `}>
          {reward.map((reward,idx)=>(
            <RwardText key={idx} name={reward.name} value={reward.value} />
          ))}  
          {/* <Meteors number={40} /> */}
        </div> 
        <div>
        </div>
  </div>
}

const RwardText = ({name, value}:{name:string, value:string})=>{
  return <div className=" grid grid-cols-2" >
     <div>
      {name}
     </div> 
     <div className=" ">
      <div className=" -ml-12">
      {value}
      </div>
     </div>
  </div>
}

const  RequirementCard = ({name,i, points, free}:{name:string, points:string,free:string,i:number})=>{
  return <div>
    <div className={` text-xl p-2 py-4 grid grid-cols-3 gap-10 ${i==0?' bg-gradient-to-r from-slate-800 to-indigo-800  ':i==1?' bg-gradient-to-r from-purple-800 to-indigo-500  ':i==2?' bg-gradient-to-r from-yellow-600 to-slate-400  ':i==3?' bg-gradient-to-r from-gray-500 to-slate-300  ':i==4?' bg-gradient-to-r from-yellow-700 to-slate-800  ':''} bg-orange-400`}> 
      <div>
        {name}
      </div>
      <div>
        {points} Points
      </div>
      <div>
      Free {free}
      </div>
    </div>
  </div>
}


const RewardCard2 = ( )=>{
  const reward = [
    {
      name:'Reward period end',
      value:'1 Month, 8 Days, 19 Hours, 5 Minutes'
    },
    {
      name:'Current reward',
      value:'-'
    },
    {
      name:'Next tier',
      value:'20 points away'
    },
  ]
  return <div>
      
        <div />
        <div className={` relative shadow-lg shadow-sky-800 w-full  bg-gray-900 border border-gray-800  px-4 py-4 h-full overflow-hidden rounded-2xl  `}>
        All rewards have a minimum purchase requirement and are valid for 30 days.
          {/* <Meteors number={40} /> */}
        </div> 
        <div>
        </div>
  </div>
}