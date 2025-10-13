"use client";
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

export function WaterlooIcon() {
  return (
    <div sytle={{ height: "10px", width: "10px" }}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 300.000000 297.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        {" "}
        <g
          transform="translate(0.000000,297.000000) scale(0.100000,-0.100000)"
          fill="#c4a3ec"
          stroke="none"
        >
          {" "}
          <path d="M413 2804 l-25 -25 6 -247 c18 -689 64 -1014 187 -1347 130 -347 300 -600 540 -800 134 -112 394 -265 450 -265 36 0 263 125 366 202 241 180 381 353 531 653 120 242 199 528 236 855 26 227 55 916 40 954 -18 47 10 46 -1184 46 l-1121 0 -26 -26z m2297 -111 c0 -258 -26 -756 -46 -893 -53 -359 -113 -566 -239 -825 -73 -151 -155 -278 -249 -388 -119 -138 -331 -299 -515 -391 l-92 -47 -104 54 c-341 179 -574 414 -746 755 -197 390 -264 759 -285 1575 l-6 257 1141 0 1141 0 0 -97z" />{" "}
          <path d="M504 2450 c19 -727 83 -1077 262 -1440 95 -192 169 -297 308 -435 127 -127 236 -208 396 -294 l93 -51 86 46 c335 181 543 396 706 729 192 392 249 724 267 1573 l3 122 -1064 3 -1064 2 7 -255z m2072 -27 c-8 -286 -21 -488 -41 -643 -15 -113 -47 -286 -65 -345 -5 -16 -14 -49 -20 -72 l-11 -43 -197 158 c-108 87 -276 220 -372 297 -96 76 -204 161 -238 189 -35 28 -65 51 -67 51 -4 0 -281 -218 -590 -465 -148 -119 -275 -219 -282 -223 -12 -8 -60 174 -88 336 -31 185 -58 585 -65 985 0 9 211 12 1021 12 l1022 0 -7 -237z m-595 -782 c222 -175 414 -328 427 -340 19 -17 21 -25 12 -42 -11 -20 -12 -19 -53 14 -317 258 -782 617 -802 617 -29 0 -70 -31 -693 -529 -117 -94 -156 -120 -163 -110 -12 19 -11 49 0 49 6 0 121 89 258 197 517 411 585 463 598 463 7 0 194 -144 416 -319z m16 -125 l400 -319 -32 -74 c-35 -81 -43 -92 -53 -77 -4 6 -83 71 -177 144 -93 74 -259 205 -367 292 -109 87 -200 158 -203 158 -3 0 -117 -89 -254 -197 -367 -293 -501 -398 -509 -400 -6 -2 -42 74 -69 143 -4 10 91 87 620 506 178 140 213 165 227 155 9 -7 197 -156 417 -331z m-165 -136 c411 -325 442 -350 462 -363 16 -12 17 -17 7 -36 -15 -27 27 -57 -363 253 -172 137 -325 256 -339 264 -15 9 -35 13 -50 9 -14 -4 -95 -62 -180 -130 -172 -137 -422 -336 -485 -385 -36 -27 -43 -30 -54 -17 -6 8 -10 18 -8 23 6 18 723 581 740 581 9 1 131 -89 270 -199z m103 -190 c176 -139 323 -255 328 -259 10 -10 -113 -193 -181 -270 -103 -116 -283 -254 -444 -341 l-77 -41 -102 57 c-219 122 -408 293 -533 482 -58 87 -67 105 -55 116 8 8 142 115 299 238 157 124 310 246 340 271 l55 45 25 -23 c14 -12 169 -136 345 -275z" />{" "}
          <path d="M2349 2571 c-34 -34 -37 -76 -15 -176 13 -54 14 -56 17 -25 1 19 1 45 0 57 -4 49 33 80 58 49 9 -11 7 -38 -10 -117 -21 -100 -21 -171 -3 -245 6 -23 4 -24 -20 -18 -21 5 -27 2 -35 -17 -5 -14 -4 -36 2 -53 l10 -29 14 27 c7 14 20 26 27 26 17 0 36 -51 36 -96 0 -55 -62 -100 -77 -56 -3 9 -17 32 -30 50 -38 51 -64 118 -71 185 l-7 62 -36 3 c-28 2 -44 -3 -68 -24 -24 -20 -35 -24 -44 -15 -19 19 -27 12 -27 -26 0 -32 9 -45 88 -121 l87 -84 -34 -12 c-43 -15 -61 -41 -61 -87 0 -54 20 -69 93 -69 96 0 127 -34 95 -105 -16 -36 -35 -26 -52 28 -3 9 -14 17 -25 17 -26 0 -35 -29 -14 -46 17 -12 17 -13 -3 -14 -20 0 -34 -17 -34 -41 0 -5 11 -9 24 -9 19 0 22 -4 19 -24 -5 -22 -2 -24 23 -21 15 1 33 10 40 20 16 21 44 13 44 -12 1 -26 29 25 30 53 0 12 6 37 14 55 30 75 29 86 -9 109 -58 36 -58 89 1 90 54 0 74 70 49 169 -15 58 -16 74 -6 99 7 17 14 74 14 127 2 78 0 92 -10 78 -7 -9 -13 -20 -13 -25 0 -4 -5 -8 -11 -8 -13 0 -7 20 37 132 37 94 36 121 -8 152 -34 24 -66 19 -99 -13z m86 -21 c11 -12 20 -28 21 -36 3 -20 -24 -30 -39 -15 -6 6 -21 11 -34 11 -28 0 -31 27 -5 46 24 19 36 17 57 -6z m-205 -465 c7 -41 17 -75 21 -75 5 0 9 -5 9 -11 0 -5 17 -36 38 -67 34 -51 38 -63 34 -107 l-4 -50 -58 3 c-46 3 -63 9 -80 27 -22 24 -22 25 -5 52 10 15 29 38 44 49 24 20 25 24 11 50 -7 16 -42 56 -77 90 -60 57 -76 84 -52 84 5 0 26 11 46 25 25 16 40 21 48 15 7 -6 18 -44 25 -85z m68 -478 c2 -10 -3 -17 -12 -17 -10 0 -16 9 -16 21 0 24 23 21 28 -4z" />{" "}
          <path d="M1134 2573 c-8 -13 -17 -14 -49 -7 -32 8 -50 6 -90 -9 -27 -10 -56 -23 -62 -29 -20 -16 -5 -28 21 -17 30 14 66 -4 66 -32 0 -37 -19 -59 -50 -59 -17 0 -30 -4 -30 -10 0 -5 17 -10 38 -10 99 1 165 41 155 94 -3 16 1 34 10 44 8 9 12 25 8 34 -6 16 -7 16 -17 1z m-66 -40 c2 -9 -7 -13 -27 -13 -30 0 -39 9 -24 24 11 10 46 3 51 -11z m30 -37 c3 -41 -20 -65 -43 -46 -8 7 -15 16 -15 20 0 6 49 60 54 60 1 0 3 -15 4 -34z" />{" "}
          <path d="M2115 2565 c-17 -7 -42 -16 -57 -19 -16 -4 -28 -13 -28 -21 0 -12 10 -15 41 -13 34 3 43 -1 49 -18 11 -29 -14 -64 -46 -64 -27 0 -32 -15 -8 -24 53 -20 148 18 169 68 8 18 21 38 29 46 29 23 20 42 -16 35 -20 -4 -47 0 -68 9 -31 12 -40 13 -65 1z m55 -24 c0 -11 -40 -22 -52 -15 -5 3 -6 10 -3 15 8 12 55 12 55 0z m46 -32 c0 -18 -35 -59 -52 -59 -18 0 -27 19 -16 33 6 7 10 16 10 22 1 11 32 25 47 21 6 -2 10 -9 11 -17z" />{" "}
          <path d="M643 2554 c-4 -10 1 -22 10 -29 21 -15 22 -25 3 -25 -8 0 -18 -5 -21 -10 -9 -14 19 -40 43 -40 22 0 52 -30 52 -52 0 -9 9 -18 20 -21 11 -3 24 -17 30 -31 5 -15 24 -32 45 -40 19 -8 35 -20 35 -25 0 -6 13 -11 29 -11 20 0 34 8 46 26 9 14 15 27 13 28 -2 1 -27 13 -56 26 -30 13 -67 39 -82 57 -28 31 -48 92 -36 111 7 12 -23 54 -35 47 -5 -4 -9 -17 -9 -31 0 -30 -17 -23 -30 12 -11 28 -47 33 -57 8z m104 -83 c-2 -26 -3 -27 -24 -14 -35 23 -37 43 -3 43 26 0 29 -3 27 -29z" />{" "}
          <path d="M1430 2539 c-58 -23 -114 -101 -126 -177 -6 -36 3 -64 44 -144 2 -5 -10 -8 -27 -8 -20 0 -34 -7 -41 -19 -15 -29 -13 -31 18 -25 38 8 66 -24 57 -65 -7 -35 -50 -81 -76 -81 -29 0 -75 46 -98 100 -18 42 -25 49 -39 42 -9 -5 -44 -12 -76 -16 -104 -12 -114 -41 -27 -79 33 -14 64 -34 70 -44 8 -15 10 -15 11 -2 0 17 -53 73 -62 64 -2 -3 -12 3 -22 14 -16 17 -14 18 40 24 47 5 60 3 77 -14 11 -10 17 -19 13 -19 -8 0 6 -18 46 -60 l28 -29 -24 -26 c-14 -15 -37 -30 -53 -34 -25 -7 -28 -12 -27 -45 1 -21 -1 -34 -5 -30 -3 5 -15 10 -26 12 -24 4 -95 49 -95 60 0 20 33 51 58 54 34 4 35 22 1 26 -14 2 -37 -6 -52 -18 -56 -44 -23 -124 57 -137 47 -7 48 -34 1 -56 -44 -21 -74 -22 -102 -2 -12 8 -28 12 -37 9 -18 -7 -22 -34 -5 -34 5 0 7 -4 4 -10 -3 -5 -14 -10 -25 -10 -19 0 -34 -25 -24 -41 3 -5 14 -9 25 -9 18 0 19 -1 3 -25 -9 -14 -15 -26 -13 -26 30 -11 57 -3 75 19 19 23 24 24 38 13 13 -11 18 -8 36 21 22 38 55 65 119 97 l43 23 -30 31 c-44 46 -45 62 -2 58 38 -2 62 16 74 56 4 12 13 20 20 17 20 -8 64 13 81 39 27 42 56 163 46 191 -8 19 -6 28 10 42 20 18 25 49 9 59 -11 7 -44 -22 -53 -48 -8 -23 -27 -13 -27 14 0 29 25 84 49 108 27 27 85 27 130 0 41 -25 48 -20 21 14 l-21 26 50 -6 c42 -5 57 -2 95 21 25 15 46 33 46 41 0 8 -6 12 -13 9 -8 -3 -49 7 -93 20 -83 27 -133 31 -174 15z m160 -41 l45 -21 -45 -14 c-25 -7 -76 -16 -115 -19 -38 -4 -79 -12 -91 -19 -19 -12 -21 -12 -16 10 4 22 54 70 92 87 21 10 77 0 130 -24z m-560 -750 c0 -10 -8 -21 -17 -24 -10 -3 -27 -10 -37 -16 -26 -14 -50 15 -34 42 16 25 88 24 88 -2z" />{" "}
          <path d="M1860 2519 c0 -27 -2 -29 -26 -23 -17 4 -29 2 -35 -7 -10 -17 8 -39 32 -39 11 0 19 -4 19 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20 -9 0 -5 -3 -16 -6 -25 -9 -23 45 -21 62 2 12 16 15 15 43 -12 16 -15 27 -35 24 -42 -3 -9 2 -14 15 -14 10 0 30 -9 44 -20 l25 -19 21 29 22 29 -59 35 c-72 44 -80 53 -89 106 -5 31 -13 45 -30 51 -20 7 -22 5 -22 -22z m28 -69 c-1 -16 -5 -30 -9 -30 -11 0 -22 38 -14 50 12 20 24 10 23 -20z" />{" "}
          <path d="M1160 2492 c0 -53 -27 -89 -92 -126 -104 -58 -137 -106 -138 -203 0 -34 14 -44 24 -18 3 8 17 15 31 15 14 0 44 10 67 21 33 17 46 19 60 10 24 -15 28 -14 28 4 0 12 4 13 19 5 31 -16 43 -13 29 10 -10 15 -10 29 1 67 28 96 23 170 -13 218 -15 20 -15 20 -16 -3z m27 -114 c-3 -13 -8 -33 -11 -46 -20 -86 -34 -112 -62 -112 -13 0 -45 -9 -72 -19 -33 -13 -53 -16 -65 -10 -22 13 -21 26 1 66 15 29 99 93 121 93 4 0 18 11 31 25 31 33 64 34 57 3z" />{" "}
          <path d="M1969 2470 c26 -23 58 -25 95 -9 40 19 20 29 -52 29 l-67 -1 24 -19z" />{" "}
          <path d="M2255 2453 c-14 -25 -40 -47 -90 -75 -68 -39 -145 -110 -145 -135 0 -6 21 -21 47 -33 44 -19 47 -19 65 -3 21 19 89 24 121 9 14 -7 17 -3 17 20 0 16 7 62 15 102 12 56 13 82 5 113 -6 21 -12 39 -13 39 -1 0 -11 -16 -22 -37z m5 -93 c0 -22 -4 -40 -10 -40 -5 0 -10 -10 -10 -22 0 -37 -11 -44 -84 -58 -63 -12 -70 -11 -82 5 -11 14 -9 21 9 40 26 27 112 85 125 85 5 0 15 7 22 15 21 25 30 17 30 -25z" />{" "}
          <path d="M878 2473 c-21 -2 -38 -9 -38 -14 0 -16 36 -24 97 -20 l58 3 -24 19 c-13 10 -31 18 -40 17 -9 -1 -33 -3 -53 -5z" />{" "}
          <path d="M1797 2324 c-11 -11 -8 -47 7 -66 10 -13 15 -15 24 -6 9 9 12 7 12 -8 0 -11 5 -25 11 -31 7 -7 3 -12 -15 -15 -22 -4 -27 -1 -33 21 -8 37 -22 51 -48 51 -22 0 -35 -17 -35 -45 0 -17 31 -28 44 -15 14 14 26 13 26 -4 0 -8 -7 -16 -15 -20 -16 -6 -21 -51 -6 -61 6 -3 26 9 45 26 36 31 66 33 66 4 0 -8 6 -15 13 -15 8 0 32 -12 53 -28 71 -50 142 -74 103 -35 -6 6 -11 30 -11 52 1 36 -2 41 -22 41 -12 0 -46 7 -74 15 -55 17 -66 29 -86 99 -11 39 -40 59 -59 40z" />{" "}
          <path d="M652 2296 c4 -18 0 -26 -14 -29 -25 -7 -24 -47 2 -47 16 0 19 -5 14 -30 -6 -27 -4 -30 20 -30 14 0 26 5 26 10 0 6 9 10 20 10 11 0 20 -7 20 -15 0 -18 9 -19 33 -1 14 11 24 11 55 0 56 -20 72 -18 72 10 0 13 3 31 6 39 4 12 -3 14 -41 9 -68 -7 -122 14 -151 60 -29 45 -69 54 -62 14z m68 -66 l21 -30 -26 0 c-18 0 -29 6 -32 20 -3 11 -10 20 -15 20 -5 0 -6 5 -3 10 11 18 33 10 55 -20z" />{" "}
          <path d="M890 2049 c-6 -11 -10 -37 -8 -57 3 -35 2 -37 -31 -40 -38 -4 -51 5 -65 49 -13 38 -46 53 -73 34 -17 -13 -17 -14 6 -35 14 -11 30 -19 37 -16 7 3 15 -5 18 -17 9 -35 7 -39 -16 -35 -27 4 -36 28 -11 29 10 1 3 5 -16 9 -19 5 -40 6 -48 3 -18 -7 -17 -49 2 -57 8 -3 15 -1 15 4 0 6 6 10 14 10 10 0 14 -9 13 -27 -2 -24 1 -28 22 -25 13 2 32 13 41 24 20 25 44 15 37 -14 -4 -15 -2 -18 11 -12 54 22 93 33 106 28 11 -4 13 2 9 35 -5 35 -2 44 25 71 l30 30 -21 15 c-32 22 -84 19 -97 -6z m52 -41 c-7 -7 -12 -20 -12 -30 0 -10 -4 -18 -9 -18 -12 0 -11 52 2 68 7 9 13 10 21 2 7 -7 6 -14 -2 -22z" />{" "}
          <path d="M2082 1977 c-6 -7 -12 -34 -14 -61 -4 -61 -25 -79 -65 -56 -14 8 -32 31 -38 50 -9 28 -17 36 -42 38 -20 2 -32 -2 -36 -12 -4 -10 -1 -16 8 -16 8 0 15 -4 15 -10 0 -5 -6 -10 -14 -10 -7 0 -19 -7 -26 -15 -10 -12 -10 -18 0 -30 7 -9 19 -14 27 -11 10 4 12 -1 7 -18 -6 -24 16 -50 24 -28 5 15 49 16 54 0 3 -9 12 -9 38 0 18 7 47 12 65 12 29 0 31 2 27 29 -3 21 4 37 27 63 37 42 38 52 9 72 -27 19 -52 20 -66 3z m-134 -97 c7 -12 10 -25 7 -30 -3 -4 1 -11 7 -13 8 -4 7 -6 -4 -6 -21 -1 -48 36 -41 55 7 19 16 17 31 -6z" />{" "}
          <path d="M1540 1312 c-14 -9 -38 -21 -54 -27 -42 -14 -44 -33 -4 -32 30 2 33 -1 36 -31 3 -27 -1 -34 -22 -42 -35 -13 -34 -32 2 -24 15 4 55 19 89 35 50 22 65 34 76 62 8 19 20 38 26 41 6 4 11 14 11 22 0 12 -4 12 -21 4 -18 -10 -49 -8 -99 6 -9 2 -27 -4 -40 -14z m70 -17 c0 -9 -51 -25 -61 -19 -17 10 1 24 32 24 16 0 29 -2 29 -5z m20 -33 c0 -15 -50 -52 -70 -52 -15 0 -20 7 -20 24 0 19 6 26 28 29 49 7 62 7 62 -1z" />{" "}
          <path d="M1682 1233 c-13 -31 -59 -64 -114 -82 -51 -17 -85 -46 -109 -93 -21 -40 -19 -62 3 -40 19 19 40 15 33 -7 -5 -18 -3 -19 22 -11 15 4 35 11 44 15 12 4 18 0 22 -17 4 -13 20 -37 37 -53 29 -28 31 -28 44 -10 12 16 16 17 30 6 14 -11 15 -7 9 38 -3 28 0 91 7 140 17 119 2 179 -28 114z m3 -110 c-5 -32 -9 -75 -10 -95 -5 -66 -30 -77 -66 -28 -17 22 -30 29 -54 28 -38 -1 -55 8 -55 29 0 20 58 73 80 73 8 0 26 7 38 16 12 8 22 12 22 9 0 -3 10 1 22 9 12 9 24 16 26 16 3 0 1 -26 -3 -57z" />{" "}
          <path d="M1418 1233 c-21 -2 -38 -9 -38 -14 0 -18 43 -26 82 -16 31 8 36 12 27 23 -6 8 -17 13 -23 12 -6 -1 -28 -3 -48 -5z" />{" "}
          <path d="M1326 1184 c-3 -9 4 -25 21 -40 14 -13 22 -24 18 -24 -5 0 -1 -6 10 -13 30 -23 9 -38 -25 -19 -34 19 -38 32 -12 33 13 0 14 2 2 6 -8 4 -23 17 -33 30 -21 27 -39 29 -57 8 -16 -19 3 -45 31 -45 11 0 19 -5 19 -11 0 -6 -9 -9 -20 -6 -22 6 -41 -18 -33 -40 6 -17 45 -16 69 1 22 17 46 3 37 -21 -5 -12 -1 -14 15 -9 12 3 30 8 40 11 9 3 22 15 27 27 9 20 7 25 -20 38 -22 11 -31 23 -33 45 -5 42 -43 63 -56 29z" />{" "}
          <path d="M1786 1147 c-33 -33 -33 -53 0 -101 15 -22 29 -59 32 -83 5 -49 20 -46 43 10 7 18 19 38 26 45 14 15 8 38 -20 69 -31 35 -16 49 21 18 39 -33 56 -86 44 -140 -8 -38 -10 -40 -43 -37 -27 2 -31 0 -21 -10 20 -20 14 -38 -13 -38 -26 0 -45 -25 -45 -61 l0 -22 23 21 c27 26 40 27 57 7 32 -38 -33 -125 -94 -125 -67 0 -105 60 -106 167 0 45 -18 68 -27 34 -3 -12 -9 -21 -13 -21 -5 0 -28 22 -52 49 -43 48 -45 49 -91 44 -43 -5 -47 -8 -47 -32 0 -41 25 -68 95 -101 35 -17 71 -38 80 -46 8 -9 15 -11 15 -5 0 17 -49 60 -85 75 -45 19 -80 52 -66 61 6 3 9 11 6 16 -4 5 3 9 14 9 12 0 39 -18 61 -40 22 -22 44 -40 49 -40 21 0 42 -33 37 -56 -4 -15 0 -34 10 -49 9 -14 18 -48 19 -76 2 -38 9 -57 28 -77 19 -20 24 -31 17 -42 -5 -8 -10 -10 -10 -4 0 18 -32 50 -71 71 -58 31 -98 69 -96 91 0 11 4 19 8 16 4 -2 12 3 19 11 6 7 18 11 26 8 8 -3 14 -1 14 5 0 14 -32 20 -57 11 -67 -25 -42 -106 48 -154 87 -46 91 -52 74 -85 -8 -16 -19 -31 -24 -34 -18 -11 -41 6 -49 37 -8 32 -36 48 -65 38 -16 -6 -16 -8 4 -29 25 -27 20 -39 -9 -21 -17 10 -25 10 -46 -4 -29 -20 -33 -32 -11 -41 20 -7 76 4 70 14 -3 4 2 11 11 14 41 16 24 -24 -19 -44 -23 -11 -33 -23 -35 -44 -3 -23 0 -28 13 -22 9 3 22 6 29 6 6 0 17 14 23 30 8 20 18 30 32 30 12 0 20 -5 19 -12 -2 -6 4 -13 14 -15 16 -4 65 39 124 109 l32 37 -33 20 c-31 18 -73 67 -64 75 2 2 27 -1 55 -7 69 -14 105 7 148 88 19 34 43 64 57 70 19 8 23 16 21 39 -2 18 4 36 18 51 37 40 5 62 -35 25 l-22 -21 5 49 c6 64 -10 110 -51 150 -46 45 -89 51 -121 19z m60 -75 c14 -31 12 -52 -6 -52 -4 0 -18 16 -29 36 -21 35 -21 37 -4 56 13 14 18 16 21 6 2 -7 10 -28 18 -46z m118 -168 c8 -22 9 -20 -19 -49 -31 -30 -32 -30 -45 -5 -8 15 -5 24 17 45 32 29 39 31 47 9z" />{" "}
          <path d="M1144 1055 c-19 -14 -18 -14 6 -32 14 -10 28 -17 32 -16 4 2 13 -7 19 -18 17 -32 -17 -51 -51 -29 -13 9 -13 11 0 19 12 8 10 12 -10 19 -31 12 -50 -1 -50 -35 0 -22 4 -25 25 -21 21 4 24 2 20 -12 -7 -21 17 -43 38 -34 8 3 18 17 21 30 8 30 30 27 34 -4 4 -23 17 -29 27 -12 10 17 57 11 120 -15 77 -32 91 -32 71 -3 -9 12 -16 35 -16 51 0 27 -1 28 -47 22 -27 -3 -70 0 -98 7 -41 11 -53 19 -66 46 -14 30 -34 51 -50 52 -3 0 -14 -7 -25 -15z" />{" "}
          <path d="M1405 815 c-31 -30 -31 -36 0 -65 13 -12 22 -27 19 -31 -6 -11 -105 -12 -121 -1 -6 4 -17 20 -22 35 -9 23 -16 28 -38 25 -30 -3 -47 -38 -19 -38 27 0 17 -19 -11 -22 -22 -2 -29 -9 -31 -29 -3 -23 0 -26 22 -22 23 5 26 2 26 -25 0 -41 15 -48 42 -20 27 28 88 37 88 13 0 -19 2 -19 50 6 22 11 57 23 79 26 37 5 38 6 26 29 -15 30 -8 72 15 87 16 9 13 13 -28 34 -59 28 -68 28 -97 -2z m71 -23 c13 5 17 -71 4 -87 -9 -11 -60 -28 -60 -19 0 2 5 15 12 29 9 19 9 28 0 37 -16 16 -15 23 4 43 12 12 19 13 24 5 4 -6 11 -10 16 -8z m-192 -87 c23 -17 15 -45 -13 -45 -26 0 -45 32 -29 48 15 15 19 15 42 -3z" />{" "}
        </g>{" "}
      </svg>
    </div>
  );
}
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

  useEffect(() => {
    if (checked) {
      // window.speechSynthesis.speak(utterance);
      setTimeout(() => {
        alert("Did I scare you? 👀 👻");
      }, 1000);
    }
  }, [checked]);

  const handleCheckboxChange = (isChecked) => {
    setChecked(isChecked);
    if (isChecked) {
      alert("🫣 Peakaboo!!! 😱 ");
    }
  };
  const [hover, setHover] = useState();
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
        dotSize={8}
        gap={28}
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
            typingSpeed={100}
            pauseDuration={2000}
            initialDelay={1000}
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
            pauseDuration={3500}
            initialDelay={2000}
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
          <ul className="space-y-2">
            <li className="group flex items-start gap-4 pl-8 relative hover:translate-x-3 transition-transform duration-200">
              <div className="absolute left-2 top-1/2 w-[8px] h-[8px] bg-white rotate-45 transform -translate-y-1/2 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110"></div>
              SWE{" "}
              <span className="font-medium cursor-target hover:underline hover:text-[#c4a3ec] transition-colors duration-200">
                <a
                  href="https://uwaterloo.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium cursor-target hover:underline hover:text-[#c4a3ec] transition-colors duration-200"
                >
                  @UWaterloo
                </a>
              </span>
            </li>
            <li className="group flex items-start gap-4 pl-8 relative hover:translate-x-3 transition-transform duration-200">
              <div className="absolute left-2 top-1/2 w-[8px] h-[8px] bg-white rotate-45 transform -translate-y-1/2 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110"></div>
              Fighting imposter syndrome by building things
            </li>
            <li className="group flex items-start gap-4 pl-8 relative hover:translate-x-3 transition-transform duration-200">
              <div className="absolute left-2 top-1/2 w-[8px] h-[8px] bg-white rotate-45 transform -translate-y-1/2 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110"></div>
              Building an interpreted programming language in C
            </li>
            <li className="group flex items-start gap-4 pl-8 relative hover:translate-x-3 transition-transform duration-200">
              <div className="absolute left-2 top-1/2 w-[8px] h-[8px] bg-white rotate-45 transform -translate-y-1/2 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110"></div>
              Prev. swe intern{" "}
              <a
                href="https://joinlivewell.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium cursor-target hover:underline hover:text-[#c4a3ec] transition-colors duration-200"
              >
                @Livewell
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
          <Link href="/projects">View My Projects</Link>
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
