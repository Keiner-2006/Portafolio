import type { ProjectContent } from "../../types";

export default {
  title: "Navaja Studio OS – SaaS para Barberías",
  theme: "dark",
  tags: ["angular", "typescript", "node", "postgresql", "saas", "security", "restapi"],
  description:
    "Plataforma SaaS multi-tenant para la operación integral de barberías: reservas, agenda, clientes, inventario, compras, caja, reportes y gestión por sucursales.<br/><br/>El proyecto está diseñado con separación de responsabilidades, control de acceso por roles y alcance por sucursal, manejo de concurrencia en reservas, auditoría, idempotencia y una arquitectura preparada para crecer hacia pagos, notificaciones y automatización.",
  source: "https://github.com/Keiner-2006/barber-studio",
  live: "https://barber-studio-1ook.onrender.com",
  components: [
    {
      type: "text",
      props: {
        title: "Arquitectura orientada a producto",
        text: "La solución se plantea como un SaaS multi-tenant real, con frontend Angular y backend NestJS/PostgreSQL. La arquitectura contempla aislamiento entre negocios, roles como owner, admin, recepción, barbero, inventario y contabilidad, además de contexto por sucursal y reglas críticas que se validan en backend.",
      },
    },
    {
      type: "list",
      props: {
        title: "Capacidades principales",
        items: [
          "Reservas y agenda con validación de disponibilidad y manejo de conflictos",
          "Gestión de clientes, servicios, barberos y sucursales",
          "Inventario, compras, caja y reportes operativos",
          "RBAC y branch scope para limitar acceso según rol y sucursal",
          "Idempotencia y transacciones para operaciones sensibles",
          "Auditoría, rate limiting, validación y revisión de seguridad",
          "Despliegue preparado para Render/Vercel y PostgreSQL",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Stack Tecnológico",
        text: "Angular 19, TypeScript, NestJS, PostgreSQL, TypeORM, JWT/Auth, Zod/Class Validator, pnpm workspaces, Render y Vercel.",
      },
    },
  ],
} as const satisfies ProjectContent;
