import kankuamo1 from "../../../assets/images/projects/reserva-kankuamo/kankuamo-1.jpeg";
import kankuamo2 from "../../../assets/images/projects/reserva-kankuamo/kankuamo-2.jpeg";

import type { ProjectContent } from "../../types";

export default {
  title: "App Reserva Kankuamo",
  theme: "dark",
  tags: ["flutter", "dart", "supabase", "mvvm", "restapi"],
  description:
    "Eine Flutter-basierte Mobile-App für Kulturtourismus-Reservierungen, entwickelt mit MVVM-Architektur und Offline-First-Strategie mit SQLite + Supabase-Synchronisierung.<br/><br/>Konzipiert für nahtlose Buchungen auch in Gebieten mit schwacher Konnektivität, mit kultureller Internationalisierung, Supabase-Cloud-Sync und Leistungsoptimierung für Endgeräte der unteren Preisklasse.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: kankuamo1,
        alt: "Reserva Kankuamo App-Bildschirm",
        caption: "App-Startbildschirm",
      },
    },
    {
      type: "text",
      props: {
        title: "Architektur & Design",
        text: "Entwickelt mit dem MVVM (Model-View-ViewModel)-Pattern für saubere Trennung der Belange. Das Repository-Pattern verwaltet Datenoperationen und wechselt nahtlos zwischen Remote-API-Aufrufen und lokalem SQLite-Speicher für echte Offline-First-Funktionalität. Supabase bietet Cloud-Synchronisierung, Authentifizierung und Echtzeit-Updates bei verfügbarer Konnektivität.",
      },
    },
    {
      type: "list",
      props: {
        title: "Hauptfunktionen",
        items: [
          "MVVM-Architektur mit Repository-Pattern",
          "Offline-First-Strategie mit SQLite + Supabase-Sync",
          "Supabase-Cloud-Speicher für Audio- und Mediendateien",
          "Kulturelle Internationalisierung (i18n)",
          "Leistungsoptimiert für Low-End-Android-Geräte",
          "RESTful-API-Integration mit Fehlerbehandlung",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: kankuamo2,
        alt: "Reservierungsablauf",
        caption: "Buchungserlebnis",
      },
    },
    {
      type: "text",
      props: {
        title: "Technologie-Stack",
        text: "Flutter & Dart für plattformübergreifende Mobile-Entwicklung. Provider für State-Management. SQLite & Supabase für Datenpersistenz und Cloud-Sync. REST-APIs für Backend-Kommunikation.",
      },
    },
  ],
} as const satisfies ProjectContent;
