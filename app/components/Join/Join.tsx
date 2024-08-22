"use client"  
import { useEffect, useRef, useState } from "react"; 
import { Join } from "../Join";
import { motion,useScroll } from "framer-motion"; 

export default function JoinUs() {  
  
  const joinRef = useRef(null); 
const[inView, setInView] = useState(false)   
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

  

  const {scrollYProgress } = useScroll({
    target:joinRef,
    offset:['start end','start start']
  }) 

  return <div> 
     
    <motion.div ref={joinRef} className={` backdrop-blur-md transition-all duration-500 z-50 mt-1`}
 style={{
  opacity: scrollYProgress,
  transform: inView ? 'translateY(0)' : 'translateY(10px)',
}}  >  
        <Join />
      </motion.div>   
  </div>
}
 