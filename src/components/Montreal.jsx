import { motion } from "motion/react";

export default function Montreal() {
  return (
    <motion.div
      className="hidden md:block absolute left-1/2 top-full z-30 mt-2 w-56 -translate-x-[38%] md:left-auto md:right-[-30px] md:translate-x-0"
      initial={{ opacity: 0, y: -6, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <motion.div
        aria-label="Montreal illustration"
        className="h-36 w-full bg-[#CCD6F5]"
        style={{
          WebkitMaskImage: "url('/montreal.svg')",
          maskImage: "url('/montreal.svg')",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
        initial={{ opacity: 0.85 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.18, ease: "easeOut", delay: 0.03 }}
      />
    </motion.div>
  );
}
