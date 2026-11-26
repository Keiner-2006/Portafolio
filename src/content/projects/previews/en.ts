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
    description: "Multi-tenant barbershop SaaS with scheduling, cash, inventory, reporting, and role-based security",
  },
  {
    title: "Instrumenta – Surgical Simulator",
    slug: "instrumenta",
    thumbnail: instrumentaCard,
    description: "Interactive simulation with React, PixiJS, XState, and Blender-produced environments",
  },
  {
    title: "SmartPick",
    slug: "smartpick",
    thumbnail: smartpickCard,
    description: "Intelligent price aggregator with Flutter, scraping, PostgreSQL, Redis, and AI",
  },
  {
    title: "App Reserva Kankuamo",
    slug: "reserva-kankuamo",
    thumbnail: kankuamoCard,
    description: "MVVM architecture with Flutter, offline-first strategy, and performance optimization",
  },
  {
    title: "Hardware Store E-commerce",
    slug: "ferreteria",
    thumbnail: ferreteriaCard,
    description: "Hexagonal architecture with ASP.NET Core, Gemini AI, and OWASP security",
  },
  {
    title: "FisioTrack – Clinic Management",
    slug: "fisiotrack",
    thumbnail: fisiotrackCard,
    description: "Full-stack clinic management with .NET, React, roles, and real-time workflows",
  },
  {
    title: "MCPs Development",
    slug: "mcps-development",
    thumbnail: mcpsDevCard,
    description: "Model Context Protocol implementation with TypeScript",
  },
] as const satisfies ProjectPreview[];
