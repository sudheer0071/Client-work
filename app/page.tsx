"use client"
import Image from "next/image";
import { Background } from "./components/Background";
import { SparkleText } from "./components/SparklText";
import { Boxes } from "./components/ui/background-boxes";
import { TextGenerate } from "./components/TextGenerate";
import { TypewriterEffect, } from "./components/ui/typewriter-effect";
import { TypeWritter } from "./components/TypeWritter";
import { useEffect, useRef, useState } from "react";
import Home from "./components/home/Home";
import { Services } from "./components/LampEffect";
import { ServiceCard } from "./components/ServiceCard";
import { ChooseCard } from "./components/ChooseCard";
import { Join } from "./components/Join";
import { motion, useScroll } from "framer-motion";
import Lenis from '@studio-freight/lenis'
import SmoothScrolling from "./components/Smoothscroll";
import { HowitWorks } from "./components/HowItworks";

export default function Main() {

  const joinRef = useRef(null);
  const chooseRef = useRef(null);
  const [inView, setInView] = useState(false)
  const [scrollingUp, setScrollingUp] = useState(false);
  const prevScrollY = useRef(0);

  const [bgColor, setBgColor] = useState('rgba(255, 255, 255, 0.5)');

  const divRef = useRef(null);
  const divRef2 = useRef(null);
  const divRef3 = useRef(null);
  const divRef4 = useRef(null);
  const divRef5 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Your action here, e.g., console.log or a function call
          setInView(entry.isIntersecting)
          console.log('Div is in view');
        } else {
          console.log('Div is out of view');
          setInView(false)
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the div is in view
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Your action here, e.g., console.log or a function call
          // setInView(entry.isIntersecting)
          console.log('Div is in view');
        } else {
          console.log('Div is out of view');
          // setInView(false)
        }
      },
      { threshold: 0.2 } // Trigger when 10% of the div is in view
    );

    if (divRef2.current) {
      observer.observe(divRef2.current);
    }

    return () => {
      if (divRef2.current) {
        observer.unobserve(divRef2.current);
      }
    };
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Your action here, e.g., console.log or a function call
          // setInView(entry.isIntersecting)
          console.log('Div is in view');
        } else {
          console.log('Div is out of view');
          // setInView(false)
        }
      },
      { threshold: 0.2 } // Trigger when 10% of the div is in view
    );

    if (divRef3.current) {
      observer.observe(divRef3.current);
    }

    return () => {
      if (divRef3.current) {
        observer.unobserve(divRef3.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Your action here, e.g., console.log or a function call
          console.log('Div is in view');
          setInView(entry.isIntersecting)
        } else {
          console.log('Div is out of view');
          setInView(false)
        }
      },
      { threshold: 0.2 } // Trigger when 10% of the div is in view
    );

    if (divRef5.current) {
      observer.observe(divRef5.current);
    }

    return () => {
      if (divRef5.current) {
        observer.unobserve(divRef5.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Your action here, e.g., console.log or a function call
          console.log('Div is in view');
          setInView(entry.isIntersecting)
        } else {
          console.log('Div is out of view');
          setInView(false)
        }
      },
      { threshold: 0.2 } // Trigger when 10% of the div is in view
    );

    if (divRef4.current) {
      observer.observe(divRef4.current);
    }

    return () => {
      if (divRef4.current) {
        observer.unobserve(divRef4.current);
      }
    };
  }, []);


  useEffect(() => {

    // window.addEventListener('scroll', handleScroll); 

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Join component is in view');
          setInView(entry.isIntersecting)
          // Your action when Join is in view
        } else {
          setInView(false)
          console.log('Join component is out of view');
          // Your action when Join is out of view
        }
      },
      {
        root: null, // viewport
        rootMargin: '10px',
        threshold: 0.2, // Trigger when 10% of the Join component is in view
      }
    );

    if (joinRef.current) {
      observer.observe(joinRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (joinRef.current) {
        observer.unobserve(joinRef.current);
      }
    };
  }, []); 

  const Choosecard = [
    {
      header: 'Safe',
      desc: 'Our Safe Trading Service insures your delivery with a 7 day guarantee.',
      img: "icon-1.svg"
    },
    {
      header: 'Easy',
      desc: 'Choose your amount, submit your login details, and we take care of ',
      img: "icon-2.svg"
    },
    {
      header: 'Fast',
      desc: 'Deliveries for all amounts are usually within 15 minutes.',
      img: "icon-3.svg"
    },
    {
      header: 'Reliable',
      desc: "We're open 24/7, ready to quickly deliver whenever you need us to be.",
      img: "icon-4.svg"
    },
    {
      header: 'Secure',
      desc: 'Your account details are never saved and are always deleted after every delivery.',
      img: "icon-5.svg"
    },
    {
      header: 'Rewards',
      desc: 'You earn 5% cashback on every order and get discounts with our rewards system.',
      img: "icon-6.svg"
    },
  ]

  const { scrollYProgress } = useScroll({
    target: joinRef,
    offset: ['start end', 'start start']
  })

  const { scrollYProgress: progress2 } = useScroll({
    target: divRef2,
    offset: ['start end', 'start start']
  })

  const { scrollYProgress: progress4 } = useScroll({
    target: divRef3,
    offset: ['start end', 'start start']
  })
 
  const { scrollYProgress: progress3 } = useScroll({
    target: divRef,
    offset: ['start start', 'end end']
  })
 
  const { scrollYProgress: progress5 } = useScroll({
    target: divRef5,
    offset: ['start end', 'start start']
  })

  return <div className={` relative w-full ${!inView ? '  ' : ''}    flex flex-col justify-center rounded-lg scroll-smooth `} >
    <SmoothScrolling> 
    {/* <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />  */}
    {/* <Boxes />   */}
    <div className=" overflow-hidden">
      <Home />
    </div>

    <div className=" bg-slate-900">
      <motion.div ref={divRef5} className="bg-[#2c164b] h-[130vh] "style={{ opacity: progress5 , transform: inView ? 'translateY(0)' : 'translateY(100px)', }}>
        <Services header="Our Safe Trading Service" />
      </motion.div>
    </div>

 
    <div className=" bg-[#2c164b] pb- 24">
      <motion.div ref={divRef3} style={{ opacity: progress4 }} className=" pt-40   flex flex-col justify-center items-center bg-[#150827]">
        <div className=" inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <div className="mt-8 sticky top-6 bg-gradient-to-br from-slate-200 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          Why Choose <div className="bg-gradient-to-r from-sky-500 to-indigo-600 inline-block text-transparent bg-clip-text ">FCS</div>
        </div>
        <motion.div ref={divRef} className=" z-50 mt-"
        >
          {Choosecard.map((card, idx) => {
            const targetScale = 1 - ((Choosecard.length - idx) * 0.05);
            return (
              <ChooseCard i={idx} key={idx} header={card.header} desc={card.desc} image={card.img} range={[idx * 0.25, 1]} progress={progress3} targetScale={targetScale} />
            )
          })}
        </motion.div> 
      </motion.div>
    </div>

   <div id="Buy" className=" bg-[#150827]">
    <motion.div ref={joinRef} className={` bg-gradient-to-r from-cyan-900 to-indigo-950 backdrop-blur-md transition-all duration-500 relative z-0 pt-32    `}
      style={{
        opacity: scrollYProgress,
        transform: inView ? 'translateY(0)' : 'translateY(10px)',
      }}  >
      <Join />
    </motion.div>
   </div>
<div className="  bg-gradient-to-r from-cyan-900  to-indigo-950 backdrop-blur-md">
 <motion.div ref={divRef2} style={{ opacity: progress2 , transform: inView ? 'translateY(0)' : 'translateY(100px)', }} className=" bg-slate-900 pt-2 z-40 "> 
      <div className=" text-5xl font-bold sticky top-10 p-3 justify-center flex w-full  z-50 ">
        Why Choose <div className=" inline bg-gradient-to-r from-pink-400 to-indigo-500 ml-3 text-transparent bg-clip-text "> FCS</div>
      </div>
      <motion.div ref={divRef4} style={{ opacity: progress2 , transform: inView ? 'translateY(0)' : 'translateY(100px)', }} className="bg-[#150827] ">
        <HowitWorks/>
      </motion.div> 
 </motion.div>
</div>
    <div className=" z-50">
      {/* <Services header="Our Safe Trading Service" />  */}
    </div>
    </SmoothScrolling>
  </div>
}
