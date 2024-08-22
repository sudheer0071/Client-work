"use client"

import React, { useEffect, useRef } from 'react' 
import Content from './Content'
import { useRecoilState } from 'recoil'
import { footerState } from '../recoilContextProvider'
import { motion, useScroll } from 'framer-motion'


export default function Footer() {

  const[footer, setFooter] = useRecoilState(footerState)
  const footerRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger your action here when the footer is in view
          console.log('Footer is in view');
          setFooter(true)
        }else{
          setFooter(false)
        }
      },
      {
        root: null, // use the viewport as the root
        rootMargin: '300px',
        threshold: 0.5, // trigger when 10% of the footer is in view
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'start start']
  })

  return (
    <div className=' bg-indigo -950 -z- 10'>
    <motion.div ref={footerRef}
      // style={{
      //   opacity:!footer?scrollYProgress:1,
      //   transform: footer ? 'translateY(0)' : 'translateY(10px)', }}
      className={`relative h-[60vh] bg-gradient-to-r from-zinc-900 to-indigo-950 p-3 overflow-hidden ${footer?'z-[1]':'z-[-1]'}  `}
      // style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[800px] w-full mt-40'>
        <Content />
      </div>
    </motion.div>
    </div>
  )
}