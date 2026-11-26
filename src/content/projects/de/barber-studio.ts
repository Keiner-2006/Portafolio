import type { ProjectContent } from "../../types";

export default {
  title: "Navaja Studio OS – Barber-SaaS",
  theme: "dark",
  tags: ["angular", "typescript", "node", "postgresql", "saas", "security", "restapi"],
  description:
    "Eine Multi-Tenant-SaaS-Plattform für den vollständigen Betrieb von Barbershops: Buchungen, Terminplanung, Kunden, Inventar, Einkauf, Kasse, Berichte und Filialverwaltung.<br/><br/>Das Projekt setzt auf klare Verantwortungsgrenzen, rollenbasierten Zugriff, Filial-Scope, Konfliktbehandlung bei Buchungen, Auditierbarkeit und Idempotenz.",
  source: "https://github.com/Keiner-2006/barber-studio",
  live: "https://barber-studio-1ook.onrender.com",
  components: [
    {
      type: "text",
      props: {
        title: "Produktorientierte Architektur",
        text: "Die Lösung ist als echtes Multi-Tenant-SaaS mit Angular-Frontend und NestJS/PostgreSQL-Backend konzipiert. Geschäftsisolierung, Rollen und Filialkontext werden serverseitig durchgesetzt.",
      },
    },
    {
      type: "list",
      props: {
        title: "Kernfunktionen",
        items: [
          "Buchungen und Terminplanung mit Verfügbarkeitsprüfung",
          "Verwaltung von Kunden, Services, Mitarbeitern und Filialen",
          "Inventar, Einkauf, Kasse und Berichte",
          "RBAC und Filial-Scope",
          "Idempotenz und Transaktionen",
          "Auditierung, Rate Limiting, Validierung und Sicherheitsprüfung",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technologie-Stack",
        text: "Angular 19, TypeScript, NestJS, PostgreSQL, TypeORM, JWT/Auth, Zod/Class Validator, pnpm workspaces, Render und Vercel.",
      },
    },
  ],
} as const satisfies ProjectContent;
