export interface Project {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  category: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "MedAlert",
    subtitle: "Family medication management",
    category: "Mobile Application",
    description:
      "A mobile application designed to help families manage patients, medications, schedules, stock and treatment adherence.",
    technologies: [
      "Flutter",
      "Dart",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Firebase",
      "Azure",
    ],
    featured: true,
  },

  {
    number: "02",
    title: "ERP Moshell",
    subtitle: "Textile manufacturing management",
    category: "ERP System",
    description:
      "An ERP system focused on managing inventory, customers, suppliers, purchases, orders and production processes.",
    technologies: ["React", "Laravel", "PHP", "PostgreSQL"],
  },

  {
    number: "03",
    title: "Business Management System",
    subtitle: "Service management platform",
    category: "Web Application",
    description:
      "A web platform for managing services, customers, accounts receivable, materials, inventory and business revenue.",
    technologies: ["React", "Express.js", "MongoDB"],
  },

  {
    number: "04",
    title: "People Detection",
    subtitle: "People detection & occupancy control",
    category: "Computer Vision",
    description:
      "A computer vision project for detecting people and processing video captured through a camera.",
    technologies: ["Python", "Computer Vision", "Image Processing"],
  },

  {
    number: "05",
    title: "Warehouse Management",
    subtitle: "Purchases, sales & inventory",
    category: "Desktop Application",
    description:
      "A management system for warehouse operations, purchases, sales and payment methods.",
    technologies: ["C#", "SQL"],
  },
];
