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
    description: "Multi-tenant SaaS with Oracle, React, and ASP.NET Core",
  },
  {
    title: "MCPs Development",
    slug: "mcps-development",
    thumbnail: mcpsDevCard,
    description: "Model Context Protocol implementation with TypeScript",
  },
] as const satisfies ProjectPreview[];
