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
    description: "MVVM-Architektur mit Flutter, Offline-First-Strategie und Leistungsoptimierung",
  },
  {
    title: "Baumarkt E-Commerce",
    slug: "ferreteria",
    thumbnail: ferreteriaCard,
    description: "Hexagonale Architektur mit ASP.NET Core, Gemini KI und OWASP-Sicherheit",
  },
  {
    title: "FisioTrack – Klinikverwaltung",
    slug: "fisiotrack",
    thumbnail: fisiotrackCard,
    description: "Multi-Tenant-SaaS mit Oracle, React und ASP.NET Core",
  },
  {
    title: "MCPs Entwicklung",
    slug: "mcps-development",
    thumbnail: mcpsDevCard,
    description: "Model Context Protocol Implementierung mit TypeScript",
  },
] as const satisfies ProjectPreview[];
