"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { Glow } from "./ui/Glow";

export function ServiceCard() {

  const Cards = [
    {
     name:'Play Station',
     desc:'Play Unlimited games with high Frame Rates and ultra graphics',
     d:"M13.8059 41.5548C11.0347 43.3935 11.9585 46.8871 17.8703 48.5419C23.9669 50.5645 30.6178 51.1161 37.0839 50.0129C37.4534 50.0129 37.8229 49.829 38.0076 49.829V43.5774L31.7263 45.6C29.3246 46.3355 26.9229 46.5194 24.5212 45.9677C22.6737 45.4161 23.0432 44.3129 25.2602 43.3935L38.0076 38.9806V32.1774L20.272 38.2452C18.0551 38.9806 15.8381 40.0839 13.8059 41.5548ZM56.667 13.9742V31.8097C64.2415 35.4871 70.1534 31.8097 70.1534 22.2484C70.1534 12.5032 66.6432 8.09032 56.4822 4.59677C51.1246 2.75806 45.5822 1.10323 40.0398 0V53.1387L52.972 57V12.3194C52.972 10.2968 52.972 8.82581 54.45 9.37742C56.4822 9.92903 56.667 11.9516 56.667 13.9742ZM80.6839 37.3258C75.3263 35.4871 69.5992 34.7516 64.0568 35.3032C61.1009 35.4871 58.3297 36.2226 55.7432 37.1419L55.189 37.3258V44.4968L67.1975 40.0839C69.5992 39.3484 72.0009 39.1645 74.4025 39.7161C76.25 40.2677 75.8805 41.371 73.6636 42.2903L55.189 49.0936V56.0806L80.6839 46.7032C82.5314 45.9677 84.1941 45.0484 85.6721 43.5774C86.9653 41.7387 86.411 39.1645 80.6839 37.3258Z",
    type:'ps5',
     fill:"#0CDDF9",
      viewbox:'0 0 98 57'
   },
    {
     name:'Xbox',
     desc:'Play Unlimited games with high Frame Rates and ultra graphics',
     d:"M24.387,51.893c-4.038-0.383-8.126-1.82-11.637-4.092c-2.942-1.903-3.606-2.687-3.606-4.248c0-3.137,3.479-8.632,9.43-14.895c3.379-3.558,8.087-7.726,8.596-7.613c0.991,0.219,8.904,7.873,11.868,11.477c4.684,5.696,6.837,10.361,5.743,12.441c-0.831,1.581-5.993,4.672-9.784,5.857C31.871,51.8,27.768,52.214,24.387,51.893zM5.168,40.291c-2.445-3.719-3.681-7.381-4.276-12.678c-0.197-1.748-0.128-2.748,0.446-6.338c0.715-4.47,3.284-9.646,6.373-12.83c1.314-1.353,1.432-1.389,3.035-0.852c1.943,0.652,4.021,2.075,7.243,4.965l1.882,1.688l-1.029,1.25c-4.769,5.805-9.802,14.039-11.697,19.13c-1.03,2.766-1.444,5.545-0.999,6.701c0.298,0.782,0.024,0.49-0.981-1.035L5.168,40.291zM48.089,40.924c0.241-1.17-0.063-3.316-0.78-5.482c-1.551-4.69-6.734-13.416-11.494-19.349l-1.498-1.868l1.622-1.476c2.116-1.927,3.585-3.081,5.172-4.061c1.251-0.773,3.038-1.458,3.808-1.458c0.473,0,2.142,1.722,3.488,3.594c2.086,2.899,3.619,6.421,4.396,10.082c0.503,2.368,0.545,7.429,0.082,9.792c-0.385,1.938-1.188,4.449-1.969,6.153c-0.59,1.276-2.047,3.756-2.686,4.563c-0.329,0.415-0.329,0.414-0.146-0.48L48.089,40.924z M24.819,6.346c-2.197-1.105-5.585-2.292-7.457-2.612c-0.655-0.112-1.774-0.175-2.485-0.139c-1.545,0.077-1.476-0.002,1.001-1.163c2.059-0.965,3.777-1.532,6.11-2.018c2.623-0.547,7.554-0.553,10.135-0.013c2.787,0.583,6.07,1.794,7.92,2.923l0.551,0.334l-1.262-0.063c-2.507-0.126-6.16,0.879-10.084,2.771c-1.184,0.571-2.211,1.027-2.287,1.015c-0.075-0.014-1.039-0.48-2.145-1.036H24.819z",
     type:'xbox',
     fill:"#62D96B",
     viewbox:'-10.5 -2.5 75 57',
   },
    {
     name:'PC',
     desc:'Play Unlimited games with high Frame Rates and ultra graphics',
     d:"M59.15,13.313H13.136c-1.134,0.001-2.05,0.826-2.052,1.848v32.068c0.001,1.021,0.919,1.847,2.052,1.847h21.862v8.64H24.242v1.854h23.687v-1.854H37.058v-8.64h22.091c1.134,0,2.051-0.826,2.051-1.847V15.16C61.2,14.14,60.282,13.313,59.15,13.313z M59.141,47.221H13.145V15.167h45.996V47.221z",
    type:"pc",
     fill:"#FFA500",
     viewbox:'-1.5 7 75 57'
   },
  ]

  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
      <PinContainer
        type="ps5"
        title="Futcoin.com/ps5"
        href="/" 
      >
        <div className="  flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Play Station
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
             Play Unlimited games with high Frame Rates and ultra graphics
            </span>
          </div>
          <div className=" mt-6" />
          <svg viewBox="0 0 98 57" xmlns="http://www.w3.org/2000/svg">
       <Glow/>
      
        <path d="M13.8059 41.5548C11.0347 43.3935 11.9585 46.8871 17.8703 48.5419C23.9669 50.5645 30.6178 51.1161 37.0839 50.0129C37.4534 50.0129 37.8229 49.829 38.0076 49.829V43.5774L31.7263 45.6C29.3246 46.3355 26.9229 46.5194 24.5212 45.9677C22.6737 45.4161 23.0432 44.3129 25.2602 43.3935L38.0076 38.9806V32.1774L20.272 38.2452C18.0551 38.9806 15.8381 40.0839 13.8059 41.5548ZM56.667 13.9742V31.8097C64.2415 35.4871 70.1534 31.8097 70.1534 22.2484C70.1534 12.5032 66.6432 8.09032 56.4822 4.59677C51.1246 2.75806 45.5822 1.10323 40.0398 0V53.1387L52.972 57V12.3194C52.972 10.2968 52.972 8.82581 54.45 9.37742C56.4822 9.92903 56.667 11.9516 56.667 13.9742ZM80.6839 37.3258C75.3263 35.4871 69.5992 34.7516 64.0568 35.3032C61.1009 35.4871 58.3297 36.2226 55.7432 37.1419L55.189 37.3258V44.4968L67.1975 40.0839C69.5992 39.3484 72.0009 39.1645 74.4025 39.7161C76.25 40.2677 75.8805 41.371 73.6636 42.2903L55.189 49.0936V56.0806L80.6839 46.7032C82.5314 45.9677 84.1941 45.0484 85.6721 43.5774C86.9653 41.7387 86.411 39.1645 80.6839 37.3258Z" 
              fill="#0CDDF9" 
              stroke="black" 
              stroke-width="0.1" 
              filter="url(#glow)"
               />
      </svg>
        </div>
      </PinContainer>
      <PinContainer
      type="xbox"
        title="Futcoin.com/Xbox"
        href="/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Xbox
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
             Play Unlimited games with high Frame Rates and ultra graphics
            </span>
          </div>
          <div className=" mt-6" />
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"   x="0px" y="0px"
 viewBox="-10.5 -2.5 75 57" enable-background="new -10.5 -2.5 75 57"  >
<Glow/>
<path fill="#62D96B" d="M24.387,51.893c-4.038-0.383-8.126-1.82-11.637-4.092c-2.942-1.903-3.606-2.687-3.606-4.248
	c0-3.137,3.479-8.632,9.43-14.895c3.379-3.558,8.087-7.726,8.596-7.613c0.991,0.219,8.904,7.873,11.868,11.477
	c4.684,5.696,6.837,10.361,5.743,12.441c-0.831,1.581-5.993,4.672-9.784,5.857C31.871,51.8,27.768,52.214,24.387,51.893z
	 M5.168,40.291c-2.445-3.719-3.681-7.381-4.276-12.678c-0.197-1.748-0.128-2.748,0.446-6.338c0.715-4.47,3.284-9.646,6.373-12.83
	c1.314-1.353,1.432-1.389,3.035-0.852c1.943,0.652,4.021,2.075,7.243,4.965l1.882,1.688l-1.029,1.25
	c-4.769,5.805-9.802,14.039-11.697,19.13c-1.03,2.766-1.444,5.545-0.999,6.701c0.298,0.782,0.024,0.49-0.981-1.035L5.168,40.291z
	 M48.089,40.924c0.241-1.17-0.063-3.316-0.78-5.482c-1.551-4.69-6.734-13.416-11.494-19.349l-1.498-1.868l1.622-1.476
	c2.116-1.927,3.585-3.081,5.172-4.061c1.251-0.773,3.038-1.458,3.808-1.458c0.473,0,2.142,1.722,3.488,3.594
	c2.086,2.899,3.619,6.421,4.396,10.082c0.503,2.368,0.545,7.429,0.082,9.792c-0.385,1.938-1.188,4.449-1.969,6.153
	c-0.59,1.276-2.047,3.756-2.686,4.563c-0.329,0.415-0.329,0.414-0.146-0.48L48.089,40.924z M24.819,6.346
	c-2.197-1.105-5.585-2.292-7.457-2.612c-0.655-0.112-1.774-0.175-2.485-0.139c-1.545,0.077-1.476-0.002,1.001-1.163
	c2.059-0.965,3.777-1.532,6.11-2.018c2.623-0.547,7.554-0.553,10.135-0.013c2.787,0.583,6.07,1.794,7.92,2.923l0.551,0.334
	l-1.262-0.063c-2.507-0.126-6.16,0.879-10.084,2.771c-1.184,0.571-2.211,1.027-2.287,1.015c-0.075-0.014-1.039-0.48-2.145-1.036
	H24.819z"
  stroke="black" 
  stroke-width="0.1" 
  filter="url(#glow)"
  />
</svg>
        </div>
      </PinContainer>
      <PinContainer
      type="pc"
        title="Futcoin.com/pc"
        href="/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            PC
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
             Play Unlimited games with high Frame Rates and ultra graphics
            </span>
          </div>
          <div className=" mt-6" />
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"   x="0px" y="0px"
	viewBox="-1.5 7 75 57" enable-background="new -1.5 7 75 57"> 
  <Glow/>
<path fill="#FFA500" d="M54.72,43.311V18.46H18.167c-0.49,0-0.887,0.347-0.887,0.776v24.072H54.72V43.311z"/>
<path fill="#FFA500" d="M59.15,13.313H13.136c-1.134,0.001-2.05,0.826-2.052,1.848v32.068c0.001,1.021,0.919,1.847,2.052,1.847
	h21.862v8.64H24.242v1.854h23.687v-1.854H37.058v-8.64h22.091c1.134,0,2.051-0.826,2.051-1.847V15.16
	C61.2,14.14,60.282,13.313,59.15,13.313z M59.141,47.221H13.145V15.167h45.996V47.221z"
  stroke="black" 
  stroke-width="0.1" 
  filter="url(#glow)"
  />
</svg>
        </div>
      </PinContainer>
  
  {/* {Cards.map((card,idx)=> (
     <PinContainer
     key={idx}
     type={card.type}
     title="trade now"
     href="https://twitter.com/mannupaaji" 
   >
     <div className="  flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
       <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
         {card.name}
       </h3>
       <div className="text-base !m-0 !p-0 font-normal">
         <span className="text-slate-500 ">
          {card.desc}
         </span>
       </div>
       <div className=" mt-6 justify-center flex items-center" />
       <div className=" flex justify-center">
       <svg version="1.1" className="" x="0px" y="0px" enable-background="new -10.5 -2.5 75 57"  viewBox={card.viewbox} xmlns="http://www.w3.org/2000/svg">
    <Glow/>
   
   {card.name=='PC'?<path fill="#FFA500" d="M54.72,43.311V18.46H18.167c-0.49,0-0.887,0.347-0.887,0.776v24.072H54.72V43.311z"/>:""}
     <path d={card.d} 
           fill={card.fill}
           stroke="black" 
           stroke-width="0.1" 
           filter="url(#glow)"
            />
   </svg>
       </div>
     </div>
   </PinContainer>
  ) )} */}
    </div>
  );
}
