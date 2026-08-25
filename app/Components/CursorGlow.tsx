"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const glow = glowRef.current;

    if (!cursor || !glow) return;

    const isTouch =
      window.matchMedia("(hover: none), (pointer: coarse)").matches;

    if (isTouch) {
      cursor.style.display = "none";
      glow.style.display = "none";
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;
    let cursorY = mouseY;

    let glowX = mouseX;
    let glowY = mouseY;

    let frame = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      cursor.style.opacity = "1";
      glow.style.opacity = "1";
    };

    const animate = () => {
      // Small, precise cursor
      cursorX += (mouseX - cursorX) * 0.28;
      cursorY += (mouseY - cursorY) * 0.28;

      // Larger, slower golden atmosphere
      glowX += (mouseX - glowX) * 0.09;
      glowY += (mouseY - glowY) * 0.09;

      cursor.style.transform = `
        translate3d(${cursorX}px, ${cursorY}px, 0)
        translate(-50%, -50%)
      `;

      glow.style.transform = `
        translate3d(${glowX}px, ${glowY}px, 0)
        translate(-50%, -50%)
      `;

      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* GOLDEN ATMOSPHERE */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9997]

          h-[150px]
          w-[150px]

          rounded-full

          bg-[#A48C45]/[0.13]

          blur-[38px]

          opacity-0

          will-change-transform
        "
      />

      {/* PRECISION POINT */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]

          h-[7px]
          w-[7px]

          rounded-full

          bg-[#C7AD67]

          shadow-[0_0_8px_rgba(199,173,103,0.9),0_0_18px_rgba(164,140,69,0.55)]

          opacity-0

          will-change-transform
        "
      />
    </>
  );
}
