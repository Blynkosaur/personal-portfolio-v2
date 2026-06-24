"use client";
import { Highlighter } from "@/components/ui/highlighter";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "./Page.module.css";
import TextType from "@/components/TextType";
import LocationBadge from "@/components/LocationBadge";
import FooterBar from "@/components/FooterBar";
import IntroItem from "@/components/IntroItem";
import BrandLink from "@/components/BrandLink";
import HighlightLabel from "@/components/HighlightLabel";
import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { pageContainerAnimation, pageItemAnimation } from "@/lib/animations";
import { SOFT_BUTTON_CLASS, SOFT_BUTTON_BORDER } from "@/lib/ui";
import uwaterlooLogo from "@/assets/UWaterloo.png";
import yolandoLogo from "@/assets/yolando_logo.jpeg";
import himsHersLogo from "@/assets/hims__hers_logo.jpeg";

export default function Home() {
  const [projectsHover, setProjectsHover] = useState(false);
  const [emailHover, setEmailHover] = useState(false);
  return (
    <motion.main
      className={`${styles.page} relative overflow-y-hidden flex flex-col justify-center items-center text-[#CCD6F5] px-2 md:px-10 pb-10 pt-0 scrollbar-hide overflow-x-hidden`}
      initial="hidden"
      animate="visible"
      variants={pageContainerAnimation}
      style={{
        minHeight: "100vh",
        backgroundColor: "transparent",
        color: "#E8F4F8",
        fontFamily: "var(--font-inconsolata), 'Courier New', monospace",
        paddingBottom: "40px",
        zIndex: 2,
      }}
    >
      <motion.div
        variants={pageItemAnimation}
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
      <motion.div
        variants={pageItemAnimation}
        className="w-full  z-999 max-w-xl mt-4 mx-auto px-4"
      >
        <div className="mt-16 mb-6 flex items-end justify-between gap-4">
          <h1
            className="font-bold text-left text-2xl md:text-4xl"
            style={{ fontWeight: "700" }}
          >
            <span>
              <TextType
                text={["👋Hi! I'm"]}
                typingSpeed={75}
                pauseDuration={2000}
                initialDelay={0}
                showCursor={false}
                textColors={["#CCD6F5"]}
                loop={false}
                style={{
                  fontFamily: "var(--font-gowun-batang), 'Georgia', serif",
                  fontWeight: "700",
                  fontStyle: "normal",
                  opacity: 1,
                }}
              />{" "}
              <TextType
                text={["Bryan"]}
                typingSpeed={75}
                pauseDuration={1500}
                initialDelay={750}
                showCursor={true}
                cursorCharacter="|"
                textColors={["#c4a3ec"]}
                loop={false}
                style={{
                  fontFamily: "var(--font-gowun-batang), 'Georgia', serif",
                  fontWeight: "700",
                  fontStyle: "normal",
                }}
              />
            </span>
          </h1>
          <LocationBadge />
        </div>

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
            <IntroItem
              prefix="SWE"
              className="group flex items-start gap-2 pl-8 relative hover:font-bold hover:translate-x-3 transition-transform duration-200"
            >
              {(hovered) => (
                <BrandLink
                  hovered={hovered}
                  href="https://uwaterloo.ca"
                  src={uwaterlooLogo}
                  alt="UWaterloo Logo"
                  label="UWaterloo"
                  imageWidth={20}
                  imageHeight={20}
                  imageClassName="object-contain relative top-[1px]"
                  gap="4px"
                  anchorClassName="font-medium hover:font-bold hover:text-[#c4a3ec] transition-colors duration-200 inline-flex items-center"
                  anchorStyle={{
                    fontWeight: hovered ? "bold" : "normal",
                    color: hovered ? "#c4a3ec" : "inherit",
                    textDecoration: "none",
                  }}
                />
              )}
            </IntroItem>

            <IntroItem
              prefix="Currently working on "
              className="group  items-start gap-4 pl-8 relative hover:translate-x-3 hover:font-bold transition-transform duration-200"
            >
              {(hovered) => (
                <Link href={"/projects"}>
                  <span
                    className="font-medium italic hover:text-[#c4a3ec] transition-colors duration-200 "
                    style={{
                      textDecoration: hovered ? "underline" : "none",
                      fontWeight: hovered ? "bold" : "normal",
                    }}
                  >
                    {!hovered && (
                      <span className="font-bold">something...</span>
                    )}
                    {hovered && (
                      <Highlighter action="underline" color="#CCD6F5">
                        <span
                          className="italic"
                          style={{ fontWeight: "bold", color: "#c4a3ec" }}
                        >
                          something...
                        </span>
                      </Highlighter>
                    )}
                  </span>{" "}
                </Link>
              )}
            </IntroItem>

            <IntroItem
              prefix={<>Engineering @{"  "}</>}
              className="group  flex flex-row items-start gap-2 pl-8 relative hover:translate-x-3 transition-transform hover:font-bold duration-200"
            >
              {(hovered) => (
                <BrandLink
                  hovered={hovered}
                  href="https://yolando.com"
                  src={yolandoLogo}
                  alt="Yolando Logo"
                  label="Yolando"
                />
              )}
            </IntroItem>

            <IntroItem
              prefix={<>Prev. @{"  "}</>}
              className="group  flex flex-row items-start gap-2 pl-8 relative hover:translate-x-3 transition-transform hover:font-bold duration-200"
            >
              {(hovered) => (
                <BrandLink
                  hovered={hovered}
                  href="https://joinlivewell.ca"
                  src={himsHersLogo}
                  alt="Livewell Logo"
                  label="Hims & Hers"
                />
              )}
            </IntroItem>
          </ul>
        </div>
      </motion.div>

      {/* Projects Button */}
      <motion.div
        variants={pageItemAnimation}
        className="w-full max-w-xl mt-2 mb-16 mx-auto px-4"
      >
        <Button
          className={`${SOFT_BUTTON_CLASS} w-full px-10 py-6 text-sm md:text-lg font-medium`}
          asChild
          style={SOFT_BUTTON_BORDER}
          onMouseEnter={() => setProjectsHover(true)}
          onMouseLeave={() => setProjectsHover(false)}
        >
          <Link href="/projects" className="!font-bold">
            <HighlightLabel hovered={projectsHover} animationDuration={50}>
              View My Projects
            </HighlightLabel>
          </Link>
        </Button>
      </motion.div>
      <motion.div
        variants={pageItemAnimation}
        className="text-sm md:text-lg mb-4 w-full max-w-xl text-left flex flex-col sm:flex-row gap-2 sm:gap-2.5 items-center mx-auto px-4"
        style={{ color: "#CCD6F5" }}
      >
        <div className="flex flex-col items-center justify-center">
          ↳ You can contact me at
        </div>
        <div className="flex flex-col justify-center items-center">
          <Button
            className={`${SOFT_BUTTON_CLASS} px-6 py-3 text-sm md:text-base`}
            asChild
            style={SOFT_BUTTON_BORDER}
            onMouseEnter={() => setEmailHover(true)}
            onMouseLeave={() => setEmailHover(false)}
          >
            <a
              href="mailto:b86lin@uwaterloo.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HighlightLabel hovered={emailHover} animationDuration={200}>
                b86lin@uwaterloo.ca
              </HighlightLabel>{" "}
              <Image
                src={uwaterlooLogo}
                alt="UWaterloo Logo"
                width={20}
                height={20}
                className="object-contain relative top-[1px]"
              />
            </a>
          </Button>
        </div>
      </motion.div>
      {/* Bottom spacing for footer */}
      <motion.div
        variants={pageItemAnimation}
        className="w-full max-w-xl mx-auto px-4"
      >
        <FooterBar />
      </motion.div>
      <motion.div variants={pageItemAnimation} className="h-8"></motion.div>
    </motion.main>
  );
}
