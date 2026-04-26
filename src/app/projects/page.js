"use client";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import projects from "./projects.json";
import { Highlighter } from "@/components/ui/highlighter";
import Link from "next/link";
import styles from "../Page.module.css";
import TextType from "@/components/TextType";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { ArrowLeft, MapPin } from "lucide-react";
import FooterBar from "@/components/FooterBar";
import { motion } from "motion/react";

const pageContainerAnimation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const pageItemAnimation = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

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

export default function Projects() {
  const [homeHover, setHomeHover] = useState(false);
  const [backHomeHover, setBackHomeHover] = useState(false);

  return (
    <motion.main
      className={`${styles.page} relative flex flex-col justify-start items-center text-[#CCD6F5] px-2 md:px-10 pb-10 pt-0 scrollbar-hide overflow-x-hidden`}
      initial="hidden"
      animate="visible"
      variants={pageContainerAnimation}
      style={{
        minHeight: "100vh",
        backgroundColor: "rgba(21, 21, 32, 0.88)",
        color: "#E8F4F8",
        fontFamily: "var(--font-inconsolata), 'Courier New', monospace",
        fontWeight: "700",
        paddingBottom: "40px",
        zIndex: 2,
      }}
    >
      {/* Home Button */}
      {/* Header */}
      <motion.div
        variants={pageItemAnimation}
        className="w-full max-w-xl mt-16 mx-auto px-4 text-left"
      >
        <div className="mt-4 mb-4 flex items-center justify-between gap-3">
          <h1
            className="text-2xl md:text-4xl font-bold text-left"
            style={{
              fontWeight: "700",
              color: "#c4a3ec",
              fontFamily: "var(--font-gowun-batang), 'Georgia', serif",
            }}
          >
            My Projects
          </h1>
          <Link
            href="/"
            className={`text-sm md:text-base text-[#CCD6F5] whitespace-nowrap inline-flex items-center gap-1.5 transition-transform duration-200 ${
              backHomeHover ? "-translate-x-1" : "translate-x-0"
            }`}
            style={{ fontWeight: "600" }}
            onMouseEnter={() => setBackHomeHover(true)}
            onMouseLeave={() => setBackHomeHover(false)}
          >
            {backHomeHover ? (
              <Highlighter action="underline" color="#CCD6F5" padding={0}>
                <span className="inline-flex items-center gap-1.5" style={{ color: "#c4a3ec", fontWeight: "700" }}>
                  <ArrowLeft size={14} />
                  Back Home
                </span>
              </Highlighter>
            ) : (
              <>
                <ArrowLeft size={14} />
                <span>Back Home</span>
              </>
            )}
          </Link>
        </div>

        <p className="group   gap-4  relative  hover:font-bold transition-transform duration-200 text-[#CCD6F5] text-sm md:text-lg mb-2 leading-7 md:leading-7 text-left">
          <span
            className="group-hover:font-bold  font-bold italic"
            style={{
              fontFamily: "var(--font-inconsolata), 'Courier New', monospace",
              marginBottom: "4px",
            }}
          >
            {" "}
            <TextType
              text={["Here is what I've been working on."]}
              typingSpeed={50}
              pauseDuration={2000}
              initialDelay={500}
              showCursor={true}
              cursorCharacter="|"
              textColors={["#CCD6F5"]}
              loop={false}
              style={{
                fontFamily: "var(--font-inconsolata), 'Courier New', monospace",
                fontWeight: "400",
                fontStyle: "italic",
                marginBottom: "4px",
              }}
            />
          </span>
        </p>
      </motion.div>
      {/* Projects Grid */}
      <motion.div
        variants={pageItemAnimation}
        className="w-full max-w-xl grid grid-cols-1 gap-6 mx-auto px-4"
      >
        {/* Project 1 */}
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            tags={project.tags}
            description={project.description}
            hook={project.hook}
            github={project.github}
            link={project.link}
          />
        ))}
      </motion.div>

      <motion.div
        variants={pageItemAnimation}
        className="w-full max-w-xl mx-auto px-4 mt-8"
      >
        <FooterBar />
      </motion.div>
    </motion.main>
  );
}
