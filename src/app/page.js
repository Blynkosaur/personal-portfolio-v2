"use client";
import { Highlighter } from "@/components/ui/highlighter";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "./Page.module.css";
import DotGrid from "@/components/DotGrid";
import TextType from "@/components/TextType";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperclip,
  FaHome,
} from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import PixelTrail from "@/components/PixelTrail";
import TargetCursor from "@/components/TargetCursor";
import { useState, useEffect } from "react";

import React from "react";
import { AlignCenterVertical } from "lucide-react";

export function WaterlooImage() {
  return (
    <img
      style={{ height: "24px", width: "24px" }}
      src="/watimage.png"
      alt="icon"
      class="icon"
    />
  );
}

export default function Home() {
  const [checked, setChecked] = useState(false);
  const [hover, setHover] = useState(false);
  const [livewellHover, setLivewellHover] = useState(false);
  const [programmingHover, setProgrammingHover] = useState(false);
  return (
    <div
      className={`${styles.page} relative flex flex-col justify-center items-center text-white p-10 scrollbar-hide overflow-x-hidden`}
      style={{
        minHeight: "100vh",
        backgroundColor: "#1e1e2e",
        color: "#E8F4F8",
        fontFamily: "var(--font-space-mono), 'Courier New', monospace",
        paddingBottom: "40px",
        zIndex: 2,
      }}
    >
      <DotGrid
        dotSize={4}
        gap={20}
        baseColor="#c4a3ec"
        activeColor="#ffffff"
        style={{ opacity: 0.18 }}
      />
      <div className="hidden md:block">
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      </div>
      <Button
        asChild
        variant="outline"
        className="cursor-target absolute top-6 left-4 md:left-16 lg:left-24 z-10 bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-6 py-3 text-base "
        style={{ border: "0.5px solid #9ca3af" }}
      >
        <Link href="/">
          <FaHome className="mr-2" style={{ color: "#c4a3ec" }} />
          Home
        </Link>
      </Button>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 1,
          pointerEvents: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      {/* <div style={{ height: "20px" }} /> */}
      <div className="w-full max-w-xl mt-2 mx-1">
        <h1
          className="text-3xl font-bold mt-12 mb-10 text-left"
          style={{ fontWeight: "250" }}
        >
          <TextType
            text={["👋Hi! I'm"]}
            typingSpeed={60}
            pauseDuration={2000}
            initialDelay={500}
            showCursor={false}
            textColors={["#ffffff"]}
            loop={false}
            style={{
              fontFamily: "var(--font-space-mono), 'Courier New', monospace",
              fontWeight: "400",
              fontStyle: "italic",
            }}
          />{" "}
          <TextType
            text={[
              "Bryan.",
              "a builder.",
              "a problem solver.",
              "a UWaterloo student.",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            initialDelay={1000}
            showCursor={true}
            cursorCharacter="|"
            textColors={["#c4a3ec"]}
            loop={true}
            style={{
              fontFamily: "var(--font-space-mono), 'Courier New', monospace",
              fontWeight: "400",
              fontStyle: "italic",
            }}
          />
        </h1>

        <div
          className="text-white-600 text-lg mb-8 leading-9"
          style={{
            fontWeight: "300",
            alignContent: "left",
            textAlign: "left",
            width: "100%",
          }}
        >
          <ul className="space-y-8">
            <li
              className="group flex items-start gap-4 pl-8 relative hover:font-bold hover:translate-x-3 transition-transform duration-200"
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
              <div className="absolute left-2 top-1/2 w-[8px] h-[8px] bg-white rotate-45 transform -translate-y-1/2 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110"></div>
              SWE{" "}
              <span
                className="font-medium  hover:text-[#c4a3ec] transition-colors duration-200"
                style={{
                  textDecoration: hover ? "underline" : "none",
                  fontWeight: hover ? "bold" : "normal",
                }}
              >
                <a
                  href="https://uwaterloo.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:font-bold  hover:underline hover:text-[#c4a3ec] transition-colors duration-200"
                  style={{
                    fontWeight: hover ? "bold" : "normal",
                    color: hover ? "#c4a3ec" : "inherit",
                    textDecoration: hover ? "underline" : "none",
                  }}
                >
                  {hover && (
                    <Highlighter action="underline" color="#ffffff" >
                      <span style={{ fontWeight: "bold", color: "#c4a3ec" }}>
                        @UWaterloo
                      </span>
                    </Highlighter>
                  )}
                  {!hover && "@UWaterloo"}
                </a>
              </span>
            </li>
            <li className="group  items-start gap-4 pl-8 relative hover:translate-x-3 hover:font-bold transition-transform duration-200">
              <div className="absolute left-2 top-1/2 w-[8px] h-[8px] bg-white rotate-45 transform -translate-y-1/2 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110"></div>
              Fighting imposter syndrome by building things
            </li>
            <li className="group  items-start gap-4 pl-8 relative hover:translate-x-3 hover:font-bold transition-transform duration-200"
            onMouseEnter={() => {
                  setProgrammingHover(true);
                }}
                onMouseLeave={() => {
                  setProgrammingHover(false);
                }}>
              <div className="absolute left-2 top-1/2 w-[8px] h-[8px] bg-white rotate-45 transform -translate-y-1/2 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110"></div>
              Building an{" "}
              <span
                className="font-medium hover:text-[#c4a3ec] transition-colors duration-200 cursor-pointer"
                style={{
                  textDecoration: programmingHover ? "underline" : "none",
                  fontWeight: programmingHover ? "bold" : "normal",
                }}
                
              >
                {!programmingHover && "VM interpreter"}
                {programmingHover && (
                  <Highlighter action="underline" color="#ffffff">
                    <span style={{ fontWeight: "bold", color: "#c4a3ec" }}>
                    VM interpreter
                    </span>
                  </Highlighter>
                )}
              </span>{" "}
              in C
            </li>

            <li className="group  items-start gap-4 pl-8 relative hover:translate-x-3 transition-transform hover:font-bold duration-200"
            onMouseEnter={() => {
                  setLivewellHover(true);
                }}
                onMouseLeave={() => {
                  setLivewellHover(false);
                }}>
              <div className="absolute  left-2 top-1/2 w-[8px] h-[8px] bg-white rotate-45 transform -translate-y-1/2 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110"></div>
              Prev. swe intern{" "}
              <a
                href="https://joinlivewell.ca"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:font-bold hover:underline hover:text-[#c4a3ec] transition-colors duration-200"
              >
                {!livewellHover && "@Livewell"}
                {livewellHover && (
                  <Highlighter  action="underline" color="#ffffff">
                    <span style={{ fontWeight: "bold", color: "#c4a3ec" }}>
                      @Livewell
                    </span>
                  </Highlighter>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Projects Button */}
      <div className="w-full max-w-xl mt-6 mb-16">
        <Button
          className="cursor-target w-full bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-10 py-6 text-lg font-medium"
          asChild
          style={{ border: "0.5px solid #9ca3af" }}
        >
          <Link href="/projects" className="!font-bold">
            View My Projects
          </Link>
        </Button>
      </div>
      <div className="text-lg mb-10 w-full max-w-xl text-left flex flex-col sm:flex-row gap-2 sm:gap-2.5 items-center">
        <div className="flex flex-col items-center justify-center">
          ↳ You can contact me at
        </div>
        <div className="flex flex-col justify-center items-center">
          <Button
            className="cursor-target bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-6 py-3 text-base"
            asChild
            style={{ border: "0.5px solid #9ca3af" }}
          >
            <a
              href="mailto:b86lin@uwaterloo.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              b86lin@uwaterloo.ca <WaterlooImage style={{ color: "#c4a3ec" }} />
            </a>
          </Button>
        </div>
      </div>
      <div className="text-center mb-1 max-w-xl w-full mt-2">
        <p className="font-thin text-xl text-center mb-4 max-w-xl w-full">
          Here are my socials:
        </p>
      </div>
      <div className="flex items-center gap-2 mb-6 max-w-xl w-full justify-center">
        <div className="flex-1 h-px bg-gray-600"></div>
        <span className="text-gray-400 text-sm px-2 ">↓</span>
        <div className="flex-1 h-px bg-gray-600"></div>
      </div>
      <div className="flex gap-4 justify-start flex-col sm:flex-row sm:justify-between max-w-xl w-full">
        <Button
          className="cursor-target w-full sm:w-auto bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-6 py-3 text-base"
          asChild
          style={{ border: "0.5px solid #9ca3af" }}
        >
          <a
            // download= {true}
            href={`./Bryan_Lin_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPaperclip style={{ color: "#c4a3ec" }} />
            Resume
          </a>
        </Button>
        <Button
          className="cursor-target w-full sm:w-auto bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-6 py-3 text-base"
          asChild
          style={{ border: "0.5px solid #9ca3af" }}
        >
          <Link
            href="https://github.com/blynkosaur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={{ color: "#c4a3ec" }} />
            GitHub
          </Link>
        </Button>
        <Button
          className="cursor-target w-full sm:w-auto bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-6 py-3 text-base"
          asChild
          style={{ border: "0.5px solid #9ca3af" }}
        >
          <Link
            href="https://www.linkedin.com/in/bryan-lin-176785300/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin style={{ color: "#c4a3ec" }} />
            LinkedIn
          </Link>
        </Button>
        <Button
          className="cursor-target w-full sm:w-auto bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-6 py-3 text-base"
          asChild
          style={{ border: "0.5px solid #9ca3af" }}
        >
          <Link
            href="https://www.instagram.com/bry4n.lin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={{ color: "#c4a3ec" }} />
            Instagram
          </Link>
        </Button>
      </div>
      {/* Bottom spacing for mobile scrolling */}
      <div className="h-20"></div>
    </div>
  );
}
