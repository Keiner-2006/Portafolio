import type { ProjectContent } from "../../types";

export default {
  title: "SmartPick – Intelligent Price Aggregator",
  theme: "dark",
  tags: ["flutter", "dart", "typescript", "node", "postgresql", "redis", "supabase", "ai", "restapi"],
  description:
    "A platform for comparing technology deals in Colombia through automated data collection, search, and comparison from a Flutter application.<br/><br/>The backend combines Fastify, PostgreSQL, Redis, and Playwright to collect and process products from multiple retailers, with AI integrations for smarter search and analysis.",
  components: [
    {
      type: "text",
      props: {
        title: "Data, automation, and mobile experience",
        text: "SmartPick goes beyond a traditional API: it includes scraping workers, data normalization, PostgreSQL persistence, Redis caching, and a Flutter application consuming offers, comparisons, and AI-assisted search.",
      },
    },
    {
      type: "list",
      props: {
        title: "Key features",
        items: [
          "Automated scraping with Playwright",
          "Multiple Colombian retailers",
          "Fastify + TypeScript backend",
          "PostgreSQL and Redis",
          "Gemini/OpenRouter integrations",
          "Flutter app with Riverpod and GoRouter",
          "Alerts, favorites, comparison, and authentication",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Stack",
        text: "Flutter, Dart, Riverpod, Fastify, TypeScript, PostgreSQL, Redis, Playwright, Supabase, Firebase, Gemini, and OpenRouter.",
      },
    },
  ],
} as const satisfies ProjectContent;
