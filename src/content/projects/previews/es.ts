import mcpsDevCard from "../../../assets/thumbnails/mcps-development-card.png";
import ferreteriaCard from "../../../assets/thumbnails/ferreteria-card.png";
import fisiotrackCard from "../../../assets/thumbnails/fisiotrack-card.png";
import kankuamoCard from "../../../assets/thumbnails/kankuamo-card.png";

import type { ProjectPreview } from "../../types";

export default [
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
    description: "SaaS multi-tenant con Oracle, React y ASP.NET Core",
  },
  {
    title: "MCPs Development",
    slug: "mcps-development",
    thumbnail: mcpsDevCard,
    description: "Implementación del Model Context Protocol con TypeScript",
  },
] as const satisfies ProjectPreview[];
