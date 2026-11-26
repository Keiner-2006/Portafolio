import barberStudioCard from "../../../assets/thumbnails/barber-studio-card.svg";
import instrumentaCard from "../../../assets/thumbnails/instrumenta-card.svg";
import smartpickCard from "../../../assets/thumbnails/smartpick-card.svg";
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
    description: "Multi-Tenant-Barber-SaaS mit Terminplanung, Kasse, Inventar, Berichten und rollenbasierter Sicherheit",
  },
  {
    title: "Instrumenta – Chirurgischer Simulator",
    slug: "instrumenta",
    thumbnail: instrumentaCard,
    description: "Interaktive Simulation mit React, PixiJS, XState und Blender-Szenen",
  },
  {
    title: "SmartPick",
    slug: "smartpick",
    thumbnail: smartpickCard,
    description: "Intelligenter Preisaggregator mit Flutter, Scraping, PostgreSQL, Redis und KI",
  },
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
    description: "Full-Stack-Klinikverwaltung mit .NET, React, Rollen und Echtzeit-Prozessen",
  },
  {
    title: "MCPs Entwicklung",
    slug: "mcps-development",
    thumbnail: mcpsDevCard,
    description: "Model Context Protocol Implementierung mit TypeScript",
  },
] as const satisfies ProjectPreview[];
