"use client";

import { useEffect } from "react";

/**
 * WaterRipple
 *
 * Safe, no-op on the server and when jQuery / ripples plugin
 * are not available on the window. This avoids build-time errors
 * on Vercel caused by importing browser-only libraries.
 */
export default function WaterRipple(): null {
  useEffect(() => {
    // Guard: only run in the browser
    if (typeof window === "undefined") return;

    let active = true;

    try {
      const w = window as unknown as {
        jQuery?: any;
        $?: any;
      };

      const $ = w.jQuery || w.$;

      // If jQuery or the ripples plugin are not present, safely do nothing
      if (!active || !$ || !$.fn || typeof $.fn.ripples !== "function") {
        return;
      }

      // Initialize with gentle settings
      $("body").ripples({
        resolution: 1000,
        dropRadius: 20,
        perturbance: 0.001,
        interactive: true,
      });
    } catch (err) {
      // Fail softly if WebGL or any runtime issues occur
      // eslint-disable-next-line no-console
      console.warn("Unable to initialize water ripple effect:", err);
    }

    return () => {
      active = false;
      try {
        const w = window as any;
        const j = w.jQuery || w.$;
        if (j && j.fn && typeof j.fn.ripples === "function") {
          j("body").ripples("destroy");
        }
      } catch {
        // Ignore cleanup errors
      }
    };
  }, []);

  return null;
}
