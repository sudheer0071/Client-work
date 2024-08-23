import { Instagram, Phone, Twitter } from 'lucide-react'
import React from 'react' 
import { Discord } from './svg/Discord'
export default function Content() {

 const items= [
  {
    name:"Home", 
    link:"/",
  },
  {
    name:"Buy", 
    link:"/#Buy",
  },
  {
    name:"Sell", 
    link:"/sell",
  },
  {
    name:"Rewards", 
    link:"/rewards",
  },
  {
    name:"Terms & Conditions", 
    link:"/terms-and-conditions",
  },
  {
    name:"Contacts", 
    link:"/login",
  },
  {
    name:"Register", 
    link:"/register",
  },
 ]

  return (
    <div className=' py-8 px-12 h-full w-full flex flex-col relative justify-between '>
        {/* <Section1 /> */}
        <div className=' mt-[300px]'>
          <div className=' flex justify-center gap-14 mt-20'>
            {items.map((item,idx)=> <Item key={idx} name={item.name} link={item.link} />)} 
          </div>
          <div className=' flex justify-center gap-10 mt-10'>
         <div className=' border-2 p-1 rounded-full  hover:scale-110  hover:bg-[#5865F2] transition-all duration-500 '>
          <a href="https://www.instagram.com/futcoinshop_/">
             <Discord/>
          </a>
         </div>
         <div className=' border-2 p-2 rounded-full hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:scale-110 transition-all duration-500'>
          <a href="https://www.instagram.com/futcoinshop_/">
            <Instagram size={30} className=' '/> 
          </a>
         </div>
         <div className=' border-2 p-2 rounded-full  hover:scale-110  hover:bg-blue-500 transition-all duration-500'>
          <a href="https://twitter.com/FUTCoinShop">
            <Twitter size={30} className=' '/>
          </a>
         </div> 
          </div>
          <div className=' flex justify-center mt-5'>
         <div className=' absolute bottom-8 text-lg text-center font-bold mt-'>
                 <p className=' text-sm'> <Phone size={15} className=' inline' /> +91 73397 44705</p>
                <p className='  text-base transition-all duration-1000 text-slate-400 dark:text-slate-500'>All Rights Reserved © 2024</p>
               <p>Payment gateways powered by <a href="https://sellix.io/">Sellix</a></p>
               <img className=' mt-4' src="https://futcoinshop.com/images/p-method.png" alt="" />
             <div className=' font-normal text-slate-300 mt-11'>
              Based in the USA
              <img width={20} className=' ml-4 inline ' src="https://futcoinshop.com/images/united-states-flag-icon.svg" alt="" />
             </div>
         </div>
          </div>

        </div>
        <Section2 />

    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between p-3 items-end'>
          <div className=' absolute bottom-0 left-0 p-3 z-[-2]'>
            <h1 className='text-[10.5vw] leading-[0.8] mt-10 bg-gradient-to-r  from-pink-100 to-indigo-300 mx-3 text-transparent bg-clip-text text-left opacity-10'>Global Fut services</h1>
          </div>
          <div className=' absolute right-0 bottom-0 p-3'>
            {/* <p>©copyright</p> */}
          </div>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20  mt-40'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>About</h3>
                <p>Home</p>
                <p>Projects</p>
                <p>Our Mission</p>
                <p>Contact Us</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Education</h3>
                <p>News</p>
                <p>Learn</p>
                <p>Certification</p>
                <p>Publications</p>
            </div>
        </div>
    )
}

const Item = ({name, link}:{name:string, link:string})=>{
  return <div className=' hover:scale-110 text-xl font-medium hover:text-zinc-400 transition-all duration-500 cursor-pointer'>
    <a href={link}>
    {name}
    </a>
  </div>
}