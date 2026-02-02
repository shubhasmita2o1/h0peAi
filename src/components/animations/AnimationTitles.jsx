import { motion } from "framer-motion";

export default function AnimationTitles({ title, color }) {
  let text = title;

  const h3Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const spanVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.h3
      className={`h3-res ${color}`}
      variants={h3Variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {text.split("").map((char, index) => (
        <motion.span variants={spanVariants} key={index}>
          {char}
        </motion.span>
      ))}
    </motion.h3>
  );
}
