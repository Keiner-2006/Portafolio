import type { ProjectContent } from "../../types";

export default {
  title: "Instrumenta – Surgical Simulator",
  theme: "light",
  tags: ["react", "typescript", "ai", "security"],
  description:
    "An interactive surgical instrumentation training simulator built with React, PixiJS, and XState, using visual environments produced in Blender.<br/><br/>The project combines simulation logic, graphical interaction, training states, validation, and reporting, showing how I combine software engineering with visual production when a solution needs more than a traditional UI.",
  source: "https://github.com/Keiner-2006/InstrumentQuirurgicSimulator",
  components: [
    {
      type: "text",
      props: {
        title: "Software + interaction + visual production",
        text: "PixiJS handles canvas interaction while XState models briefing, practice, pause, and result states. Blender is used to produce environments, camera views, and visual assets that are integrated into the web simulator.",
      },
    },
    {
      type: "list",
      props: {
        title: "Key features",
        items: [
          "Instrument drag & drop and free placement",
          "State-machine driven training flow with XState",
          "Blender-produced environments and assets",
          "Content validation with Zod",
          "JSON reports and local attempt history",
          "43 documented Vitest tests",
          "Guided active-surgery and closing scenarios",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Stack",
        text: "React 19, TypeScript, Vite, PixiJS 8, XState 5, Zod, Vitest, and Blender.",
      },
    },
  ],
} as const satisfies ProjectContent;
