import type { ProjectContent } from "../../types";

export default {
  title: "Instrumenta – Simulador Quirúrgico",
  theme: "light",
  tags: ["react", "typescript", "ai", "security"],
  description:
    "Simulador interactivo para entrenamiento en instrumentación quirúrgica, construido con React, PixiJS y XState, con escenarios visuales producidos en Blender.<br/><br/>El proyecto combina lógica de simulación, interacción gráfica, estados de entrenamiento, validaciones y generación de reportes. Demuestra cómo integro software y producción visual cuando una solución necesita ir más allá de una interfaz tradicional.",
  source: "https://github.com/Keiner-2006/InstrumentQuirurgicSimulator",
  components: [
    {
      type: "text",
      props: {
        title: "Software + interacción + producción visual",
        text: "La aplicación usa PixiJS para interacción en lienzo y XState para modelar estados como briefing, práctica, pausa y resultados. Blender se utiliza para producir escenarios, encuadres y elementos visuales que luego se integran al simulador web.",
      },
    },
    {
      type: "list",
      props: {
        title: "Características principales",
        items: [
          "Interacción con instrumentos mediante drag & drop y colocación libre",
          "Máquina de estados con XState para controlar el flujo de entrenamiento",
          "Escenarios y recursos visuales producidos con Blender",
          "Validación de contenido con Zod",
          "Informes JSON e historial local de intentos",
          "43 pruebas Vitest documentadas en el repositorio",
          "Recorridos guiados de cirugía activa y cierre",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Stack Tecnológico",
        text: "React 19, TypeScript, Vite, PixiJS 8, XState 5, Zod, Vitest y Blender.",
      },
    },
  ],
} as const satisfies ProjectContent;
