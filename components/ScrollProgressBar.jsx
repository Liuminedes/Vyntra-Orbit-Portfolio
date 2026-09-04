"use client";

import {
  ScrollProgressProvider,
  ScrollProgress,
} from "@/components/animate-ui/primitives/animate/scroll-progress";

export default function ScrollProgressBar() {
  return (
    <ScrollProgressProvider global>
      <ScrollProgress
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 2,
          background: "linear-gradient(90deg, #8B5CF6, #C4B5FD)",
          boxShadow: "0 0 8px 1px rgba(139,92,246,0.7)",
        }}
      />
    </ScrollProgressProvider>
  );
}
