"use client";
import { motion } from "framer-motion";

const stairAnim = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit:    { top: ["100%", "0%"] },
};
const colors = ["#080810","#0c0c18","#100e20","#150d28","#1a0c30","#1e0b38"];

export default function Stairs() {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <motion.div key={i} variants={stairAnim} initial="initial" animate="animate" exit="exit"
          transition={{ duration: 0.35, ease: "easeInOut", delay: (5 - i) * 0.08 }}
          className="h-full w-full fixed top-0 left-0 right-0"
          style={{ zIndex: i, background: colors[i] }} />
      ))}
    </>
  );
}