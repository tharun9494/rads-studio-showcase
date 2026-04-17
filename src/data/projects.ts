import villa from "@/assets/projects/residential-villa.jpg";
import office from "@/assets/projects/office-interior.jpg";
import apartment from "@/assets/projects/luxury-apartment.jpg";
import home from "@/assets/projects/modern-home.jpg";
import commercial from "@/assets/projects/commercial-space.jpg";
import turnkey from "@/assets/projects/turnkey-project.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  image: string;
  brief: string;
  scope: string[];
  gallery: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "residential-villa",
    title: "Residential Villa",
    category: "Architecture",
    location: "Vijayawada, AP",
    year: "2024",
    area: "4,800 sq.ft",
    image: villa,
    brief:
      "A two-storey family residence shaped around a central courtyard. Crisp white volumes are softened by warm teak screens, while a quiet stepped entrance frames the arrival sequence and frames the garden beyond.",
    scope: [
      "Architectural Planning",
      "Structural Design",
      "Interior Design",
      "Landscape Concept",
      "Turnkey Execution",
    ],
    gallery: [
      { src: villa, caption: "Front elevation at dusk" },
      { src: home, caption: "Garden approach" },
      { src: apartment, caption: "Living room" },
      { src: turnkey, caption: "Kitchen and dining" },
    ],
  },
  {
    slug: "office-interior",
    title: "Office Interior",
    category: "Commercial",
    location: "Vijayawada, AP",
    year: "2024",
    area: "3,200 sq.ft",
    image: office,
    brief:
      "An open-plan workplace organised under a sculptural skylight. Oak panelling, slim black steel and exposed services balance warmth with the rigour of a working studio.",
    scope: [
      "Space Planning",
      "Interior Design",
      "Lighting Design",
      "Furniture Specification",
      "Project Management",
    ],
    gallery: [
      { src: office, caption: "Open workspace" },
      { src: commercial, caption: "Reception" },
      { src: turnkey, caption: "Pantry" },
    ],
  },
  {
    slug: "luxury-apartment",
    title: "Luxury Apartment",
    category: "Interior",
    location: "Vijayawada, AP",
    year: "2023",
    area: "2,400 sq.ft",
    image: apartment,
    brief:
      "A serene three-bedroom apartment dressed in linen, travertine and brushed brass. Arched openings borrow light between rooms, creating a calm sequence anchored by a sculptural marble centrepiece.",
    scope: [
      "Interior Design",
      "Bespoke Joinery",
      "Lighting Design",
      "Styling & Art",
      "Turnkey Delivery",
    ],
    gallery: [
      { src: apartment, caption: "Living room" },
      { src: turnkey, caption: "Kitchen" },
      { src: villa, caption: "Master suite" },
    ],
  },
  {
    slug: "modern-home",
    title: "Modern Home",
    category: "Architecture",
    location: "Vijayawada, AP",
    year: "2023",
    area: "3,600 sq.ft",
    image: home,
    brief:
      "A compact urban home that opens onto a tropical court. Concrete volumes and a teak portal carve out a generous threshold, while interior light spills out into the planted edge at blue hour.",
    scope: [
      "Architectural Planning",
      "Structural Design",
      "Interior Design",
      "Landscape Lighting",
    ],
    gallery: [
      { src: home, caption: "Entry court" },
      { src: villa, caption: "Side elevation" },
      { src: apartment, caption: "Lounge" },
    ],
  },
  {
    slug: "commercial-space",
    title: "Commercial Space",
    category: "Interior",
    location: "Vijayawada, AP",
    year: "2024",
    area: "2,800 sq.ft",
    image: commercial,
    brief:
      "A bright retail flagship designed around terrazzo, brushed brass and warm linen tones. Display joinery is calibrated to recede, letting product and people lead the experience.",
    scope: [
      "Retail Planning",
      "Interior Design",
      "Bespoke Display Joinery",
      "Lighting Design",
      "Turnkey Execution",
    ],
    gallery: [
      { src: commercial, caption: "Main floor" },
      { src: office, caption: "Back of house" },
      { src: turnkey, caption: "Lounge area" },
    ],
  },
  {
    slug: "turnkey-project",
    title: "Turnkey Project",
    category: "Full Delivery",
    location: "Vijayawada, AP",
    year: "2024",
    area: "5,200 sq.ft",
    image: turnkey,
    brief:
      "A full turnkey home delivered design-to-handover. Walnut joinery, marble surfaces and warm pendants create a generous, lived-in family heart that opens directly to the garden.",
    scope: [
      "Architectural Planning",
      "Structural Design",
      "Interior Design",
      "MEP Coordination",
      "Construction Management",
      "Handover & Styling",
    ],
    gallery: [
      { src: turnkey, caption: "Kitchen and dining" },
      { src: apartment, caption: "Living" },
      { src: villa, caption: "Exterior" },
      { src: home, caption: "Garden side" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacent(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  return { prev, next };
}
