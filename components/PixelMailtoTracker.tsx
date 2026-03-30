"use client";
import { useEffect } from "react";

export default function PixelMailtoTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href") || "";
      if (!href.startsWith("mailto:")) return;
      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Contact");
        console.log("Contact event fired");
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
