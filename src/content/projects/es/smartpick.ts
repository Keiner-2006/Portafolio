import type { ProjectContent } from "../../types";

export default {
  title: "SmartPick – Agregador Inteligente de Precios",
  theme: "dark",
  tags: ["flutter", "dart", "typescript", "node", "postgresql", "redis", "supabase", "ai", "restapi"],
  description:
    "Plataforma para comparar ofertas tecnológicas en Colombia mediante recolección automatizada de datos, búsqueda y comparación desde una aplicación Flutter.<br/><br/>El backend combina Fastify, PostgreSQL, Redis y Playwright para obtener y procesar productos de múltiples retailers, con integración de IA para búsquedas y análisis más inteligentes.",
  components: [
    {
      type: "text",
      props: {
        title: "Datos, automatización y experiencia móvil",
        text: "SmartPick no se limita a una API tradicional: incluye workers de scraping, normalización de información, almacenamiento en PostgreSQL, cache con Redis y una app Flutter que consume ofertas, comparaciones y búsquedas asistidas por IA.",
      },
    },
    {
      type: "list",
      props: {
        title: "Características principales",
        items: [
          "Scraping automatizado con Playwright",
          "Integración con retailers colombianos como Mercado Libre, Olímpica, Alkosto, Alkomprar, Jumbo y Falabella",
          "Backend Fastify + TypeScript",
          "PostgreSQL y Redis para persistencia y cache",
          "Integraciones con Gemini/OpenRouter para funciones asistidas por IA",
          "Aplicación Flutter con Riverpod y GoRouter",
          "Alertas, favoritos, comparación y autenticación",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Stack Tecnológico",
        text: "Flutter, Dart, Riverpod, Fastify, TypeScript, PostgreSQL, Redis, Playwright, Supabase, Firebase, Gemini y OpenRouter.",
      },
    },
  ],
} as const satisfies ProjectContent;
