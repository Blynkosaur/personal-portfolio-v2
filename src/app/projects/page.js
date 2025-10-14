"use client";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import Link from "next/link";
import styles from "../Page.module.css";
import TargetCursor from "@/components/TargetCursor";
import TextType from "@/components/TextType";
import DotGrid from "@/components/DotGrid";
import { useState } from "react";
import {
  FaHome,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperclip,
  FaEnvelope,
} from "react-icons/fa";

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
        dotSize={4}
        gap={20}
        baseColor="#c4a3ec"
        activeColor="#ffffff"
        style={{ opacity: 0.18 }}
      />
      <div className="hidden md:block">
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      </div>

      {/* Home Button */}
      {/* Header */}
      <div className="w-full max-w-xl mt-12 mx-auto text-left">
        <Button
          asChild
          variant="outline"
          className="cursor-target absolute top-6 left-4 md:left-16 lg:left-24 z-10 bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm px-6 py-3 text-base max-w-fit"
          style={{ border: "1px solid #6b7280" }}
          onMouseEnter={() => setHomeHover(true)}
          onMouseLeave={() => setHomeHover(false)}
        >
          <Link href="/">
            <FaHome className="mr-2" style={{ color: "#c4a3ec" }} />
            {homeHover ? (
              <Highlighter action="underline" color="#ffffff" animationDuration={50} padding={0} iterations={1}>
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
                fontWeight: "700",
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
        <div className="cursor-target p-6 bg-slate-800/20 rounded-lg hover:bg-slate-700/30 hover:scale-105 transition-all duration-200 backdrop-blur-sm" style={{ border: "1px solid #6b7280" }}>
          <h3
            className="text-xl font-semibold mb-3"
            style={{
              color: "#c4a3ec",
              fontFamily: "var(--font-space-mono), 'Courier New', monospace",
              fontWeight: "700",
            }}
          >
            BryteLinker 💻
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Building Bryte Linker, an interpreted programming language featuring
            a custom bytecode virtual machine in C Implementing a full lexer,
            parser, and bytecode compiler to translate high-level code into
            executable bytecode.
            <br />
            <br />
            Still dealing with segfaults...
          </p>
          <div className="flex gap-2 mb-4">
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">C</span>
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">
              Makefile
            </span>
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">
              GCC/GDB
            </span>
          </div>
          <div className="flex gap-2">
            <Button
              className="cursor-target text-xs bg-slate-700/50 border-slate-500 text-slate-100 hover:bg-slate-600/50 hover:border-slate-400 transition-all duration-200"
              asChild
            >
              <a
                href="https://github.com/Blynkosaur/BryteLinker"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-1" style={{ color: "#c4a3ec" }} />
                Code
              </a>
            </Button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="cursor-target p-6 bg-slate-800/20 rounded-lg hover:bg-slate-700/30 hover:scale-105 transition-all duration-200 backdrop-blur-sm" style={{ border: "1px solid #6b7280" }}>
          <h3
            className="text-xl font-semibold mb-3"
            style={{
              color: "#c4a3ec",
              fontFamily: "var(--font-space-mono), 'Courier New', monospace",
              fontWeight: "700",
            }}
          >
            MyNodes 🕸️
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Working with 3 other students to create a full-stack knowledge
            management system that improves knowledge retrieval through
            automated organization. Featuring NLP pipelines for content
            classification using TF-IDF vectorization, embeddings, and KMeans
            clustering.
            <br />
            <br />
            Upload your notes and create a graph of your knowledge!
          </p>
          <div className="flex gap-2 mb-4">
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">
              React
            </span>
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">
              Django
            </span>
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">
              Cytoscape.js
            </span>
          </div>
          <div className="flex gap-2">
            <Button
              className="cursor-target text-xs bg-slate-700/50 border-slate-500 text-slate-100 hover:bg-slate-600/50 hover:border-slate-400 transition-all duration-200"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub className="mr-1" style={{ color: "#c4a3ec" }} />
                Code
              </a>
            </Button>
            <Button
              className="cursor-target text-xs bg-slate-700/50 border-slate-500 text-slate-100 hover:bg-slate-600/50 hover:border-slate-400 transition-all duration-200"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                Docs
              </a>
            </Button>
          </div>
        </div>

        {/* Project 3 */}
        <div className="cursor-target p-6 bg-slate-800/20 rounded-lg hover:bg-slate-700/30 hover:scale-105 transition-all duration-200 backdrop-blur-sm" style={{ border: "1px solid #6b7280" }}>
          <h3
            className="text-xl font-semibold mb-3"
            style={{
              color: "#c4a3ec",
              fontFamily: "var(--font-space-mono), 'Courier New', monospace",
              fontWeight: "700",
            }}
          >
            Tumor Classifier 🧠
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Designed and implemented a neural network from scratch using only
            NumPy to classify breast growths as benign or malignant. Learning
            the calculus and linear algebra behind supervised learning models
            was a great experience.
            <br />
            <br />
            Achieved 95% precision and 90% recall scores.
          </p>
          <div className="flex gap-2 mb-4">
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">
              Python
            </span>
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">
              NumPy
            </span>
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">
              Machine Learning
            </span>
          </div>
          <div className="flex gap-2">
            <Button
              className="cursor-target text-xs bg-slate-700/50 border-slate-500 text-slate-100 hover:bg-slate-600/50 hover:border-slate-400 transition-all duration-200"
              asChild
            >
              <a
                href="https://github.com/Blynkosaur/Tumor-Classification"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-1" style={{ color: "#c4a3ec" }} />
                Code
              </a>
            </Button>
          </div>
        </div>

        {/* Project 4 */}
        <div className="cursor-target p-6 bg-slate-800/20 rounded-lg hover:bg-slate-700/30 hover:scale-105 transition-all duration-200 backdrop-blur-sm" style={{ border: "1px solid #6b7280" }}>
          <h3
            className="text-xl font-semibold mb-3"
            style={{
              color: "#c4a3ec",
              fontFamily: "var(--font-space-mono), 'Courier New', monospace",
              fontWeight: "700",
            }}
          >
            League of Studies 📖
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            My mom told me to stop playing League of Legends 💔, so I made
            League of Studies, a gamified study platform instead. Fight with
            your friends or a boss to study for exams and climb the leaderboard!
            <br />
            <br />
            <b>JACHacks 2025 Winner!</b>
          </p>
          <div className="flex gap-2 mb-4">
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">
              React
            </span>
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">
              Supabase
            </span>
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">
              Gamification
            </span>
          </div>
          <div className="flex gap-2">
            <Button
              className="cursor-target text-xs bg-slate-700/50 border-slate-500 text-slate-100 hover:bg-slate-600/50 hover:border-slate-400 transition-all duration-200"
              asChild
            >
              <a
                href="https://github.com/Blynkosaur/LeagueOfStudies"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-1" style={{ color: "#c4a3ec" }} />
                Code
              </a>
            </Button>
            <Button
              className="cursor-target text-xs bg-slate-700/50 border-slate-500 text-slate-100 hover:bg-slate-600/50 hover:border-slate-400 transition-all duration-200"
              asChild
            >
              <a
                href="https://ihatestudying.study"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </Button>
          </div>
        </div>
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
        <p className="text-gray-300 mb-8">
          Interested in collaborating or have questions about any other projects?
        </p>
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
                <Highlighter action="underline" color="#ffffff" animationDuration={50} padding={0} iterations={1}>
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
                <Highlighter action="underline" color="#ffffff" animationDuration={50} padding={0} iterations={1}>
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
              href="https://www.linkedin.com/in/bryan-lin-176785300/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="mr-2" style={{ color: "#c4a3ec" }} />
              {linkedinHover ? (
                <Highlighter action="underline" color="#ffffff" animationDuration={50} padding={0} iterations={1}>
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
