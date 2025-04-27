"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
export default function Home() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (isChecked) => {
    setChecked(isChecked);
    if (isChecked) {
      alert("Nice to meet you!");
    }
  };

  return (
    
    <div className=" overscroll-no min-h-screen flex flex-col justify-start items-center bg-black text-white p-6 text-center">
      <Link href="/" className="absolute top-6 left-6 bg-black-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-black-600">
        Home
      </Link>
      <div className="w-full max-w-2xl mt-10 mx-1">
      <h1 className="text-3xl font-bold mb-10 text-left">👋Hi! I'm Bryan.</h1>
      
      <p className="text-white-600 text-lg text-justify mb-8 leading-9">I'm an incoming SWE student at the University of Waterloo for Fall of 2025 and I'm passionate about programming & mathematics. Having been self-taught since freshman year of high school, I immersed myself in coding, viewing it as a fascinating gateway to enhance the world around us. I will be interning at <a href = "https://joinlivewell.ca" className = "italic">Livewell</a> during summer. My next project will probably be building a brainrot interpreted language 🤫🧏🏻‍♂️ and learning more about operating systems using C. 
      In my opinion, machine learning is the 
        perfect blend between programming and mathematics combining algorithms, data, and optimization to build intelligent systems.
         </p>
      </div>
      <div className="w-full max-w-2xl text-left">
        <p className="text-left text-lg mb-10">↳ You can contact me at <a href="mailto:bryanlin316@gmail.com"><b>bryanlin316@gmail.com</b></a>

          </p>
      </div>
      <div>
        <p className="font-bold text-lg">Feel free to check out my work below</p>
        <p className="mb-4">↓       ↓       ↓</p>
      </div>
      <div className="flex gap-6">
        <Button asChild>
          <Link href="https://github.com/mini-bryanlin"><FaGithub />GitHub</Link>
        </Button>
        <Button asChild>
          <Link href="https://www.linkedin.com/in/bryan-lin-176785300/"><FaLinkedin/>LinkedIn</Link>
        </Button>
        <Button asChild>
          <Link href="https://www.instagram.com/mini_bryanlin/"><FaInstagram/>Instagram</Link>
        </Button>
      </div>
      <div className="mt-6 flex-col items-center gap-100">
        <Checkbox id="nice-to-meet-you" checked={checked} onCheckedChange={handleCheckboxChange} />
        <label htmlFor="nice-to-meet-you" className="text-white-300">Click Me!</label>
      </div>
    </div>
  );
}
