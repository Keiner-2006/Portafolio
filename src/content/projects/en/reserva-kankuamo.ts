import kankuamo1 from "../../../assets/images/projects/reserva-kankuamo/kankuamo-1.jpeg";
import kankuamo2 from "../../../assets/images/projects/reserva-kankuamo/kankuamo-2.jpeg";

import type { ProjectContent } from "../../types";

export default {
  title: "App Reserva Kankuamo",
  theme: "dark",
  tags: ["flutter", "dart", "supabase", "mvvm", "restapi"],
  description:
    "A Flutter-based mobile application for cultural tourism reservations, built with MVVM architecture and an offline-first strategy using SQLite + Supabase synchronization.<br/><br/>Designed to provide a seamless booking experience even in low-connectivity environments, featuring cultural internationalization, Supabase cloud sync, and performance optimization for low-end devices.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: kankuamo1,
        alt: "Reserva Kankuamo App Screen",
        caption: "App Home Screen",
      },
    },
    {
      type: "text",
      props: {
        title: "Architecture & Design",
        text: "Built with the MVVM (Model-View-ViewModel) pattern to ensure clean separation of concerns. The repository pattern handles data operations, switching seamlessly between remote API calls and local SQLite storage for true offline-first functionality. Supabase provides cloud synchronization, authentication, and real-time updates when connectivity is available.",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "MVVM architecture with repository pattern",
          "Offline-first strategy with SQLite + Supabase sync",
          "Supabase cloud storage for audio and media files",
          "Cultural internationalization (i18n) support",
          "Performance optimized for low-end Android devices",
          "RESTful API integration with error handling",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: kankuamo2,
        alt: "Reservation Flow",
        caption: "Booking Experience",
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Stack",
        text: "Flutter & Dart for cross-platform mobile development. Provider for state management. SQLite & Supabase for data persistence and cloud sync. REST APIs for backend communication.",
      },
    },
  ],
} as const satisfies ProjectContent;
