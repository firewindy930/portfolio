"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

/**
 * WaterRipple
 *
 * Implements jQuery Water Ripple Effect on the page.
 * Loads jQuery and jquery.ripples plugin via CDN, then initializes
 * the ripple effect on the body element.
 */
export default function WaterRipple() {
  const [jqueryLoaded, setJqueryLoaded] = useState(false);
  const [ripplesLoaded, setRipplesLoaded] = useState(false);

  useEffect(() => {
    // Guard: only run in the browser
    if (typeof window === "undefined") return;
    if (!jqueryLoaded || !ripplesLoaded) return;

    let active = true;

    const initRipples = () => {
      if (!active) return;

      try {
        const w = window as any;
        const $ = w.jQuery || w.$;

        // Check if jQuery and ripples plugin are available
        if (!$ || !$.fn || typeof $.fn.ripples !== "function") {
          return;
        }

        // Initialize water ripple effect with optimized settings
        $("body").ripples({
          resolution: 512,
          dropRadius: 20,
          perturbance: 0.04,
          interactive: true,
          crossOrigin: "",
        });
      } catch (err) {
        // Fail softly if WebGL or any runtime issues occur
        console.warn("Unable to initialize water ripple effect:", err);
      }
    };

    // Small delay to ensure scripts are fully initialized
    const timer = setTimeout(initRipples, 100);

    return () => {
      active = false;
      clearTimeout(timer);
      try {
        const w = window as any;
        const $ = w.jQuery || w.$;
        if ($ && $.fn && typeof $.fn.ripples === "function") {
          $("body").ripples("destroy");
        }
      } catch {
        // Ignore cleanup errors
      }
    };
  }, [jqueryLoaded, ripplesLoaded]);

  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        strategy="afterInteractive"
        onLoad={() => setJqueryLoaded(true)}
        onError={() => {
          console.warn("Failed to load jQuery from CDN");
        }}
      />
      {jqueryLoaded && (
        <Script
          src="https://cdn.jsdelivr.net/npm/jquery.ripples@0.5.3/dist/jquery.ripples.min.js"
          strategy="afterInteractive"
          onLoad={() => setRipplesLoaded(true)}
          onError={() => {
            console.warn("Failed to load jquery.ripples from CDN");
          }}
        />
      )}
    </>
  );
}
