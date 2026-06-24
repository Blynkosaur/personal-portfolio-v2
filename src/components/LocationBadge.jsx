"use client";
import { useState } from "react";
import { MapPin } from "lucide-react";
import { AnimatePresence } from "motion/react";
import Montreal from "@/components/Montreal";

// "Montreal, QC" pin that reveals the Montreal illustration on hover, and can be
// pinned open with a click. Owns its own hover/pinned state.
export default function LocationBadge() {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);

  return (
    <span
      className="select-none relative cursor-pointer shrink-0 inline-flex items-center gap-1.5 text-sm md:text-base text-[#CCD6F5]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        setPinned((prev) => !prev);
        setHovered(false);
      }}
    >
      <MapPin size={14} className="text-[#c4a3ec]" />
      <span className={hovered ? "font-bold" : "font-normal"}>Montreal, QC</span>
      <AnimatePresence>{(hovered || pinned) && <Montreal />}</AnimatePresence>
    </span>
  );
}
