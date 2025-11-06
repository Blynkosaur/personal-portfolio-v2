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
  <motion.ul animate= {{rotate: 360}}></motion>
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
  figureTwo,
  figureThree,  
  figureFour
}
