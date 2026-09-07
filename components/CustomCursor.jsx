"use client";

import { useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { CursorProvider, useCursor } from "@/components/animate-ui/primitives/animate/cursor";

/*
 * The library's Cursor/CursorFollow center themselves with a CSS
 * `transform: translate(-50%,-50%)` string passed via `style`. Framer Motion
 * silently drops that string whenever the same element also animates `scale`
 * (it takes ownership of `transform` for the scale keyframes), so the element's
 * top-left corner — not its center — lands on the cursor position. The bigger
 * the element, the bigger the visible drift (10px dot ≈ 5px off, 36px ring ≈ 18px
 * off, in the same direction), which is exactly why the ring looked detached
 * from the dot. Both pieces here position via plain top/left math instead, so
 * there's no transform for Framer Motion to override.
 */
const DOT_SIZE = 10;
const RING_SIZE = 36;

/*
 * The library's Cursor primitive also hid the native OS cursor while active,
 * by toggling a `cursor:none` class on <html> (CursorProvider injects the
 * matching stylesheet). That side effect lived inside the primitive Cursor
 * component we no longer use, so it needs to run here instead.
 */
function CursorNativeHide() {
  const { active, global, containerRef } = useCursor();

  useEffect(() => {
    const target = global ? document.documentElement : containerRef.current?.parentElement;
    if (!target) return;
    target.classList.toggle("animate-ui-cursor-none", active);
    return () => target.classList.remove("animate-ui-cursor-none");
  }, [active, global, containerRef]);

  return null;
}

function CursorDot() {
  const { cursorPos, active, global } = useCursor();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    x.set(cursorPos.x - DOT_SIZE / 2);
    y.set(cursorPos.y - DOT_SIZE / 2);
  }, [cursorPos, x, y]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          style={{
            pointerEvents: "none",
            zIndex: 9999,
            position: global ? "fixed" : "absolute",
            top: y,
            left: x,
            width: DOT_SIZE,
            height: DOT_SIZE,
            borderRadius: "50%",
            background: "#8B5CF6",
            boxShadow: "0 0 12px 2px rgba(139,92,246,0.8)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </AnimatePresence>
  );
}

function CursorRing() {
  const { cursorPos, active, global } = useCursor();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 1200, damping: 70, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 1200, damping: 70, mass: 0.4 });

  useEffect(() => {
    x.set(cursorPos.x - RING_SIZE / 2);
    y.set(cursorPos.y - RING_SIZE / 2);
  }, [cursorPos, x, y]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          style={{
            pointerEvents: "none",
            zIndex: 9998,
            position: global ? "fixed" : "absolute",
            top: springY,
            left: springX,
            width: RING_SIZE,
            height: RING_SIZE,
            borderRadius: "50%",
            background: "transparent",
            border: "1px solid rgba(139,92,246,0.4)",
            boxShadow: "0 0 24px 6px rgba(139,92,246,0.25)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </AnimatePresence>
  );
}

export default function CustomCursor() {
  return (
    <div className="hidden lg:block">
      <CursorProvider global>
        <CursorNativeHide />
        <CursorDot />
        <CursorRing />
      </CursorProvider>
    </div>
  );
}
