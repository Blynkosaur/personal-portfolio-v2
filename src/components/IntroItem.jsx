"use client";
import { useState } from "react";

// A single bullet line in the intro list: a rotating diamond marker, an optional
// text prefix, and hover-aware content. Owns its own hover state and exposes it
// to children via a render prop so the highlighted link can react to it.
export default function IntroItem({ prefix, className, children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute left-2 top-1/2 w-[5px] h-[5px] bg-[#CCD6F5] rotate-45 transform -translate-y-1/2 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110"></div>
      {prefix}
      {children(hovered)}
    </li>
  );
}
