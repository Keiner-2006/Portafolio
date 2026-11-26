import barberStudioCard from "../../../assets/thumbnails/barber-studio-card.webp";
import instrumentaCard from "../../../assets/thumbnails/instrumenta-card.webp";
import smartpickCard from "../../../assets/thumbnails/smartpick-card.webp";
import mcpsDevCard from "../../../assets/thumbnails/mcps-development-card.png";
import ferreteriaCard from "../../../assets/thumbnails/ferreteria-card.png";
import fisiotrackCard from "../../../assets/thumbnails/fisiotrack-card.png";
import kankuamoCard from "../../../assets/thumbnails/kankuamo-card.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Navaja Studio OS",
    slug: "barber-studio",
    thumbnail: barberStudioCard,
    description: "SaaS multi-tenant para barberías con agenda, caja, inventario, reportes y seguridad por roles",
  },
  {
    title: "Instrumenta – Simulador Quirúrgico",
    slug: "instrumenta",
    thumbnail: instrumentaCard,
    description: "Simulación interactiva con React, PixiJS, XState y escenarios producidos en Blender",
  },
  {
    title: "SmartPick",
    slug: "smartpick",
    thumbnail: smartpickCard,
    description: "Agregador inteligente de precios con Flutter, scraping, PostgreSQL, Redis e IA",
  },
  {
    title: "App Reserva Kankuamo",
    slug: "reserva-kankuamo",
    thumbnail: kankuamoCard,
    description: "Arquitectura MVVM con Flutter, estrategia offline-first y rendimiento optimizado",
  },
  {
    title: "Sistema de Ferretería E-commerce",
    slug: "ferreteria",
    thumbnail: ferreteriaCard,
    description: "Arquitectura Hexagonal con ASP.NET Core, IA Gemini y seguridad OWASP",
  },
  {
    title: "FisioTrack – Gestión Clínica",
    slug: "fisiotrack",
    thumbnail: fisiotrackCard,
    description: "Gestión clínica full-stack con .NET, React, roles y procesos en tiempo real",
  },
  {
    title: "MCPs Development",
    slug: "mcps-development",
    thumbnail: mcpsDevCard,
    description: "Implementación del Model Context Protocol con TypeScript",
  },
] as const satisfies ProjectPreview[];
