import kankuamo1 from "../../../assets/images/projects/reserva-kankuamo/kankuamo-1.jpeg";
import kankuamo2 from "../../../assets/images/projects/reserva-kankuamo/kankuamo-2.jpeg";

import type { ProjectContent } from "../../types";

export default {
  title: "App Reserva Kankuamo",
  theme: "dark",
  tags: ["flutter", "dart", "supabase", "mvvm", "restapi"],
  description:
    "Aplicación móvil Flutter para reservas de turismo cultural, construida con arquitectura MVVM y estrategia offline-first con SQLite + sincronización Supabase.<br/><br/>Diseñada para brindar una experiencia de reserva fluida incluso en entornos de baja conectividad, con internacionalización cultural, sincronización en la nube con Supabase y optimización de rendimiento para dispositivos de gama baja.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: kankuamo1,
        alt: "Pantalla de la App Reserva Kankuamo",
        caption: "Pantalla Principal",
      },
    },
    {
      type: "text",
      props: {
        title: "Arquitectura y Diseño",
        text: "Construida con el patrón MVVM (Model-View-ViewModel) para garantizar una separación limpia de responsabilidades. El patrón Repository maneja las operaciones de datos, alternando sin problemas entre llamadas API remotas y almacenamiento local SQLite para una funcionalidad offline-first real. Supabase proporciona sincronización en la nube, autenticación y actualizaciones en tiempo real cuando hay conectividad.",
      },
    },
    {
      type: "list",
      props: {
        title: "Características Principales",
        items: [
          "Arquitectura MVVM con patrón Repository",
          "Estrategia offline-first con SQLite + Supabase sync",
          "Almacenamiento en nube Supabase para archivos de audio y multimedia",
          "Internacionalización cultural (i18n)",
          "Rendimiento optimizado para dispositivos Android de gama baja",
          "Integración de API RESTful con manejo de errores",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: kankuamo2,
        alt: "Flujo de Reserva",
        caption: "Experiencia de Reserva",
      },
    },
    {
      type: "text",
      props: {
        title: "Stack Tecnológico",
        text: "Flutter y Dart para desarrollo móvil multiplataforma. Provider para gestión de estado. SQLite y Supabase para persistencia de datos y sincronización en la nube. APIs REST para comunicación con el backend.",
      },
    },
  ],
} as const satisfies ProjectContent;
