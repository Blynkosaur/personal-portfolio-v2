import { motion } from "motion/react";
function FigureOne() {
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
-(o_o)-)
 | _ | |
 | | | |
 '-' '-'`}</motion.pre>
  );
}

function FigureTwo() {
  const figureTwo = `   .--.
  (o_o )
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
  const figureThree = `  _   _
 / \\ / \\
(o ) (o )
/_/ o \\_\\
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
  const figureFour = `  _   _
 /@\`-'@\\
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
export { FigureOne, FigureTwo, FigureThree, FigureFour };
