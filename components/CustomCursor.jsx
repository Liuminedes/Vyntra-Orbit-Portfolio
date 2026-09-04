"use client";

import {
  CursorProvider,
  Cursor,
  CursorFollow,
} from "@/components/animate-ui/components/animate/cursor";

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
      <CursorFollow
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
