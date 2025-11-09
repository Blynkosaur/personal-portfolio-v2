import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
function FigureOne() {
  const mouth_ls = ["_", "*", "."];
  const [mouth, setMouth] = useState(mouth_ls[0]);
  const [mouth_index, setMouthIndex] = useState(0);
  const [eyes, setEyes] = useState("o");
  const [alive, setAlive] = useState(true);
  const firstRenderAl = useRef(true);
  const firstRenderVis = useRef(true);
  const [visible, setVisible] = useState(true);
  const handleClick = () => {
    setEyes("x");
    setTimeout(() => {
      setAlive(False);
    });
  };
  useEffect(() => {
    if (firstRenderAl.current) {
      firstRenderAl.current = false;
      return;
    }

    setTimeout(() => {
      setAlive(false);
    }, 1500);
  }, [eyes]);
  useEffect(() => {
    if (firstRenderVis.current) {
      firstRenderVis.current = false;
      return;
    }

    setTimeout(() => {
      setVisible(false);
    }, 500);
  }, [alive]);

  useEffect(() => {
    const change = setInterval(() => {
      setMouthIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % 3;
        setMouth(mouth_ls[newIndex]);
        return newIndex;
      });
    }, 1000);
  }, []);
  const fig = ` \\\\.-.//
-(${eyes}${mouth}${eyes})-)
 | _ | |
 | | | |
 '-' '-'`;
  const flash = `
  \\ * * /
   - . . -
   / * * \\
`;
  return (
    visible && (
      <motion.pre
        onClick={handleClick}
        className=" select-none cursor-target text-xs "
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        {alive ? fig : flash}
      </motion.pre>
    )
  );
}

function FigureTwo() {
  const mouth_ls = [".", "_", "*"];
  const [mouth, setMouth] = useState(mouth_ls[0]);
  const [mouth_index, setMouthIndex] = useState(0);
  const [eyes, setEyes] = useState("o");
  const handleClick = () => {
    setEyes("x");
  };
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
  (${eyes}${mouth}${eyes} )
  //||\\\\
 // || \\\\
    //   `;
  return (
    <motion.pre
      onClick={handleClick}
      className="select-none cursor-target text-xs"
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
  const mouth_ls = [".", "*", "_", "o"];
  const [mouth, setMouth] = useState(mouth_ls[0]);
  const [mouth_index, setMouthIndex] = useState(0);
  const [eyes, setEyes] = useState("o");
  const handleClick = () => {
    setEyes("x");
  };

  useEffect(() => {
    const change = setInterval(() => {
      setMouthIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % 4;
        setMouth(mouth_ls[newIndex]);
        return newIndex;
      });
    }, 1000);
  }, []);

  const figureThree = `  _   _
 / \\ / \\
(${eyes} ) (${eyes} )
/_/ ${mouth} \\_\\
  //  \\\\
`;

  return (
    <motion.pre
      className="cursor-target text-xs"
      onClick={handleClick}
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
  const mouth_ls = [".", "_", "*", "o"];
  const [mouth, setMouth] = useState(mouth_ls[0]);
  const [mouth_index, setMouthIndex] = useState(0);
  const [eyes, setEyes] = useState("@");
  const handleClick = () => {
    setEyes("x");
  };
  useEffect(() => {
    const change = setInterval(() => {
      setMouthIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % 4;
        setMouth(mouth_ls[newIndex]);
        return newIndex;
      });
    }, 1000);
  }, []);

  const figureFour = `  _   _
 /${eyes}\`${mouth}'${eyes}\\
(  / \\  )
 \\ | | /
  \\|_|/  `;

  return (
    <motion.pre
      className="cursor-target text-xs select-none "
      onClick={handleClick}
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
      className="select-none  text-xs"
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
