"use client";
import { useEffect } from "react";

export default function WaterRipple(): null {
  useEffect(() => {
    let active = true;

    (async () => {
      try {
        const jqModule = await import("jquery");
        const $ = (jqModule as any).default || jqModule;
        // load ripples plugin which attaches to jQuery.fn
        await import("jquery.ripples");

        if (!active) return;

        if (!$.isFunction($.fn.ripples)) {
          console.warn("Ripples plugin not available");
          return;
        }

        const el = document.body;
        // initialize with gentle settings
        $(el).ripples({
          resolution: 550,
          dropRadius: 20,
          perturbance: 0.001,
          interactive: true,
        });
      } catch (err) {
        // Fail softly if WebGL or import issues occur
        // eslint-disable-next-line no-console
        console.warn("Unable to initialize water ripple effect:", err);
      }
    })();

    return () => {
      active = false;
      try {
        const w = window as any;
        const j = w.jQuery || w.$;
        if (j && j.fn && j.fn.ripples) {
          j("body").ripples("destroy");
        }
      } catch {}
    };
  }, []);

  return null;
}
