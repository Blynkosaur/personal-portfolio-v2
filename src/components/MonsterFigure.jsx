import { motion } from "motion/react";
function FigureOne(){ 
  return(<motion.pre>{` 
  \\\\.-.//
 -(o_o)-)
  | _ | |
  | | | |
  '-' '-'
  `}</motion.pre>)
}
function FigureTwo(){

  const figureTwo = 
 `   .--.
  (o_o )
  //||\\\\
 // || \\\\
    //   `;
  return (
  <motion.pre>{figureTwo}</motion.pre>
  )
}
  function FigureThree (){ 
  const figureThree = `
  _  _
 / \\ / \\
(o ) (o )
/_/ o \\_\\
  //  \\\\
`;

return(<motion.pre>
 {figureThree}
</motion.pre>)}

  function  FigureFour (){ 
  const figureFour = `
   /@\`-'@\\
  (  / \\  )
   \\ | | /
    \\|_|/
        `;

return(<motion.pre>{figureFour}</motion.pre>)
}
export {
  FigureOne,
  FigureTwo,
  FigureThree,  
  FigureFour
}
