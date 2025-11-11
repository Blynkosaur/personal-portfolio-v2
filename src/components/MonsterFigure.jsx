import { useAnimation, AnimatePresence, motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
function randomPosition() {
  return {
    x: Math.random() * 300 - 150,
    y: Math.random() * 300 - 150,
  };
}
const flash = `
      | +
      .   * 
      |_    
 +<#>-+- --
   \`.|,'
      .   `;
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
      setAlive(false);
    }, 1500);
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
    }, 1500);
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
  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.pre
          onClick={handleClick}
          key={alive ? "figure" : "flash"}
          className={`${alive ? "cursor-target" : ""} text-xs select-none z-50`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          exit={{ scale: 0, opacity: 0 }}
        >
          {alive ? fig : flash}
        </motion.pre>
      )}
    </AnimatePresence>
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
  const [alive, setAlive] = useState(true);
  const firstRenderAl = useRef(true);
  const firstRenderVis = useRef(true);
  const [visible, setVisible] = useState(true);

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
    }, 1500);
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

  const figureTwo = `   .--.
  (${eyes}${mouth}${eyes} )
  //||\\\\
 // || \\\\
    //   `;
  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.pre
          onClick={handleClick}
          key={alive ? "figure" : "flash"}
          className={`${alive ? "cursor-target" : ""} text-xs select-none z-50`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          exit={{ scale: 0, opacity: 0 }}
        >
          {alive ? figureTwo : flash}
        </motion.pre>
      )}
    </AnimatePresence>
  );
}
function FigureThree() {
  const mouth_ls = [".", "*", "_", "o"];
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
    }, 1500);
  }, [alive]);

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
    <AnimatePresence mode="wait">
      {visible && (
        <motion.pre
          className={`${alive ? "cursor-target" : ""} text-xs select-none z-50`}
          onClick={handleClick}
          key={alive ? "figure" : "flash"}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          exit={{ scale: 0, opacity: 0 }}
        >
          {alive ? figureThree : flash}
        </motion.pre>
      )}
    </AnimatePresence>
  );
}

function FigureFour() {
  const mouth_ls = [".", "_", "*", "o"];
  const [mouth, setMouth] = useState(mouth_ls[0]);
  const [mouth_index, setMouthIndex] = useState(0);
  const [eyes, setEyes] = useState("@");
  const [alive, setAlive] = useState(true);
  const firstRenderAl = useRef(true);
  const firstRenderVis = useRef(true);
  const [visible, setVisible] = useState(true);
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
    }, 1500);
  }, [alive]);

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
    <AnimatePresence mode="wait">
      {visible && (
        <motion.pre
          key={alive ? "figure" : "flash"}
          className={`${alive ? "cursor-target" : ""} text-xs select-none z-50`}
          onClick={handleClick}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          exit={{ scale: 0, opacity: 0 }}
        >
          {alive ? figureFour : flash}
        </motion.pre>
      )}
    </AnimatePresence>
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
      initial={{ opacity: 0, scale: 0.8 }}
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
