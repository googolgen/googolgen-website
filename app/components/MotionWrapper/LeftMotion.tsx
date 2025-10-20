'use client';
import { motion } from "motion/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const LeftMotion = ({ children, className }: Props) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default LeftMotion;
