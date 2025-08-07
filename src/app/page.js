'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaPaperclip } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect} from "react";


export default function Home() {
  const [checked, setChecked] = useState(false);

  useEffect( () => { 
    
  const text = "Hey, I’m Bryan. Thanks for stopping by! I build stuff, but mainly break it. If you like what you see, let’s connect — or just say hi."
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.pitch = 0.05;
  
  
  const voices = window.speechSynthesis.getVoices();
  voices.forEach(voice => console.log(voice.name, voice.lang));

  const selectedVoice = voices.find(
    (voice) =>
      voice.lang === "en-US" &&
      (voice.name.includes("Google US English") || voice.name.includes("Daniel") || voice.name.includes("Tom") || voice.name.includes("Aaron"))
  );


  utterance.voice = selectedVoice

  utterance.rate = 1.3

  if (checked){
    window.speechSynthesis.speak(utterance);
    setTimeout(() => {
  alert("Did I scare you? 👀 👻");
}, 7000);
    
    
  }
}, [checked])

  const handleCheckboxChange = (isChecked) => {
    setChecked(isChecked);
    if (isChecked) {
      alert("🫣 Peakabo!!! 😱 ");
      
      
    }
  };

  return (
    
    <div className=" overscroll-no min-h-screen flex flex-col justify-start items-center bg-black text-white p-6 text-center">
      <Link href="/" className="absolute top-6 left-6 bg-black-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-black-600">
        Home
      </Link>
      <div className="w-full max-w-2xl mt-10 mx-1">
      <h1 className="text-3xl font-bold mb-10 text-left">👋Hi! I'm Bryan.</h1>
      
      <p className="text-white-600 text-lg text-justify mb-8 leading-9">I'm an incoming SWE student at the <span className = "font-medium">University of Waterloo</span> for Fall of 2025 and I'm passionate about programming & mathematics. Having been self-taught since freshman year of high school, I immersed myself in coding, viewing it as a fascinating gateway to enhance the world around us. I will be interning at <a href = "https://joinlivewell.ca" className = "italic font-semibold">Livewell</a> during summer. My next project will probably be building an interpreted programming language and learning more about operating systems using C. 
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
          <a 
          // download= {true} 
          href={`./B_LIN_RESUME.pdf`}><FaPaperclip/>Resume</a>
        </Button>
        <Button asChild>
          <Link href="https://github.com/blynkosaur"><FaGithub />GitHub</Link>
        </Button>
        <Button asChild>
          <Link href="https://www.linkedin.com/in/bryan-lin-176785300/"><FaLinkedin/>LinkedIn</Link>
        </Button>
        <Button asChild>
          <Link href="https://www.instagram.com/bry4n.lin/"><FaInstagram/>Instagram</Link>
        </Button>
      </div>
      <div className="mt-6 flex-col items-center gap-100">
        <Checkbox id="nice-to-meet-you" checked={checked} onCheckedChange={handleCheckboxChange} />
        <label htmlFor="nice-to-meet-you" className="text-white-300">Click Me!</label>
      </div>
    </div>
  );
}
