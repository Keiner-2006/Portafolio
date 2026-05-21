import mcpsPlaceholder from "../../../assets/images/projects/ferreteria/ferreteria-2.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "MCPs Development",
  theme: "light",
  tags: ["typescript", "node", "mcp", "ai"],
  description:
    "Suite de servidores Model Context Protocol (MCP) construidos con TypeScript, que permiten conexiones seguras y estandarizadas entre Modelos de Lenguaje Extensos (LLMs) y APIs .NET.<br/><br/>Se enfoca en la interoperabilidad de sistemas, permitiendo que asistentes de IA interactúen con backends empresariales .NET a través de una capa de protocolo bien definida.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: mcpsPlaceholder,
        alt: "Arquitectura de servidores MCP",
        caption: "Visión General de Arquitectura MCP",
      },
    },
    {
      type: "text",
      props: {
        title: "Arquitectura y Diseño",
        text: "Cada servidor MCP se implementa como un módulo TypeScript independiente que sigue la especificación del Model Context Protocol. La arquitectura enfatiza la separación clara entre la interfaz LLM y la capa de servicios backend, con manejo estandarizado de errores y gestión de recursos.",
      },
    },
    {
      type: "list",
      props: {
        title: "Características Principales",
        items: [
          "Implementación de la especificación Model Context Protocol (MCP)",
          "Canal de comunicación seguro entre LLM y API .NET",
          "TypeScript con tipado estricto y manejo integral de errores",
          "Arquitectura de servidor modular para extensibilidad",
          "Definiciones estandarizadas de recursos y herramientas",
          "Interoperabilidad entre IA y sistemas empresariales",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Stack Tecnológico",
        text: "TypeScript, Node.js, MCP SDK, Capa de Integración .NET, APIs RESTful, Validación JSON Schema.",
      },
    },
  ],
} as const satisfies ProjectContent;
