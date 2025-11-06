import { motion } from "motion/dist/react";
const figureOne = <pre>

   \.-./
 -(o o)-
  | - |
  | | |
  '-' '-'
  </pre>;
function FigureTwo(){

  const figureTwo = 
    <pre>
   .--.
  (o_o )
  //||\\
 // || \\
    // 
  </pre>;
  return (
  <motion.div>{figureTwo}</motion.div>
  )
}
  const figureThree = 
<pre>
 / \__/ \
 \_/  \_/
/ _/\_  \
 \__/\__/
 (='.'=)
 (")_(")
</pre>;

  const figureFour = 
<pre>
  _   _
 /@`-'@\
(  / \  )
 \ | | /
  \|_|/
</pre>
export {
  figureOne,
  FigureTwo,
  figureThree,  
  figureFour
}
