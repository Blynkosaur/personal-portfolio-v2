import { motion } from "motion/react";
import { useState, useEffect } from "react";
function FigureOne() {
  const mouth_ls = ["_", "*", "."];
  const [mouth, setMouth] = useState(mouth_ls[0]);
  const [mouth_index, setMouthIndex] = useState(0);
  useEffect(() => {
    const change = setInterval(() => {
      setMouthIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % 3;
        setMouth(mouth_ls[newIndex]);
        return newIndex;
      });
    }, 1000);
  }, []);
  return (
    <motion.pre
      className="cursor-target text-xs "
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
    >{` \\\\.-.//
-(o${mouth}o)-)
 | _ | |
 | | | |
 '-' '-'`}</motion.pre>
  );
}

function FigureTwo() {
  const mouth_ls = ["_", "*", "."];
  const [mouth, setMouth] = useState(mouth_ls[0]);
  const [mouth_index, setMouthIndex] = useState(0);
  useEffect(() => {
    const change = setInterval(() => {
      setMouthIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % 3;
        setMouth(mouth_ls[newIndex]);
        return newIndex;
      });
    }, 1000);
  }, []);

  const figureTwo = `   .--.
  (o${mouth}o )
  //||\\\\
 // || \\\\
    //   `;
  return (
    <motion.pre
      className="cursor-target text-xs"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      {figureTwo}
    </motion.pre>
  );
}
function FigureThree() {
  const mouth_ls = ["_", "*", "."];
  const [mouth, setMouth] = useState(mouth_ls[0]);
  const [mouth_index, setMouthIndex] = useState(0);
  useEffect(() => {
    const change = setInterval(() => {
      setMouthIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % 3;
        setMouth(mouth_ls[newIndex]);
        return newIndex;
      });
    }, 1000);
  }, []);

  const figureThree = `  _   _
 / \\ / \\
(o ) (o )
/_/ ${mouth} \\_\\
  //  \\\\
`;

  return (
    <motion.pre
      className="cursor-target text-xs"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      {figureThree}
    </motion.pre>
  );
}

function FigureFour() {
  const mouth_ls = ["_", "*", "."];
  const [mouth, setMouth] = useState(mouth_ls[0]);
  const [mouth_index, setMouthIndex] = useState(0);
  useEffect(() => {
    const change = setInterval(() => {
      setMouthIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % 3;
        setMouth(mouth_ls[newIndex]);
        return newIndex;
      });
    }, 1000);
  }, []);

  const figureFour = `  _   _
 /@\`${mouth}'@\\
(  / \\  )
 \\ | | /
  \\|_|/  `;

  return (
    <motion.pre
      className="cursor-target text-xs"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      {figureFour}
    </motion.pre>
  );
}

function Door() {
  const door = `   /|
  / |
 /__|_______
 |  __  __  |
 | |  ||  | |   
 | |__||__| |  
 |  __  __()|  
 | |  ||  | |  
 | |  ||  | |
 | |__||__| |
 |__________|  `;

  return (
    <motion.pre
      className="cursor-target text-xs"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      {door}
    </motion.pre>
  );
}

export { FigureOne, FigureTwo, FigureThree, FigureFour, Door };
