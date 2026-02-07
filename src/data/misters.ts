import { Map, Newspaper, Presentation, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type MisterStatus = "live" | "beta" | "coming-soon";

export type Mister = {
  id: string;
  name: string;
  url: string;
  accent: string;
  icon: LucideIcon;
  description: string;
  personality: string;
  status: MisterStatus;
};

export const MISTERS: Mister[] = [
  {
    id: "maps",
    name: "Mister Maps",
    url: "https://mister-maps.vercel.app",
    accent: "#c85a2a",
    icon: Map,
    description:
      "Interaktive kartmønstre med Mapbox GL, MapLibre og norske offentlige APIer.",
    personality: "Trenger du veibeskrivelse? Jeg kjenner hver konturlinje.",
    status: "live",
  },
  {
    id: "news",
    name: "Mister News",
    url: "https://mrnews.vercel.app",
    accent: "#B6FF4D",
    icon: Newspaper,
    description:
      "Nyhetsaggregering med AI-analyse, sanntidsfeeder og flerspråklig dekning.",
    personality: "Breaking: nyhetene sover aldri, og det gjør ikke jeg heller.",
    status: "live",
  },
  {
    id: "presentations",
    name: "Mister Presentations",
    url: "https://mister-presentations.vercel.app",
    accent: "#B6FF4D",
    icon: Presentation,
    description:
      "30+ presentasjonsmaler med Reveal.js, animasjoner og eksport.",
    personality: "30+ måter å presentere på. Slide inn i noe spektakulært.",
    status: "live",
  },
  {
    id: "remote",
    name: "Mister Remote",
    url: "#",
    accent: "#FFB000",
    icon: Terminal,
    description:
      "Fjernkontroll for utviklingsmiljøer. SSH, terminaler og kommandoer.",
    personality: "Venter på kommandogodkjenning.",
    status: "coming-soon",
  },
];
