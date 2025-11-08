"use client";
import { Highlighter } from "@/components/ui/highlighter";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "./Page.module.css";
import DotGrid from "@/components/DotGrid";
import TextType from "@/components/TextType";
import GameToggle from "@/components/GameToggle";
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
import {
  FigureOne,
  FigureTwo,
  FigureThree,
  FigureFour,
  Door
} from "@/components/MonsterFigure";
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
  const [imposterHover, setImposterHover] = useState(false);
  const [homeHover, setHomeHover] = useState(false);
  const [projectsHover, setProjectsHover] = useState(false);
  const [emailHover, setEmailHover] = useState(false);
  const [resumeHover, setResumeHover] = useState(false);
  const [githubHover, setGithubHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [instagramHover, setInstagramHover] = useState(false);
  const [gameVis, setGameVis] = useState(true);
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
        dotSize={2}
        gap={12}
        baseColor="#6b4c93"
        activeColor="#ffffff"
        style={{ opacity: 0.6 }}
      />
      <div className="hidden md:block">
        <TargetCursor spinDuration={5} hideDefaultCursor={true} />
      </div>
      <Button
        asChild
        variant="outline"
        className="cursor-target absolute top-6 left-4 md:left-16 lg:left-24 z-10 bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-6 py-3 text-base "
        style={{ border: "1px solid #6b7280" }}
        onMouseEnter={() => setHomeHover(true)}
        onMouseLeave={() => setHomeHover(false)}
      >
        <Link href="/">
          <FaHome className="mr-2" style={{ color: "#c4a3ec" }} />
          {homeHover ? (
            <Highlighter
              action="underline"
              iterations={1}
              padding={0}
              animationDuration={50}
              color="#ffffff"
            >
              <span style={{ fontWeight: "bold", color: "#c4a3ec" }}>Home</span>
            </Highlighter>
          ) : (
            "Home"
          )}
        </Link>
      </Button>
      <GameToggle

        className="cursor-target absolute top-6 right-4 md:right-16 lg:right-24 z-10 bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-6 py-3 text-base "
        checked={gameVis}
        onChange={(e) => setGameVis(e.target.checked)}
      />
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
          style={{ fontWeight: "700" }}
        >
          {/* Mobile version - with typing animation */}
          <span className="md:hidden">
            <TextType
              text={["👋Hi! I'm"]}
              typingSpeed={60}
              pauseDuration={2000}
              initialDelay={0}
              showCursor={false}
              textColors={["#ffffff"]}
              loop={false}
              style={{
                fontFamily: "var(--font-space-mono), 'Courier New', monospace",
                fontWeight: "700",
                fontStyle: "italic",
              }}
            />{" "}
            <TextType
              text={["Bryan"]}
              typingSpeed={75}
              pauseDuration={1500}
              initialDelay={500}
              showCursor={false}
              textColors={["#c4a3ec"]}
              loop={false}
              style={{
                fontFamily: "var(--font-space-mono), 'Courier New', monospace",
                fontWeight: "700",
                fontStyle: "italic",
              }}
            />
          </span>

          {/* Desktop version - with typing animation */}
          <span className="hidden md:block">
            <TextType
              text={["👋Hi! I'm"]}
              typingSpeed={60}
              pauseDuration={2000}
              initialDelay={0}
              showCursor={false}
              textColors={["#ffffff"]}
              loop={false}
              style={{
                fontFamily: "var(--font-space-mono), 'Courier New', monospace",
                fontWeight: "700",
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
              initialDelay={500}
              showCursor={true}
              cursorCharacter="|"
              textColors={["#c4a3ec"]}
              loop={true}
              style={{
                fontFamily: "var(--font-space-mono), 'Courier New', monospace",
                fontWeight: "700",
                fontStyle: "italic",
              }}
            />
          </span>
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
                    <Highlighter action="underline" color="#ffffff">
                      <span style={{ fontWeight: "bold", color: "#c4a3ec" }}>
                        @UWaterloo
                      </span>
                    </Highlighter>
                  )}
                  {!hover && "@UWaterloo"}
                </a>
              </span>
            </li>
            <li
              onMouseEnter={() => {
                setImposterHover(true);
              }}
              onMouseLeave={() => {
                setImposterHover(false);
              }}
              className="group  items-start gap-4 pl-8 relative hover:translate-x-3 hover:font-bold transition-transform duration-200"
            >
              <div className="absolute left-2 top-1/2 w-[8px] h-[8px] bg-white rotate-45 transform -translate-y-1/2 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110"></div>
              Fighting{" "}
              <span
                className="font-medium hover:text-[#c4a3ec] transition-colors duration-200 cursor-pointer"
                style={{
                  textDecoration: imposterHover ? "underline" : "none",
                  fontWeight: imposterHover ? "bold" : "normal",
                }}
              >
                {!imposterHover && "imposter syndrome"}
                {imposterHover && (
                  <Highlighter action="underline" color="#ffffff">
                    <span style={{ fontWeight: "bold", color: "#c4a3ec" }}>
                      imposter syndrome
                    </span>
                  </Highlighter>
                )}
              </span>{" "}
              by building things
            </li>
            <li
              className="group  items-start gap-4 pl-8 relative hover:translate-x-3 hover:font-bold transition-transform duration-200"
              onMouseEnter={() => {
                setProgrammingHover(true);
              }}
              onMouseLeave={() => {
                setProgrammingHover(false);
              }}
            >
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

            <li
              className="group  items-start gap-4 pl-8 relative hover:translate-x-3 transition-transform hover:font-bold duration-200"
              onMouseEnter={() => {
                setLivewellHover(true);
              }}
              onMouseLeave={() => {
                setLivewellHover(false);
              }}
            >
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
                  <Highlighter action="underline" color="#ffffff">
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
          style={{ border: "1px solid #6b7280" }}
          onMouseEnter={() => setProjectsHover(true)}
          onMouseLeave={() => setProjectsHover(false)}
        >
          <Link href="/projects" className="!font-bold">
            {projectsHover ? (
              <Highlighter
                action="underline"
                iterations={1}
                padding={0}
                animationDuration={50}
                color="#ffffff"
              >
                <span style={{ fontWeight: "bold", color: "#c4a3ec" }}>
                  View My Projects
                </span>
              </Highlighter>
            ) : (
              "View My Projects"
            )}
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
            style={{ border: "1px solid #6b7280" }}
            onMouseEnter={() => setEmailHover(true)}
            onMouseLeave={() => setEmailHover(false)}
          >
            <a
              href="mailto:b86lin@uwaterloo.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              {emailHover ? (
                <Highlighter
                  action="underline"
                  iterations={1}
                  padding={0}
                  animationDuration={200}
                  color="#ffffff"
                >
                  <span style={{ fontWeight: "bold", color: "#c4a3ec" }}>
                    b86lin@uwaterloo.ca
                  </span>
                </Highlighter>
              ) : (
                "b86lin@uwaterloo.ca"
              )}{" "}
              <WaterlooImage style={{ color: "#c4a3ec" }} />
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
          style={{ border: "1px solid #6b7280" }}
          onMouseEnter={() => setResumeHover(true)}
          onMouseLeave={() => setResumeHover(false)}
        >
          <a
            // download= {true}
            href={`./Bryan_Lin_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPaperclip style={{ color: "#c4a3ec" }} />
            {resumeHover ? (
              <Highlighter
                action="underline"
                color="#ffffff"
                animationDuration={50}
                padding={0}
                iterations={1}
              >
                <span style={{ fontWeight: "bold", color: "#c4a3ec" }}>
                  Resume
                </span>
              </Highlighter>
            ) : (
              "Resume"
            )}
          </a>
        </Button>
        <Button
          className="cursor-target w-full sm:w-auto bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-6 py-3 text-base"
          asChild
          style={{ border: "1px solid #6b7280" }}
          onMouseEnter={() => setGithubHover(true)}
          onMouseLeave={() => setGithubHover(false)}
        >
          <Link
            href="https://github.com/blynkosaur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={{ color: "#c4a3ec" }} />
            {githubHover ? (
              <Highlighter
                action="underline"
                color="#ffffff"
                animationDuration={50}
                padding={0}
                iterations={1}
              >
                <span style={{ fontWeight: "bold", color: "#c4a3ec" }}>
                  GitHub
                </span>
              </Highlighter>
            ) : (
              "GitHub"
            )}
          </Link>
        </Button>
        <Button
          className="cursor-target w-full sm:w-auto bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-6 py-3 text-base"
          asChild
          style={{ border: "1px solid #6b7280" }}
          onMouseEnter={() => setLinkedinHover(true)}
          onMouseLeave={() => setLinkedinHover(false)}
        >
          <Link
            href="https://www.linkedin.com/in/bryan-lin-176785300/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin style={{ color: "#c4a3ec" }} />
            {linkedinHover ? (
              <Highlighter
                action="underline"
                color="#ffffff"
                animationDuration={50}
                padding={0}
                iterations={1}
              >
                <span style={{ fontWeight: "bold", color: "#c4a3ec" }}>
                  LinkedIn
                </span>
              </Highlighter>
            ) : (
              "LinkedIn"
            )}
          </Link>
        </Button>
        <Button
          className="cursor-target w-full sm:w-auto bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-6 py-3 text-base"
          asChild
          style={{ border: "1px solid #6b7280" }}
          onMouseEnter={() => setInstagramHover(true)}
          onMouseLeave={() => setInstagramHover(false)}
        >
          <Link
            href="https://www.instagram.com/bry4n.lin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={{ color: "#c4a3ec" }} />
            {instagramHover ? (
              <Highlighter
                action="underline"
                animationDuration={200}
                padding={0}
                iterations={1}
                color="#ffffff"
              >
                <span style={{ fontWeight: "bold", color: "#c4a3ec" }}>
                  Instagram
                </span>
              </Highlighter>
            ) : (
              "Instagram"
            )}
          </Link>
        </Button>
      </div>
      {/* Bottom spacing for mobile scrolling */}
      <div className="h-20"></div>
      <FigureOne />
      <FigureTwo />
      <FigureThree />
      <FigureFour />
      <Door />
    </div>
  );
}
