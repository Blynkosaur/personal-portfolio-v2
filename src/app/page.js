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
import TargetCursor from "@/components/TargetCursor";
import FooterBar from "@/components/FooterBar";
import { useState } from "react";
import React from "react";
import Image from "next/image";
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
  const [hover, setHover] = useState(false);
  const [livewellHover, setLivewellHover] = useState(false);
  const [programmingHover, setProgrammingHover] = useState(false);
  const [imposterHover, setImposterHover] = useState(false);
  const [homeHover, setHomeHover] = useState(false);
  const [projectsHover, setProjectsHover] = useState(false);
  const [emailHover, setEmailHover] = useState(false);
  return (
    <div
      className={`${styles.page} relative overflow-y-hidden flex flex-col justify-center items-center text-[#CCD6F5] px-2 md:px-10 pb-10 pt-0 scrollbar-hide overflow-x-hidden`}
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
        activeColor="#CCD6F5"
        style={{ opacity: 0.6, zIndex: -999999 }}
      />
      <div className="hidden xl:block">
        <TargetCursor spinDuration={5} hideDefaultCursor={true} />
      </div>
      <Button
        asChild
        variant="outline"
        className="cursor-target absolute top-6 left-4 md:left-16 lg:left-24 z-10 bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-4 py-2 text-sm "
        style={{ border: "1px solid #6b7280" }}
        onMouseEnter={() => setHomeHover(true)}
        onMouseLeave={() => setHomeHover(false)}
      >
        <Link href="/" style={{ color: "#CCD6F5" }}>
          <FaHome className="mr-2" style={{ color: "#c4a3ec" }} />
          {homeHover ? (
            <Highlighter
              action="underline"
              iterations={1}
              padding={0}
              animationDuration={50}
              color="#CCD6F5"
            >
              <span style={{ fontWeight: "bold", color: "#CCD6F5" }}>Home</span>
            </Highlighter>
          ) : (
            "Home"
          )}
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
      <div className="w-full  z-999 max-w-xl mt-4 mx-auto px-4">
        <h1
          className=" font-bold mt-16 mb-10 text-left text-2xl md:text-[1.8rem]"
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
              textColors={["#CCD6F5"]}
              loop={false}
              style={{
                fontFamily: "var(--font-space-mono), 'Courier New', monospace",
                fontWeight: "700",
                fontStyle: "italic",
                opacity: 1,
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
              textColors={["#CCD6F5"]}
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
          className="text-[#CCD6F5] text-sm md:text-lg mb-12 leading-7 md:leading-9"
          style={{
            fontWeight: "300",
            alignContent: "left",
            textAlign: "left",
            width: "100%",
          }}
        >
          <ul className="space-y-4">
            <li
              className="group flex items-start gap-2 pl-8 relative hover:font-bold hover:translate-x-3 transition-transform duration-200"
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
              <div className="absolute left-2 top-[0.5rem] md:top-[0.875rem] w-[8px] h-[8px] bg-white rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110"></div>
              SWE{""}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:font-bold hover:text-[#c4a3ec] transition-colors duration-200 inline-flex items-center"
                style={{
                  fontWeight: hover ? "bold" : "normal",
                  color: hover ? "#c4a3ec" : "inherit",
                  textDecoration: "none",
                }}
              >
                {hover && (
                  <Highlighter action="underline" color="#CCD6F5">
                    <span
                      className="italic"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "4px",
                        fontWeight: "bold",
                        color: "#c4a3ec",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={`/UWaterloo.png`}
                        alt="UWaterloo Logo"
                        width={20}
                        height={20}
                        className="object-contain relative top-[1px]"
                      />
                      UWaterloo
                    </span>
                  </Highlighter>
                )}
                {!hover && (
                  <span
                    className="italic"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "4px",
                      fontWeight: "bold",
                      color: "#CCD6F5",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={`/UWaterloo.png`}
                      alt="UWaterloo Logo"
                      width={20}
                      height={20}
                      className="object-contain relative top-[1px]"
                    />
                    UWaterloo
                  </span>
                )}
              </a>
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
              <div className="absolute left-2 top-[0.5rem] md:top-1/2 w-[8px] h-[8px] bg-white rotate-45 transform md:-translate-y-1/2 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110"></div>
              Building with{" "}
              <span
                className="font-medium hover:text-[#c4a3ec] transition-colors duration-200 cursor-none"
                style={{
                  textDecoration: imposterHover ? "underline" : "none",
                  fontWeight: imposterHover ? "bold" : "normal",
                }}
              >
                {!imposterHover && "imposter syndrome"}
                {imposterHover && (
                  <Highlighter action="underline" color="#CCD6F5">
                    <span style={{ fontWeight: "bold", color: "#c4a3ec" }}>
                      imposter syndrome
                    </span>
                  </Highlighter>
                )}
              </span>
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
              <div className="absolute left-2 top-[0.5rem] md:top-1/2 w-[8px] h-[8px] bg-white rotate-45 transform md:-translate-y-1/2 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110"></div>
              Currently working on{" "}
              <Link href={"/projects"}>
                <span
                  className="font-medium italic hover:text-[#c4a3ec] transition-colors duration-200 cursor-none"
                  style={{
                    textDecoration: programmingHover ? "underline" : "none",
                    fontWeight: programmingHover ? "bold" : "normal",
                  }}
                >
                  {!programmingHover && "Tailored"}
                  {programmingHover && (
                    <Highlighter action="underline" color="#CCD6F5">
                      <span
                        className="italic"
                        style={{ fontWeight: "bold", color: "#c4a3ec" }}
                      >
                        Tailored
                      </span>
                    </Highlighter>
                  )}
                </span>{" "}
              </Link>
            </li>

            <li
              className="group cursor-none flex flex-row items-start gap-2 pl-8 relative hover:translate-x-3 transition-transform hover:font-bold duration-200"
              onMouseEnter={() => {
                setLivewellHover(true);
              }}
              onMouseLeave={() => {
                setLivewellHover(false);
              }}
            >
              <div className="absolute left-2 top-[0.5rem] md:top-[0.875rem] w-[8px] h-[8px] bg-white rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110"></div>
              Prev.{"  "}
              <a
                href="https://joinlivewell.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-none hover:font-bold  hover:text-[#c4a3ec] transition-colors duration-200 inline-flex items-center"
                style={{ minHeight: "1.5rem" }}
              >
                {!livewellHover && (
                  <span
                    className="italic"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "6px",
                      fontWeight: "bold",
                      color: "#CCD6F5",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={`/hims__hers_logo.jpeg`}
                      alt="Livewell Logo"
                      width={16}
                      height={16}
                      className="object-contain rounded-[2px] relative top-[1px]"
                    />
                    Hims & Hers
                  </span>
                )}
                {livewellHover && (
                  <Highlighter action="underline" color="#CCD6F5">
                    <span
                      className="italic"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "6px",
                        fontWeight: "bold",
                        color: "#c4a3ec",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={`/hims__hers_logo.jpeg`}
                        alt="Livewell Logo"
                        width={16}
                        height={16}
                        className="object-contain rounded-[2px] relative top-[1px]"
                      />
                      Hims & Hers
                    </span>
                  </Highlighter>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Projects Button */}
      <div className="w-full max-w-xl mt-2 mb-16 mx-auto px-4">
        <Button
          className="cursor-target w-full bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-10 py-6 text-sm md:text-lg font-medium"
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
                color="#CCD6F5"
              >
                <span style={{ fontWeight: "bold", color: "#c4a3ec" }}>
                  View My Projects
                </span>
              </Highlighter>
            ) : (
              <span style={{ color: "#CCD6F5" }}>View My Projects</span>
            )}
          </Link>
        </Button>
      </div>
      <div className="text-sm md:text-lg mb-4 w-full max-w-xl text-left flex flex-col sm:flex-row gap-2 sm:gap-2.5 items-center mx-auto px-4" style={{ color: "#CCD6F5" }}>
        <div className="flex flex-col items-center justify-center">
          ↳ You can contact me at
        </div>
        <div className="flex flex-col justify-center items-center">
          <Button
            className="cursor-target bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-6 py-3 text-sm md:text-base"
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
                  color="#CCD6F5"
                >
                  <span style={{ fontWeight: "bold", color: "#c4a3ec" }}>
                    b86lin@uwaterloo.ca
                  </span>
                </Highlighter>
              ) : (
                <span style={{ color: "#CCD6F5" }}>b86lin@uwaterloo.ca</span>
              )}{" "}
              <Image
                src="/UWaterloo.png"
                alt="UWaterloo Logo"
                width={20}
                height={20}
                className="object-contain relative top-[1px]"
              />
            </a>
          </Button>
        </div>
      </div>
      {/* Bottom spacing for footer */}
      <div className="w-full max-w-xl mx-auto px-4">
        <FooterBar />
      </div>
      <div className="h-8"></div>
    </div>
  );
}
