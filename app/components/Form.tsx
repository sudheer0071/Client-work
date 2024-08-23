"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function Form() {

  const feilds = [
    {
      name:"Name",
      id:'name',
      placeholder:'tyler',
    },
    {
      name:"Email",
      id:'email',
      placeholder:'Durden@email.com',
      type:"email"
    },
    {
      name:"[Console] Sell Rate",
      id:'lastname',
      placeholder:'Please Select',
      type:'select'
    },
  
    {
      name:"Sell Amount",
      id:'lastname',
      placeholder:'Durden',
    },
    {
      name:"Payment Method",
      id:'payout_method',
      placeholder:'Revould (0 fees)',
      type:'select'
    },
    {
      name:"Payout Details",
      id:'payout_details',
      placeholder:'',
    },
    { 
      name:"X/Twitter Username",
      id:'twitter',
      placeholder:'',
    },
    {
      name:"EA/Web App Email",
      id:'ea',
      placeholder:'',
    },
    {
      name:"EA/Web App Password",
      id:'ea_pass',
      placeholder:'',
    },
    {
      name:"Backup code 1",
      id:'backup_code1',
      placeholder:'123456789',
    },
    {
      name:"Backup code 2",
      id:'backup_code2',
      placeholder:'123456789',
    },
    {
      name:"Backup code 3",
      id:'backup_code3',
      placeholder:'123456789',
    },
  ]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className=" mx-32 rounded-none md:rounded-2xl p-4 md:p-8 bg-[#230f3f] shadow-input">
      <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 text-center">
        Sell
      </h2>
      <p className="text-neutral-600 text-sm mt-2 dark:text-neutral-300 text-center">
        Sell your coin here
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div  className="grid grid-cols-3 gap-5 mb-4">
        {/* <div className="mb-4"> */}
        {feilds.map((feild,idx)=> (
          <LabelInputContainer key={idx}>
           <Label  htmlFor={feild.id}> {feild.name} <div  className={` ${feild.id=='twitter'?"hidden":''} inline ml-1 text-purple-300`}>*</div> </Label >
           <Input className=" bg-gradient-to-r from-slate-800 to-indigo-800  " id={feild.id} placeholder={feild.placeholder} type={feild.name=='Email'?feild.type:feild.type=='select'?feild.type:'text'} />
          </LabelInputContainer>
        ))}
          {/* <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer> 
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Your twitter password</Label>
          <Input
            id="twitterpassword"
            placeholder="••••••••"
            type="twitterpassword"
          />
        </LabelInputContainer> */}
        </div>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

   
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
