"use client";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import projects from "./projects.json";
import { Highlighter } from "@/components/ui/highlighter";
import Link from "next/link";
import styles from "../Page.module.css";
import TargetCursor from "@/components/TargetCursor";
import TextType from "@/components/TextType";
import DotGrid from "@/components/DotGrid";
import { useState } from "react";
import { FaHome, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
  const [emailHover, setEmailHover] = useState(false);
  const [githubHover, setGithubHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);

  return (
    <div
      className={`${styles.page} relative flex flex-col justify-start items-center text-white p-10 scrollbar-hide overflow-x-hidden`}
      style={{
        minHeight: "100vh",
        backgroundColor: "#1e1e2e",
        color: "#E8F4F8",
        fontFamily: "var(--font-space-mono), 'Courier New', monospace",
        fontWeight: "700",
        paddingBottom: "80px",
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

      {/* Home Button */}
      {/* Header */}
      <div className="w-full max-w-xl mt-12 mx-auto text-left">
        <Button
          asChild
          variant="outline"
          className="cursor-target absolute top-6 left-4 md:left-16 lg:left-24 z-10 bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-4 py-2 text-sm max-w-fit"
          style={{ border: "1px solid #6b7280" }}
          onMouseEnter={() => setHomeHover(true)}
          onMouseLeave={() => setHomeHover(false)}
        >
          <Link href="/">
            <FaHome className="mr-2" style={{ color: "#c4a3ec" }} />
            {homeHover ? (
              <Highlighter
                action="underline"
                color="#ffffff"
                animationDuration={50}
                padding={0}
                iterations={1}
              >
                <span style={{ fontWeight: "bold", color: "#c4a3ec" }}>
                  Home
                </span>
              </Highlighter>
            ) : (
              "Home"
            )}
          </Link>
        </Button>

        <h1
          className="text-4xl font-bold mb-6 text-left cursor-pointer  "
          style={{
            fontWeight: "700",
            color: "#c4a3ec",
            fontFamily: "var(--font-space-mono), 'Courier New', monospace",
          }}
        >
          My Projects
        </h1>

        <p className="group   gap-4  relative  hover:font-bold transition-transform duration-200 text-gray-300 text-lg mb-2 pl-2 leading-7 text-left">
          <span
            className="group-hover:font-bold  font-bold italic"
            style={{
              fontFamily: "var(--font-space-mono), 'Courier New', monospace",
              marginBottom: "4px",
            }}
          >
            {" "}
            <TextType
              text={["Here is what I've been spending my time on."]}
              typingSpeed={50}
              pauseDuration={2000}
              initialDelay={500}
              showCursor={true}
              cursorCharacter="|"
              textColors={["#ffffff"]}
              loop={false}
              style={{
                fontFamily: "var(--font-space-mono), 'Courier New', monospace",
                fontWeight: "400",
                fontStyle: "italic",
                marginBottom: "4px",
              }}
            />
          </span>
        </p>
      </div>
      {/* Projects Grid */}
      <div className="w-full max-w-xl grid grid-cols-1  gap-6 mx-auto">
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
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-xl mt-16 text-left">
        <h2
          className="text-2xl font-bold mb-6"
          style={{
            fontWeight: "700",
            color: "#c4a3ec",
            fontFamily: "var(--font-space-mono), 'Courier New', monospace",
          }}
        >
          Let&apos;s Connect
        </h2>
        <p className="text-gray-300 mb-4">
          Interested in collaborating or have questions about any other
          projects?
        </p>
        <div className="flex items-center gap-2 mb-6 max-w-xl w-full justify-center">
          <div className="flex-1 h-px bg-gray-600"></div>
        </div>
        <div className="flex gap-4 justify-between flex-col [@media(min-width:580px)]:flex-row [@media(min-width:580px)]:justify-between">
          <Button
            className="cursor-target w-full [@media(min-width:580px)]:w-auto bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-6 py-3 text-base"
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
              <FaEnvelope className="mr-2" style={{ color: "#c4a3ec" }} />
              {emailHover ? (
                <Highlighter
                  action="underline"
                  color="#ffffff"
                  animationDuration={50}
                  padding={0}
                  iterations={1}
                >
                  <span style={{ fontWeight: "bold", color: "#c4a3ec" }}>
                    Email
                  </span>
                </Highlighter>
              ) : (
                "Email"
              )}
            </a>
          </Button>
          <Button
            className="cursor-target w-full [@media(min-width:580px)]:w-auto bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-6 py-3 text-base"
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
              <FaGithub className="mr-2" style={{ color: "#c4a3ec" }} />
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
            className="cursor-target w-full [@media(min-width:580px)]:w-auto bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-6 py-3 text-base"
            asChild
            style={{ border: "1px solid #6b7280" }}
            onMouseEnter={() => setLinkedinHover(true)}
            onMouseLeave={() => setLinkedinHover(false)}
          >
            <Link
              href="https://www.linkedin.com/in/bry4n-lin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="mr-2" style={{ color: "#c4a3ec" }} />
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
        </div>
      </div>
    </div>
  );
}
