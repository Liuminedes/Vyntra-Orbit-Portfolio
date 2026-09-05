"use client";

import { useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import {
  CursorProvider,
  Cursor,
} from "@/components/animate-ui/components/animate/cursor";
import { useCursor } from "@/components/animate-ui/primitives/animate/cursor";

/*
 * CursorFollow (the library's built-in trailing element) positions itself via a
 * tooltip-style side/align/offset system meant for labels next to a cursor —
 * it can never sit perfectly concentric with the pointer. This ring binds
 * directly to the raw cursor position instead, so it always surrounds the dot.
 */
function CursorRing({ style }) {
  const { cursorPos, active, global } = useCursor();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 1200, damping: 70, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 1200, damping: 70, mass: 0.4 });

  useEffect(() => {
    x.set(cursorPos.x);
    y.set(cursorPos.y);
  }, [cursorPos, x, y]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          style={{
            transform: "translate(-50%,-50%)",
            pointerEvents: "none",
            zIndex: 9998,
            position: global ? "fixed" : "absolute",
            top: springY,
            left: springX,
            ...style,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        />
      )}
    </AnimatePresence>
  );
}

export default function CustomCursor() {
  return (
    <CursorProvider global className="hidden lg:block">
      <Cursor
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#8B5CF6",
          boxShadow: "0 0 12px 2px rgba(139,92,246,0.8)",
        }}
      />
      <CursorRing
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "transparent",
          border: "1px solid rgba(139,92,246,0.4)",
          boxShadow: "0 0 24px 6px rgba(139,92,246,0.25)",
        }}
      />
    </CursorProvider>
  );
}
