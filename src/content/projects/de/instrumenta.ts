import type { ProjectContent } from "../../types";

export default {
  title: "Instrumenta – Chirurgischer Simulator",
  theme: "light",
  tags: ["react", "typescript", "ai", "security"],
  description:
    "Interaktiver Trainingssimulator für chirurgische Instrumentation mit React, PixiJS und XState sowie in Blender erstellten visuellen Szenen.<br/><br/>Das Projekt verbindet Simulationslogik, grafische Interaktion, Trainingszustände, Validierung und Berichte.",
  source: "https://github.com/Keiner-2006/InstrumentQuirurgicSimulator",
  components: [
    {
      type: "text",
      props: {
        title: "Software + Interaktion + visuelle Produktion",
        text: "PixiJS steuert die Interaktion, XState modelliert die Trainingszustände und Blender liefert Szenen und visuelle Assets für den Web-Simulator.",
      },
    },
    {
      type: "list",
      props: {
        title: "Kernfunktionen",
        items: [
          "Drag & Drop von Instrumenten",
          "Zustandsmaschine mit XState",
          "Blender-Szenen und visuelle Assets",
          "Validierung mit Zod",
          "JSON-Berichte und lokaler Verlauf",
          "43 dokumentierte Vitest-Tests",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technologie-Stack",
        text: "React 19, TypeScript, Vite, PixiJS 8, XState 5, Zod, Vitest und Blender.",
      },
    },
  ],
} as const satisfies ProjectContent;
