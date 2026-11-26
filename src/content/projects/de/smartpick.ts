import type { ProjectContent } from "../../types";

export default {
  title: "SmartPick – Intelligenter Preisaggregator",
  theme: "dark",
  tags: ["flutter", "dart", "typescript", "node", "postgresql", "redis", "supabase", "ai", "restapi"],
  description:
    "Plattform zum Vergleichen von Technologieangeboten in Kolumbien durch automatisierte Datenerfassung, Suche und Vergleich in einer Flutter-App.<br/><br/>Das Backend kombiniert Fastify, PostgreSQL, Redis und Playwright mit KI-Integrationen.",
  components: [
    {
      type: "text",
      props: {
        title: "Daten, Automatisierung und Mobile",
        text: "SmartPick umfasst Scraping-Worker, Daten-Normalisierung, PostgreSQL, Redis und eine Flutter-App für Angebote, Vergleiche und KI-gestützte Suche.",
      },
    },
    {
      type: "list",
      props: {
        title: "Kernfunktionen",
        items: [
          "Automatisiertes Scraping mit Playwright",
          "Mehrere kolumbianische Händler",
          "Fastify + TypeScript Backend",
          "PostgreSQL und Redis",
          "Gemini/OpenRouter Integration",
          "Flutter mit Riverpod und GoRouter",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technologie-Stack",
        text: "Flutter, Dart, Riverpod, Fastify, TypeScript, PostgreSQL, Redis, Playwright, Supabase, Firebase, Gemini und OpenRouter.",
      },
    },
  ],
} as const satisfies ProjectContent;
