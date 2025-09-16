"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "../Page.module.css";
import TargetCursor from "@/components/TargetCursor";
import { FaHome, FaGithub, FaLinkedin, FaInstagram, FaPaperclip } from "react-icons/fa";

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
  return (
    <div 
      className={`${styles.page} flex flex-col justify-start items-start text-white p-10`}
      style={{ 
        minHeight: '100vh',
        backgroundColor: "#1e1e2e",
        color: "#E8F4F8",
        fontFamily: "'Roboto Mono', monospace",
        paddingBottom: "40px",
        zIndex: 2,
      }}
    >
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      
      {/* Home Button */}
      <Button
        asChild
        variant="outline"
        className="cursor-target absolute top-6 left-6 bg-slate-800/30 border-slate-500 text-slate-100 hover:bg-slate-700/50 hover:border-slate-400 transition-all duration-200 backdrop-blur-sm"
      >
        <Link href="/">
          <FaHome className="mr-2" style={{ color: "#c4a3ec" }} />
          Home
        </Link>
      </Button>

      {/* Header */}
      <div className="w-full max-w-4xl mt-12 mx-1">
        <h1
          className="text-4xl font-bold mb-6 text-left"
          style={{ fontWeight: "300", color: "#c4a3ec" }}
        >
          My Projects
        </h1>
        
        <p className="text-gray-300 text-lg mb-12 leading-7">
        Here is what I've been spending my time on.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project 1 */}
        <div className="cursor-target p-6 bg-slate-800/20 border border-slate-500/30 rounded-lg hover:bg-slate-700/30 hover:border-slate-400/50 transition-all duration-200 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-3" style={{ color: "#c4a3ec" }}>Interpreted Programming Language</h3>
          <p className="text-gray-300 text-sm mb-4">
            Building a custom interpreted programming language from scratch. Features include 
            lexical analysis, parsing, and execution engine with support for variables, 
            functions, and control structures.
          </p>
          <div className="flex gap-2 mb-4">
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">C</span>
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">Lexer</span>
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">Parser</span>
          </div>
          <div className="flex gap-2">
            <Button className="cursor-target text-xs bg-slate-700/50 border-slate-500 text-slate-100 hover:bg-slate-600/50 hover:border-slate-400 transition-all duration-200" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub className="mr-1" />
                Code
              </a>
            </Button>
            <Button className="cursor-target text-xs bg-slate-700/50 border-slate-500 text-slate-100 hover:bg-slate-600/50 hover:border-slate-400 transition-all duration-200" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </Button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="cursor-target p-6 bg-slate-800/20 border border-slate-500/30 rounded-lg hover:bg-slate-700/30 hover:border-slate-400/50 transition-all duration-200 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-3" style={{ color: "#c4a3ec" }}>Operating System Kernel</h3>
          <p className="text-gray-300 text-sm mb-4">
            Developing a minimal operating system kernel with process management, 
            memory allocation, and basic system calls. Learning low-level systems 
            programming concepts.
          </p>
          <div className="flex gap-2 mb-4">
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">C</span>
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">Assembly</span>
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">Kernel</span>
          </div>
          <div className="flex gap-2">
            <Button className="cursor-target text-xs bg-slate-700/50 border-slate-500 text-slate-100 hover:bg-slate-600/50 hover:border-slate-400 transition-all duration-200" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub className="mr-1" />
                Code
              </a>
            </Button>
            <Button className="cursor-target text-xs bg-slate-700/50 border-slate-500 text-slate-100 hover:bg-slate-600/50 hover:border-slate-400 transition-all duration-200" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Docs
              </a>
            </Button>
          </div>
        </div>

        {/* Project 3 */}
        <div className="cursor-target p-6 bg-slate-800/20 border border-slate-500/30 rounded-lg hover:bg-slate-700/30 hover:border-slate-400/50 transition-all duration-200 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-3" style={{ color: "#c4a3ec" }}>Web Portfolio</h3>
          <p className="text-gray-300 text-sm mb-4">
            This responsive portfolio website built with Next.js, featuring custom 
            animations, interactive elements, and a modern design system.
          </p>
          <div className="flex gap-2 mb-4">
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">Next.js</span>
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">React</span>
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">Tailwind</span>
          </div>
          <div className="flex gap-2">
            <Button className="cursor-target text-xs bg-slate-700/50 border-slate-500 text-slate-100 hover:bg-slate-600/50 hover:border-slate-400 transition-all duration-200" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub className="mr-1" />
                Code
              </a>
            </Button>
            <Button className="cursor-target text-xs bg-slate-700/50 border-slate-500 text-slate-100 hover:bg-slate-600/50 hover:border-slate-400 transition-all duration-200" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Live
              </a>
            </Button>
          </div>
        </div>

        {/* Project 4 */}
        <div className="cursor-target p-6 bg-slate-800/20 border border-slate-500/30 rounded-lg hover:bg-slate-700/30 hover:border-slate-400/50 transition-all duration-200 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-3" style={{ color: "#c4a3ec" }}>Algorithm Visualizer</h3>
          <p className="text-gray-300 text-sm mb-4">
            Interactive web application for visualizing sorting and pathfinding algorithms. 
            Built with modern web technologies and featuring real-time animations.
          </p>
          <div className="flex gap-2 mb-4">
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">JavaScript</span>
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">Canvas</span>
            <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">Algorithms</span>
          </div>
          <div className="flex gap-2">
            <Button className="cursor-target text-xs bg-slate-700/50 border-slate-500 text-slate-100 hover:bg-slate-600/50 hover:border-slate-400 transition-all duration-200" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub className="mr-1" />
                Code
              </a>
            </Button>
            <Button className="cursor-target text-xs bg-slate-700/50 border-slate-500 text-slate-100 hover:bg-slate-600/50 hover:border-slate-400 transition-all duration-200" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-4xl mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6" style={{ fontWeight: "300", color: "#c4a3ec" }}>
          Let's Connect
        </h2>
        <p className="text-gray-300 mb-8">
          Interested in collaborating or have questions about my projects?
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button className="cursor-target bg-slate-800/30 border-slate-500 text-slate-100 hover:bg-slate-700/50 hover:border-slate-400 transition-all duration-200 backdrop-blur-sm" asChild>
            <a href="mailto:b86lin@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
              <FaPaperclip className="mr-2" />
              Resume
            </a>
          </Button>
          <Button className="cursor-target bg-slate-800/30 border-slate-500 text-slate-100 hover:bg-slate-700/50 hover:border-slate-400 transition-all duration-200 backdrop-blur-sm" asChild>
            <Link href="https://github.com/blynkosaur" target="_blank" rel="noopener noreferrer">
              <FaGithub className="mr-2" />
              GitHub
            </Link>
          </Button>
          <Button className="cursor-target bg-slate-800/30 border-slate-500 text-slate-100 hover:bg-slate-700/50 hover:border-slate-400 transition-all duration-200 backdrop-blur-sm" asChild>
            <Link href="https://www.linkedin.com/in/bryan-lin-176785300/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="mr-2" />
              LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
